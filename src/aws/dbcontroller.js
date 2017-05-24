import AWS from 'aws-sdk';

import { dbConfig } from './aws-config';

AWS.config = dbConfig;
const docClient = new AWS.DynamoDB.DocumentClient();

export default {
  delete(params, callback) {
    docClient.delete(params, callback);
  },

  get(params, callback) {
    docClient.get(params, callback);
  },

  put(params, callback) {
    docClient.put(params, callback);
  },

  putImage(image, callback) {
    const { ...params } = image;
    params.Item.BucketKey = `${params.Item.Bucket}|${params.Item.Key}`;
    this.put(params, callback);
  },

  scan(params, callback) {
    docClient.scan(params, callback);
  },

  update(params, callback) {
    docClient.update(params, callback);
  },
};
