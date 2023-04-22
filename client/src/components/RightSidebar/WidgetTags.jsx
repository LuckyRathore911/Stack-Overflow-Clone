import React from 'react'
import './RightSidebar.css'

const WidgetTags = () => {
  const tags = ['C', 'css',  'express', 'firebase', 'html', 'java', 'javascript','mern','mongodb','mysql','next.js','node.js','php','python','reactjs']
  return (
    <div className='widget-tags'>
        <h4>Watched Tags</h4>
        <div className='widget-tags-div'>
            {
              tags.map((tag)=>(    //{} for normal function and () is used to return jsx element
                <p key={tag}>{tag}</p>
              ))
            }
        </div>
    </div>
  )
}

export default WidgetTags