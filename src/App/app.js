import React from 'react';

let count = 0;

const App = () => {
  const renderLocation = process.env.RENDER_LOCATION || 'client';
  console.log(renderLocation);

  return (
    <div>
      <h1>App Page</h1>
      <h2>This is the main page</h2>
      <p>{`This component was rendered on the ${renderLocation}`}</p>
    </div>
  );
};

export default App;
