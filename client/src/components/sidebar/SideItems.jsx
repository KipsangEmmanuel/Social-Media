import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import timeline from "../../assets/layout-grid.png";
import friends from "../../assets/users.png";
import groups from "../../assets/star.png";
import video from "../../assets/video.png";
import photos from "../../assets/image.png";
import Events from "../../assets/calendar.png";
import "./SideItems.scss";

function SideItems({ onClose }) {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Timeline",
      icon: timeline,
      path: "/timeline",
    },
    {
      name: "Friends",
      icon: friends,
      path: "/friends",
    },
    {
      name: "Groups",
      icon: groups,
      path: "/groups",
    },
    {
      name: "Videos",
      icon: video,
      path: "/videos",
    },
    {
      name: "Photos",
      icon: photos,
      path: "/photos",
    },
    {
      name: "Events",
      icon: Events,
      path: "/events",
    },
  ];
  const handleItemClick = (path) => {
    onClose(); 
    navigate(path);
  };
  return (
    <div className="sidemenu">
      <div className='heading'>
        <p>Menu</p>
      </div>
      <div className="menu-down">
        {menuItems &&
          menuItems.map((item) => (
            <div key={item.path} className="menu-item" onClick={() => handleItemClick(item.path)}>
            <NavLink style={{textDecorationLine:"none"}}
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}

            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SideItems;
