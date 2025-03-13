import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import React from 'react'

export default function BlogHeader() {
  return (
    <Navbar >
      <NavbarBrand>
        {/* //<AcmeLogo /> */}
        <p className="font-bold text-inherit">BLOG</p>
      </NavbarBrand>
      <NavbarContent >
        <NavbarItem 
        isActive={true}
        >
      
            <p className='text-2xl font-geologica'>Welcome to fuad&quot;s blogs</p>
        
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
