import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  return (
    <div className='homeContainer1'>
        <LeftSidebar/>
        <div className='homeContainer2'>
            <QuestionDetails/>
            <RightSidebar/>
        </div>
    </div>
  )
}

export default DisplayQuestion