import { ChatEngine } from "react-chat-engine";
import { useSelector } from 'react-redux'

import Auth from '../Auth/Auth'
import ChatFeed from "./ChatFeed";
import './ChitChat.css'

const ChitChat = () => {
  const currentUser = useSelector(state => state.currentUserReducer)

  if(!localStorage.getItem('Profile')){
    return <Auth />
  }
  return (
    <div style={{paddingTop:'50px'}}>
    {
      currentUser &&
      <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={currentUser.result.name}
      userSecret={currentUser.result.password}
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />}
    </div>
  )

}

export default ChitChat