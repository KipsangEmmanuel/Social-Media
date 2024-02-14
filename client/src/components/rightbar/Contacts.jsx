import React from 'react'
import './Contacts.scss'
import wade from "../../assets/Avatar.png"
import jane from "../../assets/Avatar1.png"
import esther from "../../assets/Avatar2.png"
import cameron from "../../assets/Avatar3.png"
import brooklyn from "../../assets/Avatar4.png"

function Contacts() {
    const contacts = [
        {
            icon:wade,
            name:'Wade Warren'
        },
        {
            icon:jane,
            name:'Jane Cooper'
        },
        {
            icon:esther,
            name:'Esther Howard'
        },
        {
            icon:cameron,
            name:'Camerron Williamson'
        },
        {
            icon:brooklyn,
            name:'Brooklyn Simmons'
        }
    ]
  return (
    <div className="ContactItems">
      <div className="heading">
        <p style={{ textTransform: "uppercase" }}>Contacts</p>
        <p style={{ color: "#2563EB" }}>See all</p>
      </div>
     <div className="contacts-menu">
     {contacts &&
        contacts.map((item, index) => (
          <div className='contactcontainer'>
            <div className="contact-item" key={index}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </div>  
        ))}
     </div>
    </div>
  );
}
export default Contacts