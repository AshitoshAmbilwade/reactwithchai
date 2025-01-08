import React from "react";

//function Card({ title="dolphin" }) default value
function Card({ object }) {
  // console.log(title);
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden mb-10">
      <img
        src="https://imgs.search.brave.com/UbzRKgvPzPr8FEuIozbX7ohFztcZCeWKmX_OMv6xlew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZWVw/YWkub3JnL3N0YXRp/Yy9pbWFnZXMvZG9s/cGhpbjEuc3Zn"
        alt="Random Image"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{object.title}</h2>
        <p className="text-gray-600 mt-2">
          {object.desc}
        </p>
      </div>
    </div>
  );
}

export default Card;
