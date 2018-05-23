import React from "react";
import "./buttons.css";

const Buttons = props => {
  return (
    <div
      id="do-nothing"
      className="button-container"
      onClick={evt => props.onButtonClick(evt)}
    >
      <div id="Multnomah" className="county-button mul-county">
        Multnomah County
      </div>
      <div id="Washington" className="county-button was-county">
        Washington County
      </div>
      <div id="Marion" className="county-button mar-county">
        Marion County
      </div>
      <div id="Yamhill" className="county-button yam-county">
        Yamhill County
      </div>
      <div id="Clackamas" className="county-button cla-county">
        Clackamas County
      </div>
    </div>
  );
};

export default Buttons;
