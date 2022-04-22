import React from "react";
import { SignIn, SignOutN } from "./GoogleAuth";
import { auth } from "../config";
import CreateEventButton from "./CreateEventButton";

const GoogleButton = () => {
  return (
    <div style={{ display: "flex", marginLeft: "auto", marginRight: "10px" }}>
      <CreateEventButton name={"SignIn"} action={SignIn} flag={false} />
      <CreateEventButton name={"SignOut"} action={SignOutN} flag={false} />
    </div>
  );
};
export default GoogleButton;
