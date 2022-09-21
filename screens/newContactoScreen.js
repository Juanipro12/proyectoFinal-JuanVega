import { useState } from "react"
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { useDispatch } from "react-redux"
import ImageSelector from "../component/ImageSelector"
import LocationSelector from "../component/LocationSelector"
import { addContacto } from "../store/actions/contacto.action"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackActions, TabActions } from "@react-navigation/native"



const NewPlaceComponent = ({navigation}) =>{
    const dispach = useDispatch()
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [location, setlocation] = useState(null)
    const [telefono, setTelefono] = useState('')
    const [error, setError] = useState('')


    const nameChange = (text) => setName(text)
    const telefonoChange = (text) => setTelefono(text)
    const [contactoCreado, setContactoCreado] = useState(false)
    function isValid(p) {
        var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
        var digits = p.replace(/\D/g, "");
        return phoneRe.test(digits);
      }

    const save = async()=>{
        if(isValid(telefono)){
            setError('')
            dispach(addContacto(name,telefono,image,location))
            setImage('')
            setlocation(null)
            setName('')
            setTelefono('')
           setContactoCreado(true)
           setTimeout(()=>setContactoCreado(false),3000)
        }else{
            setError('Telefono invalido')
        }
        
    }
    const saltar = () =>{
        navigation.dispatch(
            TabActions.jumpTo('Contactos'))
    }
    

    return (
        <ScrollView>
        <View style={styles.info}>
            <View style={styles.image}>
                <ImageSelector setReset={image}  style={styles.image} onImage={(image)=>setImage(image)} />
            </View>
            <View style={{width: 150, margin:50 }}>
            <Text style={styles.label} >Nombre</Text>
            <TextInput
            value={name}
            onChangeText={nameChange}
            style={styles.input} 
              />
              <Text style={styles.label} >Telefono</Text>
            <TextInput
            value={telefono}
            onChangeText={telefonoChange}
            style={styles.input} 
              />
             {(error.length > 0) && (<Text style={styles.error}>{error}</Text>)}
            </View>
            
        </View>
            {contactoCreado && <Text style={{color:'green',fontSize:20, textAlign:'center'}}>Contacto creado</Text>}
        <View style={{margin:40}}>

            <LocationSelector setReset={location} onLocation={setlocation}/>
        </View>
            <Button title="Guardar Contacto" color='black' onPress={save}/>

        </ScrollView>
    )
}

const PlaceStack = createNativeStackNavigator()
const newContactoScreen = () =>{
    return(
        <PlaceStack.Navigator
        initialRoute="Nuevo"
        screenOptions={{
            headerStyle:{
                backgroundColor:Platform.OS === 'android'?'black':''
                        },
            headerTintColor:Platform.OS === 'android'?'white':'black',
            headerTitleStyle:{
                fontWeight:'bold'
            }
        }}
    >
        <PlaceStack.Screen
        name="NuevoContacto"
        component={NewPlaceComponent}
        options={()=>({
            title:'Nuevo Contacto',
        })}
        />

    </PlaceStack.Navigator>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:30
    },
    label:{
        fontSize:18,
        marginBottom:16,
    },
    error:{
        fontSize:15,
        color:'red'
    },
    input:{
        borderBottomColor:'#black',
        borderBottomWidth:1,
        marginBottom:16
    },
    info:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:30
    },
})
export default newContactoScreen