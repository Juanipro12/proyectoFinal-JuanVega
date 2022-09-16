import * as FileSystem from 'expo-file-system'
import { API_GEOCODE } from '../../constants/DataBase'
import { fechtAddress, insertAddres } from '../../db'

export const ADD_PLACE = 'ADD_PLACE'
export const LOAD_PLACES = 'LOAD_PLACES'

export const addPlace = (title,image,location) =>{
    return async dispatch => {
        const response =  await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_GEOCODE}`)
        if(!response.ok) console.log('No anda la api')

        const resData = await response.json()
        if(!resData.results) console.log('No hay dirreccion')

        const address = resData.results[0].formatted_address
       
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to:Path
            })
            const result = await insertAddres(
                title,
                Path,
                address,
                location.lat,
                location.lng
            )
            console.log(result)
            dispatch({
                type:ADD_PLACE, 
                payload: {  
                            id:result.insertId,
                            title, 
                            image: Path  ,
                            coords:{
                                lat: location.lat,
                                lng: location.lng
                                },
                            address:address
                            
        }})
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}



export const loadAddress = () =>{
    return async dispatch =>{
        try {
            const result = await fechtAddress()
            console.log(result,'soyres')
            dispatch({type:LOAD_PLACES, places: result.rows._array })
        } catch (error) {
            console.log(error)
        }
    }
}