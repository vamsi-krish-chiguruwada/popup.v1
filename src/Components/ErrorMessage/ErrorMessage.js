import React from "react";
import "./ErrorMessage.css";
// import { Icon1 } from "../../icons/icon1.svg";
const ErrorMessage = (props) => {
  return (
    <div className="error-message-box">
      <div className=" box box-top">
        <div className="icon-holder">
          <span className="material-icons">control_camera</span>
        </div>
        <div className="id-holder">
          <p className="error-content error-header">{props.name}</p>
          <p className="error-content error-id">{props.errId}</p>
        </div>
        <div className="Open-holder">
          <p onClick={()=>alert(props.message)}>Open</p>
        </div>
      </div>
      <div className="box box-bottom">
        <p>{props.message} </p>
      </div>
    </div>
  );
};
export default ErrorMessage;
