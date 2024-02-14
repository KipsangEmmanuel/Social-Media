import React from 'react'
import Avatar from "../../assets/avatar.png"
import './Top.scss'

const Top = () => {
  return (
    <div className="Top">
      <div className="BackGround">
        <div className="blueimage">
          
         <div className="btn">
         <div>
         <button  className='profile-btn'>Edit Profile</button>
         </div>
         </div> 
          {/* <img className="bg-img" src={BackGround} alt="noimage" /> */}
          <img className="avatar"src={Avatar} alt="noimage" />
        </div>
      </div>
      <div className="bottom-top">
      <div className="head-pro">
       <h2> Angela Lee</h2> 
        <p>@angela</p>
      </div>
      <div className="navs">
        <div className="posts">
          <p className='dim-header'>POSTS</p>
          <br />
          <h3>683</h3>
        </div>
        <div className="posts">
          <p className='dim-header'>FRIENDS</p>
          <br />
          <h3>5.7K</h3>
        </div>
        <div className="posts">
          <p className='dim-header'>PHOTOS</p>
          <br />
          <h3>296</h3>
        </div>
        <div className="post">
          <p className='dim-header'>LIKES</p>
          <br />
          <h3>10.7K</h3>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Top;