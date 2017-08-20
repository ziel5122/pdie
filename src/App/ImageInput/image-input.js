import React from 'react';

import { gcv } from '../../backend/gcp';

let reader;

const ImageInput = ({ setImageUploadUrl }) => {
  console.log('this updated');

  if (typeof window !== 'undefined') {
    reader = new FileReader();
    reader.onload = () => {
      const { result } = reader;
      setImageUploadUrl(result);
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
