import { View, Text } from 'react-native'
import React from 'react'
import MapPreview from '../component/MapPreview'
import { useEffect } from 'react'
import { useState } from 'react'

const MapsScreen = () => {
    const [location, setLocation] = useState(null)
    useEffect(()=>{
        const location = await Location.getCurrentPositionAsync()
            console.log(location)
            setLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }) 
    },[])
    const initialRegion = {
       latitude:location.lat,
       longitude:location.lng,

    }
  return (
    <MapPreview initialRegion={initialRegion} />
  )
}

export default MapsScreen