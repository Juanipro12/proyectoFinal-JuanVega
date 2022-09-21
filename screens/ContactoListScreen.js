import { FlatList, StyleSheet, Text, View } from "react-native"
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from "react"
import * as contactoAction from '../store/actions/contacto.action'
import { useIsFocused } from "@react-navigation/native"
import ContactoItem from "../component/PlaceItem"

const ContactoListScreen = ({navigation}) =>{
    const dispach = useDispatch()
    const focused = useIsFocused()
    console.log('focused: ', focused)
    let contactos = useSelector(state => (state.contactos.contactos))
    const renderItem = (data) =>{
        return(
        <ContactoItem
            id={data?.item.id}
            name={data?.item.name}
            telefono={data?.item.telefono}
            image={data?.item.image}
            address={data?.item.address}
            onSelect={()=> navigation.navigate('Detalle',{id:data?.item.id})}
            />
    )}
    useEffect(()=>{
        dispach(contactoAction.fechtContacto())
        console.log(contactos)
    },[focused])
    return(
       <FlatList
            data={contactos}
            extraData={contactos}
            renderItem={renderItem}
            keyExtractor={(item,index)=>item.id}
        />

    )
}


export default ContactoListScreen