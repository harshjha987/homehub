import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile"
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<Home />} />
    <Route path = "/signin" element = {<SignIn />}/>
    <Route path='/signup' element = {<SignUp />}/>
    <Route path = "/about" element = {<About />}/>
    <Route path='/profile' element = {<Profile />} />

    </Routes>

    </BrowserRouter>
  )
}

export default App