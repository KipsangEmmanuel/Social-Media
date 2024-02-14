import React, { useState } from "react";
import "./Notifications.scss";
import TodayNotifications from "./TodayNotifications";
import YesterdayNotifications from "./YesterdayNotifications";
import Close from '../../assets/close.png';
import Button from "../shared/Button";


function Notifications({ onClose }) {
  const [isModalVisible, setModalVisibility] = useState(true);

  const closeNotifications = () => {
    setModalVisibility(false);
    onClose(); 
  };

  return (
    isModalVisible && (
      <div className="notifications-container">
        <div className="notify-heading">
          <h2>Notifications</h2>
          <div className="close">
          <img src={Close} onClick={closeNotifications} alt="" />
          </div>
        </div>
        <div className="not-buttons">
          <Button msg="All Notifications" />
          <Button msg="Unread" />
        </div>
        <TodayNotifications />
        <YesterdayNotifications />
      </div>
    )
  );
}

export default Notifications;
