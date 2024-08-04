import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import data from "../../public/data.json";
import "./ChannelPage.css";

const ChannelPage = () => {
  const { id } = useParams();
  const [channels, setChannels] = useState([]);
  const [currentChannel, setCurrentChannel] = useState(null);

  useEffect(() => {
    setChannels(data.channels);
    const channel = data.channels.find((c) => c.id === parseInt(id));
    setCurrentChannel(channel);
  }, [id]);

  const addMessage = (message) => {
    setCurrentChannel({
      ...currentChannel,
      messages: [...currentChannel.messages, message],
    });
  };

  return (
    <div className="channel-page">
      <Sidebar channels={channels} />
      {currentChannel && (
        <Chat messages={currentChannel.messages} addMessage={addMessage} />
      )}
    </div>
  );
};

export default ChannelPage;
