import React from 'react'
import back from '../images/back.png'
import logo from '../images/lloggggg.jpeg'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <header>
        <nav className="navbar">
            <span className="hamburger-btn material-symbols-rounded">menu</span>
            <a href="#" className="logo">
                <img src={logo} alt="logo"/>
                <h2>QualityBean
                    
                </h2>
            </a>
            <ul className="links">
                <span className="close-btn material-symbols-rounded">close</span>
                <li><a href="#">Home</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
            <Link to='/login'>
            <button className="login-btn">LOG IN</button>
            </Link>
            
        </nav>

        <div className='home'>
            
            <Link to='/home'> <button>Home</button></Link>
            </div>
    </header>
  )
}

export default Landing
