import { useState } from "react"
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native"
import * as ImagePicker from 'expo-image-picker'
import { useEffect } from "react"



const ImageSelector = (props) =>{
    const [pickerdUri, setPickerdUri] = useState()

    const takeImage = async ()=>{
        const isCamaraOk = await veryPermission()
        if(!isCamaraOk) return 

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality: 0.8
        })
        setPickerdUri(image.uri)
        props.onImage(image.uri)
    }
    useEffect(()=>{
        if(!props.setReset)
        setPickerdUri(null)
    },[props.setReset])
    const veryPermission = async () =>{
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if( status !== 'granted' ){
            Alert.alert(
                'No tienes permisos para usar la camara',
                'Necesitas dar permisos para usar la camara',
                ({text: 'Ok' })
            )
            return false
        }
        return true
    }

    return(
        <View >
            <View>
                {
                    !pickerdUri ? <Image style={styles.image} source={require('../constants/fotoPerfilDefault.png')}/>:
                    <Image
                        style={styles.image}
                        source={{ uri: pickerdUri }}
                        />

                }
            </View>
            
            <Button
                title='Tomar foto'
                color='black'
                onPress={takeImage}
            />
        </View>
    )

}
export default ImageSelector

const styles = StyleSheet.create({
    image:{
        height:120,
        width:120,
        borderRadius:100,
    }
})