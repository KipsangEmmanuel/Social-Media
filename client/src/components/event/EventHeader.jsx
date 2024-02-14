import React from 'react'
import NavIcon from '../shared/NavIcon';
import Dots from '../../assets/dots.png'
import './EventHeader.scss'
const EventHeader = () => {
  return (
    <div className='events-page-header'>
      <div className="events-page-title">
        <h2>Find Event</h2>
      </div>
      <div className="events-page-icon">
        <NavIcon url={Dots}/>
      </div>
    </div>
  )
}

export default EventHeader;

