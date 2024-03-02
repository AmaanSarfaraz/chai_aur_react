import { useState } from "react";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(5);
  let [message, setMessage] = useState("");
  // let counter = 5;
  const addValue = () => {
    if (counter < 20) {
      //usestate works in bunches which means itupdates the code in bunches
      setCounter((prevCounter) => {
        return prevCounter + 1;
      });
      setCounter((prevCounter) => {
        return prevCounter + 1;
      });
      setCounter((prevCounter) => {
        return prevCounter + 1;
      });
      setCounter((prevCounter) => {
        return prevCounter + 1;
      });
      setMessage("");
    } else {
      setMessage(`limit exceeded can't go above ${counter}`);
    }
  };
  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("clicked", counter - 1);
      setMessage("");
    } else {
      setMessage(`limit exceeded can't go below ${counter}`);
    }
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>
        {message} <br />
        counter value: {counter}
      </h2>

      <button onClick={addValue}>increase {counter}</button>
      <br />
      <button onClick={subValue}>Decrease {counter}</button>
    </>
  );
}

export default App;
