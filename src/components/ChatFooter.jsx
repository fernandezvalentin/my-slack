import React, { useState } from "react";
import "./ChatFooter.css";

const ChatFooter = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(message);
    setMessage("");
  };

  return (
    <form className="chat-footer" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatFooter;
