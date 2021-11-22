// Import Libraries
import React, { useState } from "react";

const StyledButton = (props) => {
  const onSubmitHandler = () => {
    console.log("works");
  };

  return (
    <div>
      <button
        class="p-2 pl-8 pr-8 text-blue-700 bg-white rounded-md text-lg hover:shadow-inner hover:bg-blue-300 hover:text-white"
        onClick={onSubmitHandler}
      >
        {props.text}
      </button>
    </div>
  );
};

export default StyledButton;
