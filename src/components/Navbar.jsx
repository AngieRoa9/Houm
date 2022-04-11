import React from 'react'
import Logo from '../assets/logo.png'
import '../index.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" className='logo' />
        </a>
        <div className="d-flex p-navbar">
      <p>¡Conocelos a todos!</p>
      </div >
      </div>
</nav>
    </div>
  )
}

export default Navbar