import React from 'react';
import './ChitChat.css'
import LikeDislike from './LikeDislike';

const MyMessage = ({ message }) => {
  
  if (message?.attachments?.length > 0) {
    return (
      <div style={{float : 'right'}}>

        <LikeDislike message={message} style={{float : 'right'}}/><br></br>
          <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className='message-image'
          style={{float : 'right'}}
          />
          <video alt="message-attachment" className='message-image' style={{float : 'right'}}>
            <source src={message.attachments[0].file} type="video/mp4"/>
          </video>
      </div>
    );
    
  }

  return (
    <div style={{float : 'right'}}>

      <LikeDislike message={message}/><br></br>
      <div className="message"
        style={{
          float: "right",
          marginRight: "18px",
          color: "white",
          backgroundColor: "#3B2A50",
        }}
      >
        {message.text}
      </div>
    </div>
  );
};

export default MyMessage;
