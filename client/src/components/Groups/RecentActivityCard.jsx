import React from "react";
import "./RecentActivityCard.scss";
import NavIcon from "../shared/NavIcon";
import PostImageCard from "./PostImageCard";
import RecentImage from "../../assets/recent-image1.png";
import RecentImage2 from "../../assets/recent-image2.png";
import RecentUser from "../../assets/recent-user.png";

const RecentActivityCard = () => {
  return (
    <div className="recent-card-container">
      <div className="recent-user">
        <div className="recent-icon">
          <div className="icon-user-initial">
            <h3>DE</h3>
          </div>
         <div className="img-recent">
         <NavIcon url={RecentUser} />
         </div>
        </div>
        <div className="recent-user-desc">
          <h4>Design Enthusiast</h4>
          <p>
            Angela Lee • <span> 56 mins ago</span>
          </p>
        </div>
      </div>
      <div className="recent-content-desc">
        <p>
          Conduct design process best practices across projects such as
          gathering insights, validating problems & solutions, delivering
          multiple fidelity levels of design, and ensure the final design is
          implemented properly on.
        </p>
      </div>
      <div className="recent-images">
        <PostImageCard PostImage={RecentImage} />
        <PostImageCard PostImage={RecentImage2} />
      </div>
    </div>
  );
};

export default RecentActivityCard;
