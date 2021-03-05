import React, { Component, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const FormatDropdown = () => {
  const [state, setState] = useState("");

  const setFormat = (format) => {
    setState(format);
  };

  return (
    <DropdownButton
      variant="success"
      id="dropdown-basic-button"
      title={"Format: " + state}
    >
      <Dropdown.Item onClick={() => setFormat("Test")}>Test</Dropdown.Item>
      {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
    </DropdownButton>
  );
};

export default FormatDropdown;
