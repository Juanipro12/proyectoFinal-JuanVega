import { FlatList, StyleSheet, Text, View } from "react-native"
import PlaceItem from "../component/PlaceItem"
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from "react"
import * as addressAction from '../store/actions/place.action'

const PlaceListScreen = ({navigation}) =>{
    const dispach = useDispatch()
    const places = useSelector(state => (state.places.places))
    console.log(places, 'soy places')
    const renderItem = (data) =>{
       
        return(
        <PlaceItem
            title={data?.item.title}
            image={data?.item.image}
            address={data?.item.address}
            onSelect={()=> navigation.navigate('Detalle')}
            />
    )}
    useEffect(()=>{
        dispach(addressAction.loadAddress())
    },[])
    return(
        <FlatList
            data={places}
            extraData={places}
            renderItem={renderItem}
            keyExtractor={(item,index)=>item.title.length+index}
        />

    )
}


export default PlaceListScreen