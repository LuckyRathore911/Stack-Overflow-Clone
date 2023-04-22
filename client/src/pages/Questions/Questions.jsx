import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
const Questions = () => {
  return (
    <div className='homeContainer1'>
        <LeftSidebar/>
        <div className='homeContainer2'>
            <HomeMainbar/>
            <RightSidebar/>
        </div>
    </div>
  )
}

export default Questions