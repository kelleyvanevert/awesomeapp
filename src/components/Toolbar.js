import React from "react";

import Button from "./Button";

import "./Toolbar.css";

function Toolbar() {
  return (
    <div className="Toolbar">
      <div className="logo">Awesome &amp; Co</div>
      <div className="spacer" />
      <Button text="Log in" />
      <Button text="Register" />
    </div>
  );
}

export default Toolbar;
