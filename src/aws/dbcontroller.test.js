import AWS from 'aws-sdk';
import path from 'path';

import { dbConfig } from './aws-config';
import dbc from './dbcontroller';

/*
    Tests for the dbcontroller module. "test" table is cleared and repopulated
    each time the tests are run.
*/

const jsonPath = path.join(__dirname, '../../json');
const prepath = path.join(jsonPath, 'pre');
const testPath = path.join(jsonPath, 'test');

describe('dbcontroller test suite', () => {

  let params;

  beforeAll(() => {
    AWS.config = dbConfig;
    const docClient = new AWS.DynamoDB.DocumentClient();
    const dels = require('../../json/pre/dels.json');
    const puts = require('../../json/pre/puts.json');
    const imageDels = require('../../json/pre/image-dels.json');
    const imagePuts = require('../../json/pre/image-puts.json');

    return new Promise((fulfill, reject) => {
      docClient.batchWrite(dels, (err) => {
        if (err) reject();
        docClient.batchWrite(puts, (err) => {
          if (err) reject();
          docClient.batchWrite(imageDels, (err) => {
            if (err) reject();
            docClient.batchWrite(imagePuts, (err) => {
              if (err) reject();
              fulfill();
            });
          });
        });
      });
    });
  });

  test('DBController deletes a record from "test" table', done => {
    params = require('../../json/test/del.json');

    dbc.get(params, (err, data) => {
      expect(data.Item).toEqual({
        message: 'This record will be deleted.',
        uuid: '96f43493-9820-4e33-a235-855a65cb3f8e',
      });

      dbc.delete(params, (err, data) => {
        expect(err).toBeNull();

        dbc.get(params, (err, data) => {
          expect(data).toEqual({});
          done();
        });
      });
    });
  });

  test('DBController gets a record from "test" table', done => {
    params = require('../../json/test/get.json');

    dbc.get(params, (err, data) => {
      expect(data.Item).toEqual({
        message: 'This is a test record.',
        uuid: '3d808379-41b3-44fd-8166-3d2aacf51e52',
      });
      done();
    });
  });

  test('DBController puts a record into "test" table', done => {
    params = require('../../json/test/put.json');

    const getParams = {
      TableName: "test",
      Key: {
        uuid: "dc498c48-0951-46e7-9e31-d162feeda9b7",
      },
    };
    expect(getParams.Key.uuid).toBe(params.Item.uuid);

    dbc.get(getParams, (err, data) => {
      expect(data).toEqual({});

      dbc.put(params, (err, data) => {
        expect(err).toBeNull();
        dbc.get(getParams, (err, data) => {
          expect(data.Item).toEqual({
            message: 'This is also a test record.',
            uuid: 'dc498c48-0951-46e7-9e31-d162feeda9b7',
          });
          done();
        });
      });
    });
  });

  test('DBController puts an image in "test_images" table', done => {
    params = require('../../json/test/putImage.json');

    const getParams = {
      TableName: "test_images",
      Key: {
        BucketKey: "Delete|Me.jpg",
      },
    };

    const keyParts = getParams.Key.BucketKey.split('|');
    expect(keyParts[0]).toBe(params.Item.Bucket);
    expect(keyParts[1]).toBe(params.Item.Key);

    dbc.get(getParams, (err, data) => {
      expect(data).toEqual({});

      dbc.putImage(params, (err, data) => {
        expect(err).toBeNull();

        dbc.get(getParams, (err, data) => {
          // delete data.Item.BucketKey;
          expect(data.Item).toEqual(params.Item);
          done();
        });
      });
    });
  });

  test('DBController updates a record in "test" table', done => {
    params = require('../../json/test/upd.json');
    var get_params = {
      TableName: 'test',
      Key: {
        uuid: '3c9714db-ef66-431e-b309-df73317e2a45'
      }
    };
    expect(get_params.Key.uuid).toBe(params.Key.uuid);

    dbc.get(get_params, (err, data) => {
      expect(data.Item).toEqual({
        message: 'This record will be updated.',
        uuid: '3c9714db-ef66-431e-b309-df73317e2a45',
      });

      dbc.update(params, (err, data) => {
        expect(err).toBeNull();

        dbc.get(get_params, (err, data) => {
          expect(data.Item).toEqual({
            message: 'This is an updated record.',
            uuid: '3c9714db-ef66-431e-b309-df73317e2a45',
          });
          done();
        });
      });
    });
  });
});
