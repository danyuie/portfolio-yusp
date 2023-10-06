import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const ContactCard = () => {
  return (
    <div className="contact-item">
          <span className='Heading-M semi-bold'>Interested in working with us on your next project? Write us an email or schedule a meeting.</span>
          <ButtonPrimary
          title='Contact Me'
          containerStyle='button-color' />
    </div>
  )
}

export default ContactCard