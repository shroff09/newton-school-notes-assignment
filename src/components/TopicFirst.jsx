import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const TopicFirst = () => {
  const [show, setshow] = useState(false);
  const clickHandler = () => {
    setshow(!show);
  };
  return (
    <div>
      <div className="button" onClick={clickHandler}>array</div>
      {show ? (
        <div className="button">
          <Link to="/array">
            <div className="button">Ipsum</div>
          </Link>
          <Link to="/map">
            <div className="button">Consectetur</div>
          </Link>
          <Link to="/sample1"> <div className="button">Lorem</div> </Link>
          <Link to="/sample2"> < div className="button">selium</div> </Link>
          <Link to="/sample3"> < div className="button">Lorem</div> </Link>
        </div>
      ) : null}
    </div>
  );
};

export default TopicFirst;
