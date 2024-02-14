import React from 'react';
import './CenterContent.scss';
import Vector from '../../assets/Group.png'
import Link from '../../assets/link.png'
import Map from '../../assets/map.png'
import unsplash from '../../assets/photo-image1.png'
import unsplash2 from '../../assets/photo-image2.png'


const CenterContent = () => {
  return (
    <div className='left-center'>
        <div className="completePro">
            <h4>Completed Your Profile</h4>
            <div>
            <progress value="80" max="100"></progress>
            <span>80%</span>
            </div>
           
        </div>
        <div className="intro">
            <div className='experience'>
                <h4>Intro</h4>
                <p>I am an experienced joiner with well developed skills</p>
            </div>
            <div>
                <div className="icon-p">
                    <img src={Map} alt="" /> 
                    <p>29272 Westheimer Rd.</p>
                </div>
                <div className="icon-p">
                    <img src={Vector} alt="" />
                    <p>Binford Ltd.</p>
                </div>
                <div className="icon-p">
                    <img src={Vector} alt="" />
                    <p>September 24, 2017</p>
                </div>
                <div className="icon-p">
                    <img src={Link} alt="" />
                    <p>drible.com/Angela</p>
                </div>
            </div>
        </div>
        <div className="photos">
            <div className="see-all">
                <h3>Photos</h3>
                <p style={{ color: "#2563EB" }}>see all</p>
            </div>
            <div className="pics">
                <img src={unsplash} alt="" />
                <img src={unsplash2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default CenterContent;