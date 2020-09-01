import React from "react";
import "./style.css";
import TopicFirst from "./TopicFirst";

const TreeView = () => {
  return (
    <div className="list">
      <div>
        <h2>Course Notes</h2>
      </div>
      <TopicFirst />
    </div>
  );
};

export default TreeView;
