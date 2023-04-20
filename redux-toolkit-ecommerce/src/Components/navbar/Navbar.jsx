import React from 'react'
import NavbarLeft from './navbar-item/NavbarLeft'
import NavbarRight from './navbar-item/NavbarRight'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between my-5'>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar