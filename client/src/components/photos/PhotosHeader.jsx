import React from 'react'
import NavIcon from '../shared/NavIcon';
import Dots from '../../assets/dots.png'

import './PhotosHeader.scss'




const PhotosHeader = () => {
  return (
 
      <div className='photos-page-header'>
      <div className="photos-page-title">
        <h2>Your Photo</h2>
      </div>
      <div className="photos-page-icon">
        <NavIcon url={Dots}/>
      </div>
    </div>

  )
}

export default PhotosHeader;
