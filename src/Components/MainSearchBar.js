// Import Libraries
import React, { useState } from "react";

const MainSearchBar = (props) => {
  const [data, setData] = useState({
    question: "",
  });

  const onChangeHandler = (val) => {
    setData({
      ...data,
      data: val,
    });
  };

  const onSubmitHandler = () => {
    console.log("works");
  };

  return (
    <div class={`w-5/12 h-14 p-3 flex flex-row border-white border-2 bg-gradient-to-r from-custom-black  to-pink-200 bg-opacity-60 rounded-3xl justify-items-start items-center ${props.className}`}>
      <i class="fas fa-search text-white m-2"></i>
      <input
        class="w-4/5 bg-transparent m-0 text-white rounded-xl focus:outline-none placeholder-custom-light-blue"

        type="search"
        placeholder={props.placeholder}
        onChange={(val) => onChangeHandler(val)}
        autoFocus={false}
      />
      <div class="p-1 bg-custom-black rounded-3xl justify-center content-center">
        <button
          class=" p-2 text-black bg-custom-blue rounded-3xl text-sm hover:text-white hover:bg-custom-light-blue  
          active:bg-blue-700 border-double border-2 border-light-blue-500 self-center"
          onClick={onSubmitHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MainSearchBar;
