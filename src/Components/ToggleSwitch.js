import React from "react";
import Switch from "react-switch";

const ToggleSwitch = () => {
  const constructor = () => {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  };

  const handleChange = (checked) => {
    this.setState({ checked });
  };

  return (
    <label>
      <span>Switch with default style</span>
      <Switch onChange={this.handleChange} checked={this.state.checked} />
    </label>
  );
};
