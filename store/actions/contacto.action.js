import * as FileSystem from 'expo-file-system'
import { API_GEOCODE } from '../../constants/DataBase'
import { fechtContactos, insertContactos, deletedDB } from '../../db'

export const ADD_CONTACTO = 'ADD_CONTACTO'
export const LOAD_CONTACTOS = 'LOAD_CONTACTOS'
export const DELETE_CONTACTO = 'DELETE_CONTACTO'

export const addContacto = (name,telefono,image,location) =>{
    return async dispatch => {
        const response =  await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_GEOCODE}`)
        if(!response.ok) console.log('No anda la api')

        const resData = await response.json()
        if(!resData.results) console.log('No hay dirreccion')

        const address = resData.results[0].formatted_address
        let Path = null
       if(image){
        const fileName = image.split('/').pop()
        Path = FileSystem.documentDirectory + fileName
        try {
            FileSystem.moveAsync({
                from: image,
                to:Path
            })
        } catch (error) {
            console.log(error)
        }
    }

        try {
            const result = await insertContactos(
                name,
                telefono,
                Path,
                address,
                location.lat,
                location.lng
            )
            dispatch({
                type:ADD_CONTACTO, 
                payload: {  
                            id:result.insertId,
                            name,
                            telefono,
                            image:Path,
                            coords:{
                                lat: location.lat,
                                lng: location.lng
                                },
                            address:address
                            
        }}).then(()=>fechtContacto())

        } catch (error) {
            console.log(error)
            throw error
        }
    }
}



export const fechtContacto = () =>{
    return async dispatch =>{
        try {
            const result = await fechtContactos()
            return dispatch({type:LOAD_CONTACTOS, contactos: result.rows._array })
        } catch (error) {
            console.log(error)
        }
    }
}
export const deleted = (id) =>{
    return async dispatch =>{
        try {
             await deletedDB(id)
            dispatch({type:DELETE_CONTACTO, contacto:id })
        } catch (error) {
            console.log(error)
        }
    }
}