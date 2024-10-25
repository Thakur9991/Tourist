import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import TopNav from './components/TopNav'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Destination from './pages/Destination'
import Tours from './pages/Tours'
import FooterSection from './components/FooterSection'


function App() {
 

  return (
    <>
     <TopNav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/tours' element={<Tours/>}/>
     </Routes>
     <FooterSection/>
    </>
  )
}

export default App
