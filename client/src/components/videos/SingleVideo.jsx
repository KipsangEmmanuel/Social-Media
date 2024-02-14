import React from "react";
import "./SingleVideo.scss";
import NavIcon from "../shared/NavIcon";
import SingleVideoImage from "../../assets/single-video.png";
import SingleUser from "../../assets/single-user.png";
import PostImageCard from "../Groups/PostImageCard";

const SingleVideo = () => {
  return (
    <div className="recent-card-container">
      <div className="recent-user">
        <div className="recent-icon">
        <NavIcon url={SingleUser} />
        </div>
        <div className="recent-user-desc">
          <h4>Angela Lee</h4>
          <p> 56 mins ago
          </p>
        </div>
      </div>
      <div className="recent-content-desc">
        <p>The HAPPINESS you get when you serve your food to family members and their smile and your satisfaction is beyond. Do some experiment, feel the energy, share the happiness, fulfill your urge and finally relieve your stress.
        </p>
      </div>
      <div className="recent-images">
        <PostImageCard PostImage={SingleVideoImage} />
      </div>
    </div>
  );
};

export default SingleVideo;
