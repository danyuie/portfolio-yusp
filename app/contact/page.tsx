import React from 'react'
import GoogleMapView from './../components/GoogleMapView';
import ContactForm from '../components/ContactForm';

const page = () => {
  return (
    <div className='container-global contact'>
      <GoogleMapView />
      <ContactForm />
    </div>
  )
}

export default page