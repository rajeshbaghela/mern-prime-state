import React from 'react'
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import About from './pages/About'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Header from './Components/Header'


const App = () => {
  return (
  <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signout" element={<Signout/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App