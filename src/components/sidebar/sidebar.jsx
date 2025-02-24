import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets"; //   ../../ moves up two levels (from sidebar/ to components/ → then components/ to src/). Then it goes into assets/ and finds assets.js.

const Sidebar = () => {
  const [extended, setExtended] = useState(false); //making a state variable

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=> setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>

            <div className="recent-entry">
              <img src={assets.message_icon} />
              <p>what is react ...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
