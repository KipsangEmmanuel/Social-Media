import React from "react";
import Video1 from "../../assets/video1.png";
import Video2 from "../../assets/video2.png";
import Video3 from "../../assets/video3.png";
import "./GroupVideos.scss";
import { NavLink } from "react-router-dom";
import Button from "../shared/Button";
import MembersIcons from "../shared/MembersIcons";
import EventOne from "../../assets/event-one.png";
import EventTwo from "../../assets/event-two.png";
import EventThree from "../../assets/event-three.png";
import VideoHeader from "./VideoHeader";
import PostImageCard from "../Groups/PostImageCard";

const GroupVideos = () => {
  return (
    <div className="videos-container">
      <VideoHeader />
      <div className="videos-sub-titles">
        <div className="vid-sub-titles-left">
          <h4>Categories to explore</h4>
        </div>
        <div className="vid-sub-titles-right">
          <NavLink className="navlink">See All</NavLink>
        </div>
      </div>
      <div className="videos-card-container">
        <div className="vid-card-contents">
          <PostImageCard PostImage={Video1} />
          
          <div className="videos-page-icon">
          <h3>Music</h3>
            <div className="videos-bottom">
              <MembersIcons MbrIcon={EventThree} />
              <MembersIcons MbrIcon={EventOne} />
              <MembersIcons MbrIcon={EventTwo} />
              <div className="videos-para">
              <p>2K</p>
              </div>
            </div>
          </div>
          <Button msg="See All" />
        </div>
        <div className="vid-card-contents">
       
          <PostImageCard PostImage={Video2} />
          {/* <img src={Play} alt="" /> */}
         
          <div className="videos-page-icon">
          <h3>Music</h3>
            <div className="videos-bottom">
              <MembersIcons MbrIcon={EventThree} />
              <MembersIcons MbrIcon={EventOne} />
              <MembersIcons MbrIcon={EventTwo} />
              <div className="videos-para">
              <p>2K</p>
              </div>
            </div>
          </div>
          <Button msg="See All" />
        </div>
        <div className="vid-card-contents">
          <PostImageCard PostImage={Video3} />
          
          <div className="videos-page-icon">
          <h3>Kids</h3>
            <div className="videos-bottom">
              <MembersIcons MbrIcon={EventThree} />
              <MembersIcons MbrIcon={EventOne} />
              <MembersIcons MbrIcon={EventTwo} />
              <div className="videos-para">
              <p>2K</p>
              </div>
            </div>
          </div>
          <Button msg="See All" />
        </div>
        
      </div>
    </div>
  );
};

export default GroupVideos;
