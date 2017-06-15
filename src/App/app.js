import React from 'react';

const App = () => {
  const renderLocation = process.env.RENDER_LOCATION;
  console.log(renderLocation);

  return (
    <div>
      <h1>App Page</h1>
      <h2>This is the main page</h2>
      <p>{`This component was rendered on the face`}</p>
    </div>
  );
};

export default App;
