import { useEffect, useState, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import { db } from "./firebase";
import "./App.css";
import Message from "./Message";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import FlipMove from "react-flip-move";
import { IconButton } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  //useState is kind of a variable / short time memory
  //useEffect: runs a snippet of code on a condition

  //fetching data
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  ////////////////////
  useEffect(() => {
    setUsername(prompt("Please enter username"));
  }, []);
  const sendMessage = (event) => {
    event.preventDefault();
    window.scrollTo(999999999999999, 0); //when user hits enter this fnx scrolls up to top
    //pushing data to firebase db
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([
    //   ...messages, //comment: '...messages' 3 dots means keep the current messages and add the new messages after the previous messages
    //   { username: username, message: input },
    // ]); //comment: notice how we using bracket then array bracket then curly bracket because we are passing an object/
    setInput("");
  };
  return (
    <div className="App">
      <div className="app__head">
        <img
          className="app__headLogo"
          src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
          alt=""
        />

        <h1 className="app__headText">Messenger </h1>
        <h4 className="app__headUser"> Welcome, {username || "User"}😏🚀 </h4>
      </div>

      {/* if username 🆙 👆 isnt available then || output vishal 👆*/}
      {/* //////////////////////////// */}
      {/* Input Field: To type message */}
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            autoFocus={true}
            className="app__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            type="text"
          />
          {/* Button: to send message */}

          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>

          {/* Button: to send message */}
        </FormControl>
      </form>
      {/* Messages: to display the message */}
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
      {/* Messages: to display the message */}
    </div>
    // HEADER
  );
}

export default App;
