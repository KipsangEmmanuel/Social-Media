import React from 'react'
import ShortCuts from '../sidebar/ShortCuts';
import Contacts from '../rightbar/Contacts';
import Groups from '../rightbar/Groups';
import './RightBarRes.scss'

const RightBarRes = () => {
  return (
    <div className="res-right-content">
     
    <div className="res-leftSide">
      <div className="res-sidebar-shortCuts">
        <ShortCuts/>
      </div>
      <div className="res-SideProfile">
        <Contacts />
      </div>
      <div className="res-sidenav-menu">
        <Groups />
      </div>
    </div>
  </div>
  )
}

export default RightBarRes;
