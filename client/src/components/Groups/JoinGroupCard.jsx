import React from "react";
import MaskGroup1 from "../../assets/mask-group.png";
import MaskGroup2 from "../../assets/mask-group2.png";
import "./JoinGroupCard.scss";
import GroupHeader from "./GroupHeader";
import PostsCard from "./PostsCard";
import { NavLink } from "react-router-dom";
import PostImageCard from "./PostImageCard";
import Button from "../shared/Button";
import MembersIcons from "../shared/MembersIcons";
import EventOne from "../../assets/event-one.png";
import EventTwo from "../../assets/event-two.png";
import EventThree from "../../assets/event-three.png";

const JoinGroupCard = () => {
  return (
    <div className="group-container">
      <GroupHeader />
      <div className="group-sub-titles">
        <div className="sub-titles-left">
          <h4>Suggested for you</h4>
          <p>Groups you might be interested in.</p>
        </div>
        <div className="sub-titles-right">
          <NavLink className="navlink">See All</NavLink>
        </div>
      </div>
      <div className="group-card-container">
        <div className="card-contents">
          <PostsCard />
          <PostImageCard PostImage={MaskGroup1} />
          <div className="group-page-icon">
          <div className="group-btn-card">
            <Button msg="Join Group" />
            </div>
            <div className="group-bottom">
              <MembersIcons MbrIcon={EventThree} />
              <MembersIcons MbrIcon={EventOne} />
              <MembersIcons MbrIcon={EventTwo} />
              <div className="group-para">
              <p>2K</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-contents">
          <PostsCard />
          <PostImageCard PostImage={MaskGroup2} />
          <div className="group-page-icon">
            <div className="group-btn-card">
            <Button msg="Join Group" />
            </div>
            <div className="group-bottom">
              <MembersIcons  MbrIcon={EventThree} />
              <MembersIcons className="mbrs-icon" MbrIcon={EventOne} />
              <MembersIcons MbrIcon={EventTwo} />
              <div className="group-para">
              <p>2K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinGroupCard;
