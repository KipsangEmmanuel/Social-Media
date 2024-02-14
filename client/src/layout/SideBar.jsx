import './SideBar.scss';
import SideItems from '../components/sidebar/SideItems';
import ShortCuts from '../components/sidebar/ShortCuts';
import SideProfile from '../components/sidebar/SideProfile';

const SideBar=()=>{
   
    return (
        <div className='sidenav'>
        {/* <div className="sidenav-btn">
            <Button msg="New Message" sign={true} />
        </div> */}
         <div className="SideProfile">
        <SideProfile  />
         </div>
        <div className="sidenav-menu">
            <SideItems/>
        </div>
        <div className="sidebar-shortCuts">
        <ShortCuts />
      </div>
        </div>
    )
};

export default SideBar;