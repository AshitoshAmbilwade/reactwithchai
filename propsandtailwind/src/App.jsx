import { useState } from "react";
import Card from './components/Card';

function App() {
  const object1 = {
    title: "dolphin1",
    desc: "Dolphins are closely related to whales"
  };

  const object2 = {
    title: "dolphin2",
    desc: "Dolphins have flippers adapted for swimming"
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-gray-900">
      <div className="text-center m-2">
        <h1 className="text-black bg-green-500 rounded-xl p-1">
          Tailwind Test
        </h1>
      </div>
      {/* props */}
      {/* props make component reusable */}
      {/* when we want to use same component more than one time we use */}

      {/* <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="https://imgs.search.brave.com/UbzRKgvPzPr8FEuIozbX7ohFztcZCeWKmX_OMv6xlew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZWVw/YWkub3JnL3N0YXRp/Yy9pbWFnZXMvZG9s/cGhpbjEuc3Zn"
          alt="Random Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
          <p className="text-gray-600 mt-2">
            This is a simple card example. It contains an image, a heading, and
            a paragraph styled using Tailwind CSS.
          </p>
        </div>
      </div> */}

      {/* <Card title="dolphin1"/> */}
      {/* now we can reuse same card more times as per need */}

      {/* <Card title="dolphin2"/> */}

      {/* we can pass value in this component */}
      {/* for passing array and object we use {} */}
      {/*like someObj={object}  */}

      {/* we can directly pass object also */}

      <Card object={object1} />
      <Card object={object2} />
    </div>
  );
}

export default App;
