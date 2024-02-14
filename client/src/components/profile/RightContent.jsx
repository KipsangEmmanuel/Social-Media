import React from "react";
import "./RightContent.scss";
import Avatar from "../../assets/angela.png";
import video from "../../assets/video.png";
import star from "../../assets/star.png";
import PostImage from "../../assets/post-image1.png";
import PostImage2 from "../../assets/post-image2.png";
import Like from "../../assets/heart.png";
import Smile from "../../assets/mood-smile.png";
import Link from "../../assets/link.png";
import Image from "../../assets/image.png";
import Message from "../../assets/message-circle.png";
import Share2 from "../../assets/share.png";
import Input from "../shared/Input";

const RightContent = () => {
  return (
    <div className="right-center">
      <div className="top-items">
        <div className="top">
          <div className="prof">
            <img src={Avatar} alt="" />
          </div>
          <Input inputMsg="Whats on your mind?" />
        </div>
        <div className="bottom">
          <div className="img">
            <img src={video} alt="" />
            <p>Live Video</p>
          </div>

          <div className="img">
            <img src={Image} alt="" />
            <p>Image/Video</p>
          </div>

          <div className="img">
            <img src={star} alt="" />
            <p>Activity</p>
          </div>
        </div>
      </div>

      <div className="ground">
        <div className="pro">
          <img src={Avatar} alt="" />
          <div className="bottom-info">
            <h4>Angela Lee</h4>
            <p>56 mins ago</p>
          </div>
        </div>
        <div className="text">
          <p>
            Here are some photography works that i made on the weekend with some
            of my friends, happy for that!
          </p>
        </div>
        <div className="images">
          <img src={PostImage} alt="" />
          <img src={PostImage2} alt="" />
        </div>
        <div className="like-comment">
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
        <div className="text-message">
          <Input inputMsg="Write your message..." />
          <div className="img">
            <img src={Smile} alt="" />
            <img src={Link} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
