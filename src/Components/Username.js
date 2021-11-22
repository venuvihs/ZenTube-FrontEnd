// Import Libraries
import React, { useState } from "react";

const Username = (props) => {
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
    <div class="w-full h-14 p-3 flex flex-row border-gray-400 border-2 bg-transparent rounded-md justify-items-start items-center hover:border-white mb-4">
      <i class="far fa-user text-white m-2 mr-4"></i>
      <input
        class="w-4/5 bg-transparent m-0 text-white rounded-xl focus:outline-none placeholder-grey-400 cursor"
        type="search"
        placeholder={props.placeholder}
        onChange={(val) => onChangeHandler(val)}
        autoFocus={false}
      />
    </div>
  );
};

export default Username;
