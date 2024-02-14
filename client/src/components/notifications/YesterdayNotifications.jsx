import React from "react";
import "./YesterdayNotifications.scss";
import wade from "../../assets/wade.png";
import Angela from "../../assets/angela.png";


function YesterdayNotifications() {
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
    }
   
  ];
  return (
    <div className="yes-notifications">
      <div className="yes-notification-top">
        <h4>YESTERDAY</h4>
      </div>
      <div className="yes-notification-menu">
        {friends &&
          friends.map((item, index) => (
            <div className="yes-notification" key={index}>
              <div className="yes-not-card-top">
                <img src={item.image} alt={item.name} />
                <div className="yes-not-content">
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

export default YesterdayNotifications;
