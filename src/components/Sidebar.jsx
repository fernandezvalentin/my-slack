import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ channels }) => {
  return (
    <div className="sidebar">
      <h2>Channels</h2>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id}>
            <Link to={`/channel/${channel.id}`}>{channel.name}</Link>
          </li>
        ))}
      </ul>
      <Link className="create-channel" to="/create-channel">
        + Create Channel
      </Link>
    </div>
  );
};

export default Sidebar;
