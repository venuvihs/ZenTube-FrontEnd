// Import Libraries
import React, { useState } from "react";
import Switch from "react-switch";
import logo from "../images/logo.png";

const CaptionDisplay = (props) => {
  const [checked, setChecked] = useState(false);

  const onClickHandler = () => {
    setChecked(!checked);
  };

  return (
    <div class="flex flex-col w-64 h-80 bg-transparent rounded-3xl">
      <div class="flex flex-row h-1/4 text-left p-3 items-center">
        <text class="text-custom-light-blue text-xs">
          Captions Exist? (EN/US)
        </text>
        <label class="ml-6 mt-2">
          <Switch
            onChange={onClickHandler}
            checked={checked}
            uncheckedIcon={false}
            offColor="#a4bcbc"
            onColor="#7c587f"
          />
        </label>
      </div>
      <div class="h-3/4 bg-green-400 rounded-3xl rounded-t-none border-2 border-custom-light-blue p-4">
        <div class="flex flex-row items-center">
          <div class="w-24">
            <text class="text-black text-xl">Submit for Processing</text>
          </div>
          <i class="fas fa-cogs text-7xl ml-4"></i>
        </div>
        <img class=" ml-36 mt-24" src={logo} />
      </div>
    </div>
  );
};

export default CaptionDisplay;
