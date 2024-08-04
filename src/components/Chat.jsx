import React, { useState } from "react";
import ChatFooter from "./ChatFooter";
import "./Chat.css";

const Chat = ({ messages, addMessage }) => {
  return (
    <div className="chat">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <ChatFooter addMessage={addMessage} />
    </div>
  );
};

export default Chat;
