import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 rounded-full text-black shadow-xl mx-3"
            style={{ backgroundColor: "violet" }}
          >
            violet
          </button>
          <button
            onClick={() => setColor("indigo")}
            className="outline-none px-4 rounded-full text-black shadow-xl mx-3"
            style={{ backgroundColor: "indigo" }}
          >
            indigo
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-full text-black shadow-xl mx-3"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full text-black shadow-xl mx-3"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 rounded-full text-black shadow-xl mx-3"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 rounded-full text-black shadow-xl mx-3"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full text-black shadow-xl mx-3"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
