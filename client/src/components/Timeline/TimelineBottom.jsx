import React from "react";
import "./TimelineBottom.scss";
import Avatar from "../../assets/angela.png";
import video from "../../assets/video.png";
import star from "../../assets/star.png";
import PostImage from "../../assets/post-image1.png";
import PostImage2 from "../../assets/post-image2.png";
import PostImage3 from "../../assets/post-image3.png";
import Like from "../../assets/heart.png";
import Smile from "../../assets/mood-smile.png";
import Link from "../../assets/link.png";
import Image from "../../assets/image.png";
import Globe from "../../assets/globe.png";
import Dots from "../../assets/dots.png";
import Chevron from "../../assets/chevron-down.png";
import Message from "../../assets/message-circle.png";
import Share2 from "../../assets/share.png";
import Input from "../shared/Input";
import NavIcon from "../shared/NavIcon";

function TimelineBottom() {
  return (
    <div className="time-bottom">
      <div className="timeline-top-items">
        <div className="timeline-top">
          <div className="timeline-prof">
            <div className="timeline-username">
              <div>
                <NavIcon url={Avatar} />
              </div>
              <div className="user-names-content">
                <h4>Angela Lee</h4>
                <span>@anglee</span>
              </div>
            </div>
            <div className="timeline-avatar-icons">
              <div>
                <NavIcon url={Globe} />
              </div>
              <div>
                <p>Public</p>
              </div>
              <div>
                <NavIcon url={Chevron} />
              </div>
            </div>
          </div>
          <div className="top-message">
            <Input inputMsg="What is on your mind" />
            <div className="time-img">
              <img src={Smile} alt="" />
              <img src={Link} alt="" />
            </div>
          </div>
        </div>
        <div className="timeline-bottom">
          <div className="time-bottom-images">
            <div className="time-img">
              <img src={video} alt="" />
              <p>Live Video</p>
            </div>

            <div className="time-img">
              <img src={Image} alt="" />
              <p>Image/Video</p>
            </div>

            <div className="time-img">
              <img src={star} alt="" />
              <p>Activity</p>
            </div>
          </div>
          <div className="time-bottom-right">
            <NavIcon url={Dots} />
          </div>
        </div>
      </div>

      <div className="timeline-ground">
        <div className="time-ground-top">
        <div className="timeline-pro">
          <img src={Avatar} alt="" />
          <div className="timeline-bottom-info">
            <h4>Angela Lee</h4>
            <p>56 mins ago</p>
          </div>
         
        </div>
        <div className="time-bottom-right">
            <div>
            <NavIcon url={Dots} />
            </div>
          </div>
        </div>
        <div className="timeline-text">
          <p>
            Here are some photography works that i made on the weekend with some
            of my friends, happy for that!
          </p>
        </div>
        <div className="timeline-images">
           <div >
           <NavIcon url={PostImage} />
           </div>
            <div>
            <NavIcon url={PostImage2} />
            </div>
            <div>
            <NavIcon url={PostImage3} />
            </div>
        </div>
        <div className="timeline-like-comment">
          <div className="likes">
            <div>
              <img src={Like} alt="" />
            </div>
            <div>
              <p>
                2.6k <span>Likes</span>
              </p>
            </div>
          </div>
          <div className="comments">
            <div>
              <img src={Message} alt="" />
            </div>

          <div>
          <p>
              297 <span>comments</span>
            </p>
          </div>
          </div>
          <div className="shares">
            <div>
              <img src={Share2} alt="" />
            </div>
            <div>
              <p>
                201 <span>Share</span>
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-text-message">
          <Input inputMsg="Write your message..." />
          <div className="timeline-img">
            <img src={Smile} alt="" />
            <img src={Link} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineBottom;
