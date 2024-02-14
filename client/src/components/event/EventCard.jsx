import React from "react";
import "./EventCard.scss";
import EventHeader from "./EventHeader";
import Event1 from "../../assets/event1.png";
import Event2 from "../../assets/event2.png";
import Heart2 from "../../assets/heart2.png";
import Event3 from "../../assets/event3.png";
import Event4 from "../../assets/event4.png";
import Button from "../shared/Button";
import MembersIcons from "../shared/MembersIcons";
import EventOne from "../../assets/event-one.png";
import EventTwo from "../../assets/event-two.png";
import EventThree from "../../assets/event-three.png";
import EventCalendar from "./EventCalendar";
import EventVenue from "./EventVenue";
import EventImageCard from "./EventImageCard";

const EventCard = () => {
  return (
    <div className="event-container">
      <div className="events-top">
        <EventHeader />
      </div>
      <div className="event-sub-titles">
        <div className="events-title-top">
          <h4 className="popular-events">Popular</h4>
          <h4>For You</h4>
          <h4>Nearest</h4>
          <h4>Favorite</h4>
          <h4>Registered</h4>
        </div>
        <EventCalendar Eventmsg="November" />
      </div>
      <div className="events-images">
        <div className="event-card-contents">
          <EventImageCard EventMsg="UI/UX Design" eventIcon={Heart2} EventImage={Event1} />
          <div className="events-page-icon">
            <div className="events-page-icon-head">
              <h3>National Seminar</h3>
              <p>By Emma Stone</p>
            </div>
            <div className="events-bottom">
              <EventCalendar Eventmsg="16 Nov,2022" />
            </div>
          </div>
       <div className="center-events-card">
       <div className="events-icons">
         <MembersIcons MbrIcon={EventThree} />
          <MembersIcons MbrIcon={EventOne} />
          <MembersIcons MbrIcon={EventTwo} />
          <div className="events-para">
            <p>2K</p>
          </div>         
         </div>
         <p>+2K are going</p>
       </div>
       <EventVenue/>
          <Button msg="Register" />
        </div>
        <div className="event-card-contents">
        <EventImageCard EventMsg="Potery" eventIcon={Heart2} EventImage={Event2} />
          <div className="events-page-icon">
            <div className="events-page-icon-head">
              <h3>National Seminar</h3>
              <p>By Emma Stone</p>
            </div>
            <div className="events-bottom">
              <EventCalendar Eventmsg="16 Nov,2022" />
            </div>
          </div>
       <div className="center-events-card">
       <div className="events-icons">
         <MembersIcons MbrIcon={EventThree} />
          <MembersIcons MbrIcon={EventOne} />
          <MembersIcons MbrIcon={EventTwo} />
          <div className="events-para">
            <p>2K</p>
          </div>         
         </div>
         <p>+2K are going</p>
       </div>
       <EventVenue/>
          <Button msg="Register" />
        </div>
        <div className="event-card-contents">
        <EventImageCard EventMsg="Concert" eventIcon={Heart2} EventImage={Event3} />
          <div className="events-page-icon">
            <div className="events-page-icon-head">
              <h3>National Seminar</h3>
              <p>By Emma Stone</p>
            </div>
            <div className="events-bottom">
              <EventCalendar Eventmsg="16 Nov,2022" />
            </div>
          </div>
       <div className="center-events-card">
       <div className="events-icons">
         <MembersIcons MbrIcon={EventThree} />
          <MembersIcons MbrIcon={EventOne} />
          <MembersIcons MbrIcon={EventTwo} />
          <div className="events-para">
            <p>2K</p>
          </div>
          
         </div>
         <p>+2K are going</p>
       </div>
       <EventVenue/>
          <Button msg="Register" />
        </div>
        <div className="event-card-contents">
        <EventImageCard EventMsg="Painting" eventIcon={Heart2} EventImage={Event4} />
          <div className="events-page-icon">
            <div className="events-page-icon-head">
              <h3>National Seminar</h3>
              <p>By Emma Stone</p>
            </div>
            <div className="events-bottom">
              <EventCalendar  Eventmsg="16 Nov,2022" />
            </div>
          </div>
       <div className="center-events-card">
       <div className="events-icons">
         <MembersIcons MbrIcon={EventThree} />
          <MembersIcons MbrIcon={EventOne} />
          <MembersIcons MbrIcon={EventTwo} />
          <div className="events-para">
            <p>2K</p>
          </div>
          
         </div>
         <p>+2K are going</p>
       </div>
       <EventVenue/>
          <Button msg="Register" />
        </div>
        
      </div>
    </div>
  );
};

export default EventCard;


