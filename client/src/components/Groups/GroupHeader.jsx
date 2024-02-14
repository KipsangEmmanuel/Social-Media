import React from 'react'
import NavIcon from '../shared/NavIcon';
import SearchIcon from '../../assets/search-circle.png'
import Button from '../shared/Button'
import Plus from '../../assets/plus.png'
import SearchForm from '../navbar/SearchForm'
import './GroupHeader.scss'




const GroupHeader = () => {
  return (
 
      <div className='group-page-header'>
      <div className="group-page-title">
        <h2>Groups</h2>
      </div>
      <div className="group-page-icon">
        <div className="circled-search-icon">
          <NavIcon url={SearchIcon}/>
          </div>
          <div className="create-group-btn">
        <Button  btnicon={Plus} msg="Create New Group" />
        </div>
        <div className="larger-search-bar">
        <SearchForm className="search-form" />
        </div>
        
      </div>
    </div>

  )
}

export default GroupHeader;
