import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FooterLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='container-global space-global'>
      <div className='footer'>
        <Link href='/'>
          <Image
            src='/brand.svg'
            width={210}
            height={69}
            alt='Yusp Studio'/>
        </Link>
        <ul>
          {FooterLinks.map((link) =>
          (<Link
            className='Text-XS regular'
            href={link.href} key={link.key}>
              {link.text}
            </Link>))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer