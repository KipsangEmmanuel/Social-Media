import JoinGroupCard from "../components/Groups/JoinGroupCard";
import RecentActivityCard from "../components/Groups/RecentActivityCard";
import "./GroupsPage.scss";

const GroupsPage = () => {
  return (
    <div className="group-right-content">
      <div className="group-middle-content">
        <div className="top">
          <JoinGroupCard />
        </div>
        <h2>Recent Activity</h2>
        <div className="bottom">
         <RecentActivityCard/>
        </div>
      </div>
    </div>
  );
};

export default GroupsPage;
