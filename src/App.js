import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import firebase from "firebase";
import "./styles.css";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import Message from "./Message";
import { db } from "./firebase";
import SignIn from "./SignIn";
import NavApp from "./AppBar";

export default function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      msg: input,
      username: username,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setUsername(user.displayName);
    setInput("");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setUsername(user.displayName);
    });
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setMessage(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const messages = message.map((msg, i) => (
    <Message key={i} message={msg} username={username} />
  ));

  return (
    <div className="app">
      {user === null ? (
        <SignIn />
      ) : (
        <>
          <NavApp username={username} />
          {messages}
          <form onSubmit={handleClick}>
            <FormControl className="input">
              <InputLabel>Type a message</InputLabel>
              <Input
                className="input_bar"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                disabled={!input.length}
                onClick={handleClick}
              >
                <Send />
              </Button>
            </FormControl>
          </form>
        </>
      )}
    </div>
  );
}
