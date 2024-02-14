import GroupVideos from "../components/videos/GroupVideos";
import SingleVideo from "../components/videos/SingleVideo";
import "./Videos.scss";

const Videos = () => {
  return (
    <div className="video-right-content">
      <div className="video-middle-content">
        <div className="video-top">
          <GroupVideos />
        </div>
        <div className="video-bottom">
          <SingleVideo/>
        </div>
      </div>
    </div>
  );
};

export default Videos;
