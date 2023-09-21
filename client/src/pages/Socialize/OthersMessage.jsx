import './Socialize.css'
// import LikeDislike from './LikeDislike';

const OthersMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
  
    return (
      <div className="message-row">
        { isFirstMessageByUser && (
          <div
              className="message-avatar"
              style={{backgroundImage: `url(${message?.sender?.avatar})`}}
          />
        )} 
        {message?.attachments?.length >0
            ?(<div>
              
                <img
                  src={message.attachments[0].file}
                  alt="message-attachment"
                  className='message-image'
                  style={{marginLeft: isFirstMessageByUser ?'4px':'48px'}}
                /><br></br>
                <video alt="message-attachment" className='message-image' style={{float : 'right'}}>
                  <source src={message.attachments[0].file} type="video/mp4"/>
                </video><br></br>
                {/* <LikeDislike message={message}/> */}
              </div>
            ) 
            :(<div>
              
                <div  className='message' style={{float:'left', backgroundColor:'#CABCDC', marginLeft: isFirstMessageByUser ?'4px':'48px'}}>
                  {message.text}
                </div><br></br>
                {/* <LikeDislike message={message}/> */}
              </div>
            )
        }
      </div>
    )
  }
  
  export default OthersMessage
  