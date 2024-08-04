import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChannelPage from "./pages/ChannelPage";
import CreateChannelPage from "./pages/CreateChannelPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/channel/:id" element={<ChannelPage />} />
      <Route path="/create-channel" element={<CreateChannelPage />} />
    </Routes>
  );
};

export default App;
