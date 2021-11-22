// Import Libraries
import React, { useState } from "react";

const Password = (props) => {
  const [password, setPassword] = useState("");
  const [view, setView] = useState(false);

  const onClickHandler = () => {
    setView(!view);
  };

  const onChangeHandler = (val) => {
    setPassword(val);
  };

  return (
    <div class="w-full h-14 p-3 flex flex-row  border-2 bg-transparent rounded-md justify-items-start items-center hover:border-white">
      <i class="fas fa-lock text-white m-2 mr-4"></i>
      <input
        class="w-4/5 bg-transparent m-0 text-white rounded-xl focus:outline-none placeholder-gray-400 cursor "
        type={view ? "text" : "password"}
        placeholder={props.placeholder}
        onChange={(val) => onChangeHandler(val)}
        autoFocus={false}
      />
      <button onClick={onClickHandler}>
        {view ? (
          <i class="far fa-eye-slash text-white"></i>
        ) : (
          <i class="far fa-eye text-white"></i>
        )}
      </button>
    </div>
  );
};

export default Password;
