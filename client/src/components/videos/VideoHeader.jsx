import React from 'react'
import NavIcon from '../shared/NavIcon';
import SearchIcon from '../../assets/search-circle.png'

import './VideoHeader.scss'
import SearchForm from '../navbar/SearchForm';


const VideoHeader = () => {
  return (
    <div className='group-page-header'>
    <div className="group-page-title">
    <h2>Video</h2>
    </div>
    <div className="group-page-icon">
      <div className="circled-search-icon">
        <NavIcon url={SearchIcon}/>
        </div>
        <div className="create-group-btn">
      </div>
      <div className="larger-search-bar">
      <SearchForm className="search-form" />
      </div>
      
    </div>
  </div>
 
  )
}

export default VideoHeader;
