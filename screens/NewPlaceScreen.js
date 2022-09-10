import { useState } from "react"
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { useDispatch } from "react-redux"
import ImageSelector from "../component/ImageSelector"
import LocationSelector from "../component/LocationSelector"
import { addPlace } from "../store/actions/place.action"



const NewPlaceScreen = ({navigation}) =>{
    const dispach = useDispatch()
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [location, setlocation] = useState(null)

    const titleChange = (text) => setTitle(text)

    const save = ()=>{
        dispach(addPlace(title,image,location))
        navigation.navigate('Direcciones')
    }


    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.label} >Nueva direccion</Text>
            <TextInput
            value={styles.input}
            onChangeText={titleChange}
            style={styles.input} 
              />
              <ImageSelector onImage={(image)=>setImage(image)} />
              <LocationSelector onLocation={setlocation}/>
            <Button title="Grabar Direccion" color='brown' onPress={save}/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:30
    },
    label:{
        fontSize:18,
        marginBottom:16
    },
    input:{
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        marginBottom:16,
        paddingHorizontal:2,
        paddingVertical:4
    }
})
export default NewPlaceScreen