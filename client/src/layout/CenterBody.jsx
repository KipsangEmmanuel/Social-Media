import React from 'react'
import './CenterBody.scss'
import CenterContent from '../components/profile/CenterContent'
import RightContent from '../components/profile/RightContent'



const CenterBody = () => {
  return (
    <div className='center-body'>
        <CenterContent />
        <RightContent />


    </div>
  )
}

export default CenterBody