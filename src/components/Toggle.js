import React, { useState } from "react";

function Toggle() {
  const [switchButton, setSwitch] = useState(false)

  function flipSwitch() {
    setSwitch(switchButton => !switchButton)
    console.log(switchButton)
  }

  const color = switchButton ? "white" : "red"

  return <button style={{ background: color }} onClick={flipSwitch}>{switchButton ? "ON" : "OFF"}</button>;
}

export default Toggle;
