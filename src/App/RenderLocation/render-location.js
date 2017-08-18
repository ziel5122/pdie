import React from 'react';

const trueColor = 'black';
const falseColor = '#4040bf';

let clientColor;
let serverColor;

const RenderLocation = ({ renderLocation }) => {
  if (renderLocation === 'client') {
    clientColor = trueColor;
    serverColor = falseColor;
  } else {
    clientColor = falseColor;
    serverColor = trueColor;
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <span style={{ color: serverColor }}>server </span>
      <span style={{ color: clientColor }}>client.</span>
    </div>
  );
};

export default RenderLocation;
