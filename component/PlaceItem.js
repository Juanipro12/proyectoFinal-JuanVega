import { Alert, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import {useDispatch} from 'react-redux'
import * as contactoAction from '../store/actions/contacto.action'





const ContactoItem = ({id,name,telefono,image,address,onSelect}) =>{
    const dispach = useDispatch()
    const llamar = ()=>{
        Linking.openURL('tel:'+telefono)
    }
    const whatsapp = async()=>{
        await Linking.openURL('https://wa.me/'+telefono)
    }
    const deleted = ()=>{
        Alert.alert(
            'Estas seguro que ',
            'quieres eliminar este contacto?',
            [{ text: 'Cancelar' },{ text: 'Eleminar', onPress:()=>{ dispach(contactoAction.deleted(id)) } }]
        )
    }

    return(
        <View style={styles.contactoItem}>
            {image?    
            <Image style={styles.image} source={{ uri: image }} />:
            <Image style={styles.image} source={require('../constants/fotoPerfilDefault.png')}/>
        }
            <View  style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.telefono}>{telefono}</Text>
                <View style={{flexDirection:'row'}}>
                <Ionicons style={{marginRight:10}} onPress={whatsapp} name='logo-whatsapp' size={24} color={'green'}/>
                <Ionicons onPress={llamar} name='call-outline' size={24} color={'blue'}/>
                </View>
                <Text style={styles.address}>{address}</Text>
            </View>
            <Ionicons onPress={onSelect} name='eye-outline' size={24} style={{marginRight:10}} color={'blue'}/>
            <Ionicons onPress={deleted} name='trash-outline' size={24} color={'red'}/>
            
        </View>

    )
}

const styles = StyleSheet.create({
    contactoItem:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:16,
        paddingHorizontal:30
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'pink',
        borderWidth:5,
        borderColor:'#48B920'
    },
    info:{
        marginLeft:25,
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    name:{
        color:'black',
        fontSize:20,
        marginBottom:6
    },
    telefono:{
        color:'blue',
        fontSize:18,
        marginBottom:6
    },
    address:{
        color:'black',
        fontSize:16
    }
})
export default ContactoItem