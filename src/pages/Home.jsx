import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Channel from "../components/Channel";
import data from "../data.json";
import "./Home.css";

const Home = () => {
  const [channels, setChannels] = useState([]);
  const [currentChannel, setCurrentChannel] = useState(null);

  useEffect(() => {
    setChannels(data.channels);
    setCurrentChannel(data.channels[0]);
  }, []);

  const addMessage = (message) => {
    setCurrentChannel({
      ...currentChannel,
      messages: [...currentChannel.messages, message],
    });
  };

  return (
    <div className="home">
      <Sidebar channels={channels} />
      {currentChannel && (
        <Channel
          name={currentChannel.name}
          messages={currentChannel.messages}
        />
      )}
    </div>
  );
};

export default Home;
