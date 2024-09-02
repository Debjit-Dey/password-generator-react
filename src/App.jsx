import { useState } from "react";
import Pass from './Pass.jsx';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen flex flex-col items-center duration-200"  
        style={{ backgroundColor: color }}
      >
        <div className="mt-8 md:mt-16 lg:mt-20"> {/* Responsive margin from the top */}
          <Pass/>
        </div>
        <div 
          className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2"
        >
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("grey")}
              className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
