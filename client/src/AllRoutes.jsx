import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import Socialize from './pages/Socialize/Socialize'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'

const AllRoutes=()=>{
    return (
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/About' element={<About/>} />
            <Route exact path='/Products' element={<Products/>} />
            <Route exact path='/Socialize' element={<Socialize/>} />
            <Route exact path='/Auth' element={<Auth/>} />
            <Route exact path='/Questions' element={<Questions/>} />
            <Route exact path='/AskQuestion' element={<AskQuestion/>} />
            <Route path='/Questions/:id' element={<DisplayQuestion/>} />
            <Route path='/Tags' element={<Tags/>} />
            <Route path='/Users' element={<Users/>} />
            <Route path='/Users/:id' element={<UserProfile/>} />
        </Routes>
    )
}
export default AllRoutes;