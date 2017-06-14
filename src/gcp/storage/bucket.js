import dotenv from 'dotenv';
import storage from '@google-cloud/storage';

dotenv.config();

const credentials = require('../../../storage-credentials.json');
const bucketName = process.env.IMAGE_BUCKET;

const gcs = storage({
  credentials,
});

const bucket = storage({
  credentials,
}).bucket(bucketName);

bucket.exists()
  .then(data => console.log(data))
  .catch(err => console.error(err));
