// Import Libraries
import React, { useState } from "react";

const GoogleSignIn = (props) => {
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
    <div>
      <button
        class="p-2 pl-6 pr-6 text-blue-700 bg-white rounded-md text-lg hover:shadow-inner hover:bg-blue-300 hover:text-white flex flex-row
         text-center align-middle justify-center"
        onClick={onSubmitHandler}
      >
        <i class="fab fa-google mr-4 self-center pr-4 border-r-2 border-custom-black"></i>
        {props.text}
      </button>
    </div>
  );
};

export default GoogleSignIn;
