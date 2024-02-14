import React from "react";
import "./TimeCard.scss";
import wade from "../../assets/wade.png";
import Add from "../../assets/add.png";
import jane from "../../assets/jane.png";
import esther from "../../assets/esther.png";
import brooklyn from "../../assets/brooklyn.png";
import Angela from "../../assets/angela.png";
import Leslie from "../../assets/leslie.png";
import Jenny from "../../assets/jenny.png";
import Robert from "../../assets/robert.png";
import Cody from "../../assets/cody.png";
import Kristina from "../../assets/kristina.png";
import NavIcon from "../shared/NavIcon";

import RightContent from "../profile/RightContent";
import TimelineBottom from "./TimelineBottom";

const TimelineCard = () => {
  const friends = [
    {
      image: wade,
      username: "wadee",
    },
    {
      image: jane,
      username: "jane",
    },
    {
      image: esther,
      username: "esther",
    },
    {
      image: brooklyn,
      username: "Brooklyn",
    },
    {
      image: Leslie,
      username: "Leslie",
    },
    {
      image: Jenny,
      username: "Jenny",
    },
    {
      image: Robert,
      username: "Robert",
    },
    {
      image: Cody,
      username: "Cody",
    },
  ];
  return (
    <div className="timeContainer">
      <div className="timeline-menu">
        <div className="timeline-heading">
          <h2>Your Timeline</h2>
        </div>

        <div className="timelines">
          <div className="first-icons">
            <div className="user-items">
              <div className="you-user">
                <img src={Angela}  alt={name} />
              </div>
              <div className="plus-icon">
                <NavIcon url={Add} />
              </div>
            </div>
            <p>You</p>
          </div>
          {friends &&
            friends.map((item, index) => (
              <div className="timeline" key={index}>
                <div className="timeline-card-top">
                  <img src={item.image} alt={item.name} />
                  <p>{item.username}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <TimelineBottom />
    </div>
  );
};
export default TimelineCard;
