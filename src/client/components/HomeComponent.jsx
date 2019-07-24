import React from "react";

const HomeComponent = () => {
  return (
    <div>
      <div>Home Component</div>
      <button onclick={() => console.log('Hi there!')}>Press me!</button>
    </div>
  );
};

export default HomeComponent;