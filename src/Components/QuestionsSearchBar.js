// Import Libraries
import React, { useState } from "react";

const QuestionsSearchBar = (props) => {
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
    <div class="w-1/2 h-14 p-3 flex flex-row border-white border-2 bg-gradient-to-r from-custom-black  to-pink-200 bg-opacity-60 rounded-3xl justify-items-start items-center mx-auto mb-6">
      <i class="fas fa-search text-white m-2"></i>
      <input
        class="w-5/6 bg-transparent m-0 text-white rounded-xl focus:outline-none placeholder-custom-light-blue"
        type="search"
        placeholder={props.placeholder}
        onChange={(val) => onChangeHandler(val)}
        autoFocus={false}
      />
      <button
        class=" ml-4 p-2  rounded-3xl text-sm   
          active:bg-blue-700 self-center"
        onClick={onClickHandler}
      >
        <i class="fas fa-microphone text-2xl py-2 px-4 transform hover:scale-125 bg-custom-light-blue text-white rounded-full"></i>
      </button>
    </div>
  );
};

export default QuestionsSearchBar;
