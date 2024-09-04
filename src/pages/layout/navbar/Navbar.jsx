import React from 'react';
export const Navbar = ({ }) => {
  return (
    <nav>
      <div className="row">
        <div className="col-2">
          <img
            className='w-16 h-auto'
            src={`${process.env.PUBLIC_URL}/assets/LOL_assets/LoL_Icon_Rendered/LoL_Icon_Rendered/LoL_Icon_Rendered_Hi-Res.png`}
            alt="Logo"
          />
        </div>
        <div className='col-8'>
          <ul className='flex list-none w-1/1'>
            <li className='nav-item'>Homepage</li>
            <li className='nav-item'>Random Team</li>
            <li className='nav-item'>Random Item</li>
            <li className='nav-item'>About me</li>
          </ul>
        </div>
        <div className="col-2">

        </div>
      </div>
    </nav>
  );
}