// Import Libraries
import React, { useState } from "react";

const PreviousSearches = (props) => {
  const [view, setView] = useState(false);

  const onClickHandler = () => {
    setView(!view);
  };

  return (
    <div class=" bg-gradient-to-r from-custom-light-blue to-custom-blue w-3/4 h-14 p-3 flex flex-row rounded-3xl justify-items-start items-center text-white ">
      <text class="flex-1">React Native Props</text>
      <text class="flex-1">Evan Lai</text>
      <text class="flex-1 text-right mr-2">13 min ago</text>
      <button onClick={onClickHandler}>
        {view ? (
          <i class="fas fa-star text-white"></i>
        ) : (
          <i class="far fa-star text-white"></i>
        )}
      </button>
    </div>
  );
};

export default PreviousSearches;
