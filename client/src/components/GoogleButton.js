import React from "react";
import { SignIn, SignOutN } from "./GoogleAuth";
import { auth } from "../config";
const GoogleButton = () => {
  return (
    <div>
      <button onClick={SignIn}> SignIn</button>
      <button onClick={SignOutN}>SignOut</button>
    </div>
  );
};
export default GoogleButton;
