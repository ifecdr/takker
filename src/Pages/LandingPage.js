import React from 'react'
import Contents from '../Components.js/Contents'
import Footer from '../Components.js/Footer'
import NavBar from '../Components.js/NavBar'
import Showcase from '../Components.js/Showcase'


export default function landingPage() {
  return (
    <div>
        <NavBar/>
        <Showcase/>
        <Contents/>
        <Footer/>
    </div>
  )
}