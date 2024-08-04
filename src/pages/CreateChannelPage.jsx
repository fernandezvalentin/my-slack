import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import CreateChannel from "../components/CreateChannel";
import data from "../data.json";
import "./CreateChannelPage.css";

const CreateChannelPage = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    setChannels(data.channels);
  }, []);

  const createChannel = (name) => {
    const newChannel = { id: channels.length + 1, name, messages: [] };
    setChannels([...channels, newChannel]);
  };

  return (
    <div className="create-channel-page">
      <Sidebar channels={channels} />
      <CreateChannel createChannel={createChannel} />
    </div>
  );
};

export default CreateChannelPage;
