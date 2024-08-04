import React from "react";
import "./Channel.css";

const Channel = ({ name, messages }) => {
  return (
    <div className="channel">
      <h2>{name}</h2>
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
    </div>
  );
};

export default Channel;
