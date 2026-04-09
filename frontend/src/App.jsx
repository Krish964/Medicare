import { Toaster } from "react-hot-toast";
import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Home from './home/Home';
import Signup from './Signup/signup';
import Login from './Signup/login';
import About from './home/About';
import More from './home/More';
import ForgotPassword from './Signup/ForgetPassword';
import Contact from './home/Contact';
import MainPage from "./Mainpage/Mainpage";
import SpecialitiesPage from "./Mainpage/SpecialitiesPage";
import AppointmentsPage from "./Mainpage/Appointment";
import SupportPage from "./Mainpage/Support";

function App() {
  return (
    <>
     <Toaster position="top-right" reverseOrder={false} />
       <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/signup' element = {<Signup/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/more' element = {<More/>}/>
          <Route path='/forgot-password' element = {<ForgotPassword/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/mainpage' element = {<MainPage/>}/>
          <Route path='/specialities' element = {<SpecialitiesPage/>}/>
          <Route path='/appointments' element = {<AppointmentsPage/>}/>
          <Route path='/support' element = {<SupportPage/>}/>
          
          
        </Routes>
    </>
  )
}

export default App
