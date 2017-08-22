import React from 'react';

import config from '../../../config/gcp';

const labelUrl = `https://vision.googleapis.com/v1/images:annotate?key=${config.apiKey}`;

let reader;

const ImageInput = ({ setImageUrl, setImageLabels }) => {
  if (typeof window !== 'undefined') {
    reader = new FileReader();
    reader.onload = () => {
      const { result } = reader;
      setImageUrl(result);

      const request = {
        requests: [
          {
            image: {
              content: result.substr(result.indexOf(',') + 1),
            },
            features: [
              {
                type: 'LABEL_DETECTION',
                maxResults: 10,
              },
            ],
          },
        ],
      };

      fetch(labelUrl, {
        method: 'post',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(request),
      }).then((response) => {
        response.json().then((json) => {
          const labels = json.responses[0].labelAnnotations
            .map(({ description, score }) => ({ description, score }));
          setImageLabels(labels);
        });
      }).catch(err => console.error(err));
    };
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
