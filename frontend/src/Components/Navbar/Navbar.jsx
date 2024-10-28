import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'

const Navbar = () => {

  const [menu,setMenu] = useState("Shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Surya Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("Shop")}} >Shop {menu === "Shop"?<hr></hr>:<></>} </li>
            <li onClick={() => {setMenu("Men")}} >Men {menu === "Men"?<hr></hr>:<></>} </li>
            <li onClick={() => {setMenu("Women")}} >Women {menu === "Women"?<hr></hr>:<></>} </li>
            <li onClick={() => {setMenu("Kidds")}} >Kidds {menu === "Kidds"?<hr></hr>:<></>} </li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart} alt="" />
            <div className="nav_cart_count">0</div>
        </div>
    </div>
  )
}

export default Navbar