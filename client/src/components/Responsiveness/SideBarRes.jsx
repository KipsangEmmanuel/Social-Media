import React, { useState } from 'react'
import SideProfile from '../sidebar/SideProfile'
import SideItems from '../sidebar/SideItems'
import ShortCuts from '../sidebar/ShortCuts'
import './SideBarRes.scss'

const SideBarRes = () => {

  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  const handleCloseSidebar = () => {
    setSidebarVisibility(true);
  };

  return (
    <div className="res-sidenav">
      
      <div className="res-SideProfile">
        <SideProfile/>
      </div>
      <div className="res-sidenav-menu">
        <SideItems  onClose={handleCloseSidebar}/>
      </div>
      <div className="res-sidebar-shortCuts">
        <ShortCuts/>
      </div>
    </div>
  );
};

export default SideBarRes
