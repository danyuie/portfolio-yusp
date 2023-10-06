"use client"
import { GoogleMap, LoadScript ,useLoadScript} from '@react-google-maps/api'
import React from 'react'

export default function GoogleMapView() {
  const NEXT_PUBLIC_GOOGLE_API_KEY ='AIzaSyC-OtrXaR41GKs9WdIM8XFPw2927um9xmI'
  const position = {lat: 10.80235481262207,lng: 106.67579650878906}
  function Map() {
    return <GoogleMap zoom={13} center={position} mapContainerClassName='google-map'></GoogleMap>
  }
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: NEXT_PUBLIC_GOOGLE_API_KEY,
  })
  if (!isLoaded) return  <div>Loading...</div>;
  return <Map />
}

