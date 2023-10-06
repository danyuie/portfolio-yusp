import Image from 'next/image'
import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <h1 className='Heading-XS bold heading'>Contact Us</h1>
      <p className='Text-XXS regular desc'>We're here to help. Just reach out to us, tell us how can we help out and we'll respond as soon as we can.</p>
      <div className="local-box">
        <p className='Text-S bold'>Headquarter office</p>
        <p className='Text-XXS regular'>Storkower Strasse 41</p>
        <p className='Text-XXS regular'>Rheinland-Pfalz</p>
        <p className='Text-XXS regular'>56379</p>
        <p className='Text-XXS regular'>Germany, Berlin</p>
      </div>
      <div className="phone-box">
        <div className="icon"><Image src='/telephone-fill.svg' width={24} height={24} alt='' /></div>
        <div className="text">
          <p className='Text-S bold'>+84 969 357 043</p>
          <p className='Text-XXS regular'>Call us</p>
        </div>
      </div>
      <div className="phone-box">
      <div className="icon"><Image src='/envelope-fill.svg' width={24} height={24} alt='' /></div>
        <div className="text">
          <p className='Text-S bold'>yuspstudio@gmail.com</p>
          <p className='Text-XXS regular'>Send your email</p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm