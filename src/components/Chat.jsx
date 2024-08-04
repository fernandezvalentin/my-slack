import React from "react";
import ChatFooter from "./ChatFooter";
import "./Chat.css";

const Chat = ({ messages, addMessage }) => {
  return (
    <div className="chat">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="message-sender">{message.sender}</div>
            <div className="message-text">{message.text}</div>
            <div className="message-timestamp">
              {new Date(message.timestamp).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      <ChatFooter addMessage={addMessage} />
    </div>
  );
};

export default Chat;
