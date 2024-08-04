import React, { useState } from "react";
import "./ChatFooter.css";

const ChatFooter = ({ addMessage }) => {
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sender && message) {
      addMessage({
        sender,
        text: message,
        timestamp: new Date().toISOString(),
      });
      setMessage("");
      setSender("");
    }
  };

  return (
    <form className="chat-footer" onSubmit={handleSubmit}>
      <input
        type="text"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        placeholder="Your name"
        required
      />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        required
      />
      <button type="submit" disabled={!sender || !message}>
        Send
      </button>
    </form>
  );
};

export default ChatFooter;
