import "./Navbar.scss";
import LogoIcon from "../assets/logo.png";
import Responsive from "../assets/responsive.png";
import NavIcon from "../components/shared/NavIcon";
import ActiveNotification from "../assets/active-notification.png";
import Profile from "../assets/profile-image.png";
import Chevron from "../assets/chevron-down.png";
import Message from "../assets/message-circle.png";
import SearchForm from "../components/navbar/SearchForm";
import Notifications from "../components/notifications/Notifications";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/navbar/Dropdown";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import RightBarRes from "../components/Responsiveness/RightBarRes";
import SideBarRes from "../components/Responsiveness/SideBarRes";

const Navbar = () => {
  const [isNotificationVisible, setNotificationVisibility] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const [isLogoutVisible, setLogoutVisibility] = useState(false);
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const [isRightbarVisible, setRightbarVisibility] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  const handleToggleRightbar = () => {
    setRightbarVisibility(!isRightbarVisible);
  };

  const toggleLogout = () => {
    setLogoutVisibility(!isLogoutVisible);
    console.log("Toggle Logout: ", isLogoutVisible);
  };

  const handleProfile = () => {
    setShowProfile(true);
    navigate("/profile");
    console.log("navigation");
  };

  const toggleNotification = () => {
    // console.log("Everything is good");
    setNotificationVisibility(!isNotificationVisible);
  };

  return (
    <>
      <div className="nav-top">
        <div className="navbar">
          <div className="nav-logo">
            <img src={LogoIcon} alt={LogoIcon} />
            <div className="resp-menu" onClick={handleToggleSidebar}>
              <img src={Responsive} alt={Responsive} />
              <span>Menu</span>
            </div>
          </div>
          <div className="right-nav">
            <div className="nav-input">
              <SearchForm />
            </div>
            <div className="nav-far-right">
              <div className="resp-right-menu" onClick={handleToggleRightbar}>
                <img src={Responsive} alt={Responsive} />
              </div>
              <div className="nav-icons">
                <NavIcon url={Message} />
                <NavIcon
                  url={ActiveNotification}
                  onClick={toggleNotification}
                />
                <img
                  className="profile"
                  onClick={handleProfile}
                  width={50}
                  src={Profile}
                  alt="profile"
                />
                <NavIcon onClick={toggleLogout} url={Chevron} />
              </div>
            </div>
          </div>
        
        </div>
      </div>
      {isLogoutVisible && (
            <div className="logout">
              <Dropdown />
            </div>
          )}
      <div className={isSidebarVisible ? "res-sidebar visible" : "res-sidebar"}>
        <div className="overlay"></div>
        <div className="sidebar-content">
          <SideBarRes />
        </div>
      </div>

      <div
        className={isRightbarVisible ? "res-rightbar visible" : "res-rightbar"}
      >
        <div className="overlay"></div>
        <RightBarRes />
      </div>
     

        {isNotificationVisible && (
           <div className="not-container">
           <div className="overlay-not" onClick={toggleNotification}></div>
          <div className="notifications-main">
            <Notifications  onClose={toggleNotification}  />
          </div>
           </div>
        )}
     
    </>
  );
};

export default Navbar;
