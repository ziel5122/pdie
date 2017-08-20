import React from 'react';

let reader;

const ImageInput = ({ setImageUploadUrl }) => {
  if (typeof window !== 'undefined') {
    reader = new FileReader();
    reader.onload = () => setImageUploadUrl(reader.result);
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
