

import * as Location from 'expo-location'
import { useEffect } from 'react'
import { useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import MapPreview,{Marker } from 'react-native-maps'


const LocationSelector = props =>{
    const [pickedLocation, setPickedLocation] = useState(null)
    useEffect(()=>{
        if(!props.setReset)
        getLocation()
    },[props.setReset])
    const selectLocation = (e) =>{
        setPickedLocation({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude:e.nativeEvent.coordinate.longitude,
        })
        props.onLocation({
            lat: e.nativeEvent.coordinate.latitude,
            lng:e.nativeEvent.coordinate.longitude
        })
    }
    const getLocation = async () =>{
        const isLocationOk = await verifyPermissions()
        if(!isLocationOk){
            return
        }
        const location = await Location.getCurrentPositionAsync()
        setPickedLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta:0.001,
            longitudeDelta:0.001,
        })
        props.onLocation({
            lat:location.coords.latitude,
            lng:location.coords.longitude
        })
    }

    const verifyPermissions = async () =>{
        const { status } = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted'){
            Alert.alert(
                'Permisos insuficientes',
                'Necesitas permisos para usar la locazion',
                [{ text: 'OK' }]
            )
            return false
        }
        return true
    }

    return(
        <View style={styles.container}>
            <View style={styles.preview}>
            { pickedLocation &&(
            <MapPreview initialRegion={pickedLocation} style={styles.preview} onPress={selectLocation}>
                <Marker title='Ubicacion' coordinate={{
                    latitude:pickedLocation.latitude,
                    longitude:pickedLocation.longitude
                }} />
               </MapPreview>)}
            </View>
        </View>
    )
}
export default LocationSelector
const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    preview:{
        width:'100%',
        height:200,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'blue',
        borderWidth:1
    },
    image:{
        width:'100%',
        height:'100%'
    }
})