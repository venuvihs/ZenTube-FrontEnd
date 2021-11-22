// Import Libraries
import React, { useState } from "react";

const Answers = (props) => {
  const [data, setData] = useState({
    question: "",
  });

  const onChangeHandler = (val) => {
    setData({
      ...data,
      data: val,
    });
  };

  const onClickHandler = () => {
    console.log("Start Recording");
  };

  return (
    <div class="w-3/4 h-14 p-3 flex flex-row border-white border-2 bg-gradient-to-r from-pink-400 to-pink-700 rounded-3xl justify-items-start items-center text-white mx-auto ">
      <text class="flex-1">1. John</text>
      <text class="flex-1">Confidence: 13.88</text>
      <text class="flex-1 text-right">13 min Ago</text>
    </div>
  );
};

export default Answers;
