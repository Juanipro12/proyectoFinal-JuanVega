import { useState } from "react"
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native"
import * as ImagePicker from 'expo-image-picker'



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
        <View style={styles.container}>
            <View style={styles.preview}>
                {
                    !pickerdUri ? <Text>No hay imagen seleccionada</Text>:
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
    container:{
        marginBotton:10
    },
    preview:{
        width:'100%',
        height:200,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        borderColor:'blue',
        borderWidth:1
    },
    image:{
        width:'100%',
        height:'100%'
    }
})