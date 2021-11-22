// Import Libraries
import React, { useState } from "react";

const Positive = (props) => {
  const [data, setData] = useState({
    question: "",
  });

  return (
    <div class="flex flex-col w-40 h-64 p-3 bg-gradient-to-bl from-green-500 rounded-3xl justify-items-center items-center text-black text-center ">
      <text class="text-xl text-white">Sentiment</text>
      <i class="far fa-smile text-8xl mt-6"></i>
      <text class="mt-16 text-gray-200">Positive</text>
    </div>
  );
};

export default Positive;
