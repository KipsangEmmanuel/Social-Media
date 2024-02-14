import React from 'react'
import websiteDesign from "../../assets/website-design.png";
import mobileDesign from "../../assets/mobile-design.png";
import productDesign from "../../assets/product-design.png";
import "./ShortCuts.scss"
function ShortCuts() {
    const shortCutItems = [
        {
            icon:websiteDesign,
            name: "Website Design"
        },
        {
            icon:mobileDesign,
            name: "Mobile Design"
        },
        {
            icon:productDesign,
            name: "product Design"
        }
    ]
    return (
      <div className="ShortCutItems">
        <div className="heading">
          <p>shortcuts</p>
          {/* {showSeeAll && <p>See All</p>} */}
        </div>
        {shortCutItems &&
          shortCutItems.map((item, index) => (
            <div className="shortcut-item" key={index}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    );
}

export default ShortCuts