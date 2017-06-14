import dbc from './aws/dbcontroller';

const index = {};

const buildIndex = (TableName = 'Images', callback) => {
  dbc.scan({ TableName }, (err, data) => {
    data.Items.forEach((item) => {
      const { BucketKey, Labels } = item;
      Labels.forEach(({ Name }) => {
        if (Name) {
          const lowerName = Name.toLowerCase();
          if (index[lowerName]) {
            index[lowerName].push(BucketKey);
          } else {
            index[lowerName] = [BucketKey];
          }
        }
      });
    });

    callback(index);
  });
};

export default buildIndex;
