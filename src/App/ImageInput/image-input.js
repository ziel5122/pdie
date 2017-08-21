import React from 'react';

import config from '../../../config/gcp';

const labelUrl = `https://vision.googleapis.com/v1/images:annotate?key=${config.apiKey}`;

let reader;

const ImageInput = ({ setImageUploadUrl }) => {
  if (typeof window !== 'undefined') {
    reader = new FileReader();
    reader.onload = () => {
      const { result } = reader;
      setImageUploadUrl(result);

      const request = {
        requests: [
          {
            image: {
              source: {
                imageUri: result,
              },
            },
            features: [
              {
                type: 'LABEL_DETECTION',
              },
            ],
          },
        ],
      };

      fetch(labelUrl, {
        method: 'post',
        headers: new Headers({
          'content-type': 'application/json',
        }),
        body: request,
      }).then((response) => {
        return response.json();
      }).then(responseJson => console.log(responseJson.labelAnnotations));
    }
  }

  return (
    <input
      id="image-input"
      onChange={(e) => {
        reader.readAsDataURL(e.target.files[0]);
      }}
      style={{ display: 'none' }}
      type="file"
    />
  );
};

export default ImageInput;
