import React from "react";
import "./TodayNotifications.scss";
import wade from "../../assets/wade.png";
import jane from "../../assets/jane.png";
import esther from "../../assets/esther.png";
import brooklyn from "../../assets/brooklyn.png";
import Angela from "../../assets/angela.png";


function TodayNotifications() {
  const friends = [
    {
      image: Angela,
      name: "You",
      message:"started Following you",
      time:"08:15"
    },
    {
      image: wade,
      name: "wadee",
      message:"Joined UI officia Group",
      time:"08:15"
    },
    {
      image: jane,
      name: "jane",
      message:"Joined UI officia Group",
      time:"08:15"
    },
    {
      image: esther,
      name: "esther",
      message:"Joined UI officia Group",
      time:"08:15"
    },
    {
      image: brooklyn,
      name: "Brooklyn",
      message:"Joined UI officia Group",
      time:"08:15"
    }
   
  ];
  return (
    <div className="notifications">
      <div className="notification-top">
        <h4>TODAY</h4>
      </div>
      <div className="notification-menu">
        {friends &&
          friends.map((item, index) => (
            <div className="notification" key={index}>
              <div className="not-card-top">
                <img src={item.image} alt={item.name} />
                <div className="not-content">
                <h3>{item.name}</h3>
                <p>{item.message}</p>
                </div>
                
              </div>
              <p>{item.time}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodayNotifications;
