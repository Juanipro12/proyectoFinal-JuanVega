import { FlatList, StyleSheet, Text, View } from "react-native"
import PlaceItem from "../component/PlaceItem"
import {useSelector} from 'react-redux'


const PlaceListScreen = ({navigation}) =>{

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