import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,setMenu] = useState("Shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Surya Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => {setMenu("Shop")}} > <Link to='/'>Shop</Link> {menu === "Shop"?<hr></hr>:<></>} </li>
            <li onClick={() => {setMenu("Men")}} > <Link to='/mens'>Men</Link>  {menu === "Men"?<hr></hr>:<></>} </li>
            <li onClick={() => {setMenu("Women")}} > <Link to='/womens'>Women</Link> {menu === "Women"?<hr></hr>:<></>} </li>
            <li onClick={() => {setMenu("Kidds")}} > <Link to='/kids'>kids</Link> {menu === "Kidds"?<hr></hr>:<></>} </li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button> </Link>
            <link to ='/cart'> < img src={cart} alt="" /> </link>
            <div className="nav_cart_count">0</div>
        </div>
    </div>
  )
}

export default Navbar