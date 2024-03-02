import React from "react";
import { useState } from "react";
const Sentecechange = () => {
  const [sentence, setSentence] = useState(
    "click below utton to change the sentenc"
  );
  return (
    <div className="w-screen flex flex-wrap justify-center">
      <h1>{sentence}</h1>
      <button
        onClick={() => setSentence("hiii")}
        className="outline-none px-4 rounded-full text-white shadow-xl mx-3"
      >
        click me
      </button>
    </div>
  );
};

export default Sentecechange;
