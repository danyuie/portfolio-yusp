import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { NavLinks } from '../constants';

const Navbar = () => {
  return (
    <nav className='container-global nav'>
      <div className='navbar'>
        <Link href='/'>
          <Image
            src='/brand.svg'
            width={97}
            height={31.81}
            alt='Yusp Studio'/>
        </Link>

        <Image 
          src='/hamburger-menu.svg'
          width={0}
          height={0}
          // height={24}
          alt='Hamburger Menu'
          className="hidden md:hidden" />

        <ul>
          {NavLinks.map((link) =>
          (<Link
            className='Text-S medium'
            href={link.href} key={link.key}>
              {link.text}
            </Link>))}
        </ul>
      </div>
      


    </nav>
  )
}

export default Navbar