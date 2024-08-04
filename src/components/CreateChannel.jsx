import React, { useState } from "react";
import "./CreateChannel.css";

const CreateChannel = ({ createChannel }) => {
  const [channelName, setChannelName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createChannel(channelName);
    setChannelName("");
  };

  return (
    <form className="create-channel-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={channelName}
        onChange={(e) => setChannelName(e.target.value)}
        placeholder="Channel name"
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateChannel;
