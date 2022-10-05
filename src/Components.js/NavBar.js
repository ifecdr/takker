import React from 'react'
import '../index.css'

const logo = new URL("../Uploads/logo.png",import.meta.url)
const curr = new URL("../Uploads/united-kingdom 1.png", import.meta.url)
const psn = new URL("../Uploads/Vector.png", import.meta.url)
const cart = new URL("../Uploads/Vector2.png", import.meta.url)


export default function NavBar() {
  return (
    <div className='nav-bar'>
        <div className='logo'><img src={logo} alt='Logo'/></div>
        <ul className='nav-1'>
            <li className='active'><span className='undl'> Ho</span>me </li>
              <li><span className='hover'> Prod</span>uct </li>
              <li><span className='hover'> FA</span>Q </li>
              <li><span className='hover'> Cont</span>act </li>
        </ul>
          <ul className='nav'>
              <li><img src={psn} alt='login' align="top"/>&nbsp; Login</li>
              <li><img src={cart} alt='Cart' align="top"/>&nbsp; Cart</li>
              <li><img src={curr} alt='Uer' align="top" className='eur'/>&nbsp; EUR</li>
          </ul>
    </div>
  )
}
