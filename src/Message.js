import React from "react";
import { Paper } from "@material-ui/core";

const Message = ({ message, username }) => {
  return (
    <Paper className={username === message.username ? "user_msg" : "msg"}>
      <i>{message.username}:</i>
      <hr />
      <h4>{message.msg}</h4>
    </Paper>
  );
};
export default Message;
