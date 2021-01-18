import React from "react";
import { Security, ExitToApp } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { signInWithGoogle } from "./firebase";

const SignIn = () => {
  return (
    <div className="signin">
      <Security className="signin_icon" />
      <h1>
        <i>SAFE - chat</i>
      </h1>
      <Button
        className="signin_btn"
        variant="contained"
        color="primary"
        onClick={signInWithGoogle}
      >
        Sign in With Google &nbsp;
        <ExitToApp />
      </Button>
    </div>
  );
};
export default SignIn;
