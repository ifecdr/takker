import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

const logo = new URL("../Uploads/logo.png",import.meta.url)
const curr = new URL("../Uploads/united-kingdom 1.png", import.meta.url)
const psn = new URL("../Uploads/Vector.png", import.meta.url)
const cart = new URL("../Uploads/Vector2.png", import.meta.url)


export default function NavBar() {
  return (
    <div className='nav-bar'>
        <div className='logo'><img src={logo} alt='Logo'/></div>
        <ul className='nav-1'>

            <Link to='/'><li className='active'><span className='undl'> Ho</span>me </li></Link>
              <Link to='/product'><li><span className='hover'> Prod</span>uct </li></Link>
              <Link to='/FAQ'><li><span className='hover'> FA</span>Q </li></Link>
              <Link to='/contact'><li><span className='hover'> Cont</span>act </li></Link>
        </ul>
          <ul className='nav'>
               <Link to='/login'><li><img src={psn} alt='login' align="top"/>&nbsp; Login</li></Link>
               <Link to='/cart'><li><img src={cart} alt='Cart' align="top"/>&nbsp; Cart</li></Link>
               <li><img src={curr} alt='Uer' align="top" className='eur'/>&nbsp; EUR</li>
          </ul>
    </div>
  )
}
