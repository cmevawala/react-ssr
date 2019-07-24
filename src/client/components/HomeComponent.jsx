import React from "react";

const HomeComponent = () => {
  return (
    <div>
      <div>Home Component</div>
      <button onClick={() => console.log('Press me Clicked!')}>Press me!</button>
    </div>
  );
};

export default HomeComponent;