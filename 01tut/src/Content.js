import React from "react";

const Content = () => {
  const handleNameChnage = () => {
    const names = ["tanvir", "ahmed", "badhon"];
    const int = Math.floor(Math.random() * 5);
    return names[int];
  };
  return (
    <main>
      <p>Hello {handleNameChnage()}!</p>
    </main>
  );
};

export default Content;
