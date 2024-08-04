import React from "react";
import "./Channel.css";

const Channel = ({ name, messages }) => {
  return (
    <div className="channel">
      <h2>{name}</h2>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;
