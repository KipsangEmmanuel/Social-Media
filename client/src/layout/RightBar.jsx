import "./RightBar.scss"
import ShortCuts from "../components/sidebar/ShortCuts";
import Groups from "../components/rightbar/Groups";
import Contacts from "../components/rightbar/Contacts";


const RightBar=()=>{
  return (
    <div className="RightContent">
     
      <div className="leftSide">
        <div className="sidebar-shortCuts">
          <ShortCuts />
        </div>
        <div className="SideProfile">
          <Contacts />
        </div>
        <div className="sidenav-menu">
          <Groups />
        </div>
      </div>
    </div>
  );
}
export default RightBar;