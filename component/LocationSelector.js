

import * as Location from 'expo-location'
import { useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import MapPreview from './MapPreview'


const LocationSelector = props =>{
    const [pickedLocation, setPickedLocation] = useState()

    const getLocation = async () =>{
        const isLocationOk = await verifyPermissions()
        if(!isLocationOk){
            return
        }
        const location = await Location.getCurrentPositionAsync({
            timeout:3000,
        })
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
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
               <MapPreview location={pickedLocation} style={styles.preview}>
                    <Text>Location en proceso...</Text>
               </MapPreview>
            </View>
            <Button
                title='Obtener location'
                color='purpure'
                onPress={getLocation}
                />
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