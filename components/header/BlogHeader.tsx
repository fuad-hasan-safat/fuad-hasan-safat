import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

export default function BlogHeader() {
  return (
    <Navbar >
      <NavbarBrand>
        {/* //<AcmeLogo /> */}
        <Link href={'/blog'} className="font-bold text-inherit">BLOG</Link>
      </NavbarBrand>
      <NavbarContent >
        <NavbarItem 
        isActive={true}
        >
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
