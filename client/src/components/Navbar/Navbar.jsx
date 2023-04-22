import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import decode from 'jwt-decode'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
  var User= useSelector(state=> state.currentUserReducer)  //to access data anywhere in the app
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut =()=>{
    dispatch({ type: 'LOGOUT'})
    navigate('/')
    dispatch(setCurrentUser(null))
  }
  
  useEffect (()=>{
    const token = User?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogOut()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch])    //because of this on refreshing 'Log out' does not change back to 'Log in' button

  return (
    <nav  className='mainNav'>
      
        <div className='navbar'>
            <Link to='/' className='navItem navLogo'><img src={logo} alt='logo' /></Link>
            <Link to='/' className='navItem navButton'>About</Link>
            <Link to='/' className='navItem navButton'>Products</Link>
            <Link to='/' className='navItem navButton'>For Teams</Link>
            
            <form>
              <input type='text' placeholder='Search...'></input>
              <img src={search} alt='Search' width='18' className='search-icon'></img>
            </form>
            {
              User===null ? 
              <Link to='/Auth' className='navItem navLink'>Log In</Link> :
              <>
                <Avatar backgroundColor="#009dff" px='14px' py='7px' borderRadius='50%' color='white'>
                  <Link to={`/Users/${User?.result?._id}`} style={{color:'white',textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link>
                </Avatar>
                <button className='navItem navLink' onClick={handleLogOut}>Log Out</button>
              </>
            }
        </div>
        
    </nav>
  )
}

export default Navbar