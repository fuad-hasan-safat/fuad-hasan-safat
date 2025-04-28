import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

export default function BlogHeader() {
  return (
    <Navbar className='shadow-md shadow-slate-300 sticky top-0 z-50 opacity-95' >
      <NavbarBrand className='flex justify-between items-center'>
        {/* //<AcmeLogo /> */}
        <Link href={'/blog'} className="font-bold text-inherit">BLOG</Link>
      </NavbarBrand>
      <NavbarContent >
        <NavbarItem 
        >
          <Link href={'/'} className="font-bold text-inherit">Portfolio</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
