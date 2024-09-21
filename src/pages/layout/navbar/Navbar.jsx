import React from 'react';
import './Navbar.css'

export const Navbar = ({ }) => {
  return (
    <nav className='nav-container'>
      <div className="row flex">
        <div className="col-md-10 d-flex justify-content-start">
          <a href="/">
            <img
              className='logo'
              src="/assets/LOL_assets/LoL_Icon_Rendered/LoL_Icon_Rendered/LoL_Icon_Rendered_Hi-Res.png"
              alt="Logo"
            />
          </a>
          <ul className="list-unstyled flex m-0 p-0">
            <li className="nav-item"><a className='navbar-link' href="/">HOMEPAGE</a></li>
            <li className="nav-item"><a className='navbar-link' href="/random-team">RANDOM TEAM</a></li>
            <li className="nav-item"><a className='navbar-link' href="#">RANDOM ITEM</a></li>
            <li className="nav-item"><a className='navbar-link' href="#">ABOUT ME</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <div>Avatar</div>
        </div>
      </div>
    </nav>
  );
}