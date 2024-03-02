import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="flex">
        <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4 mr-4">
          Tailwind test
        </h1>
        <Card username="sarfaraz" buttontext="chat with me" />
        <Card username="jhon" buttontext="see me" />
      </div>
    </>
  );
}

export default App;
