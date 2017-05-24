import storage from '@google-cloud/storage';
import vision from '@google-cloud/vision';
import google from 'googleapis';

const imageUrl = 'http://images.boats.com/resize/1/72/41/6077241_20170120112356443_1_LARGE.jpg?w=600&h=600';
const imagePath = '/home/austin/Downloads/monterey-wharf-and-marina-monterey-bay-california-usa_main.jpg';

google.auth.getApplicationDefault();

const storageCredentials = require('../../storage-credentials.json');
const visionCredentials = require('../../vision-credentials.json');

const gcv = vision({
  credentials: visionCredentials,
  // keyFilename: '/home/austin/pdie/vision-credentials.json',
  projectId: 'pdie-image-labeling',
});
/*
gcv.detectLabels(
  imageUrl,
  (err, labels, apiResponse) => {
    console.log(labels);
  },
);
*/

const gcs = storage({
  bucketName: 'pdie-image-storage.appspot.com',
  credentials: storageCredentials,
  // keyFilename: '/home/austin/pdie/storage-credentials.json',
});

const bucket = gcs.bucket('pdie-image-storage.appspot.com');
/*
bucket.upload(imagePath, (err, file) => {
  if (!err) console.log('success');
  else console.error(err);
});

bucket.file('monterey-wharf-and-marina-monterey-bay-california-usa_main.jpg')
  .download({ destination: 'wharf.jpg' }, (err) => {
    if (!err) console.log('success');
    else console.error(err);
  });
  */
export { gcs, gcv };
