import React from 'react'
import { TouchableOpacity,View,Text,StyleSheet } from 'react-native'

const BreadItems = ({item,onSelected}) => {
  return (
    <TouchableOpacity onPress={()=>onSelected(item)}>
        <View style={styles.breadItem} >
            <View>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View>
                <Text style={styles.datils} >{item.price}</Text>
                <Text style={styles.datils} >{item.weigth}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}
export default BreadItems
const styles = StyleSheet.create({
    breadItem:{
        padding:20,
        margin:10,
        borderRadius:3,
        backgroundColor:'#ccc'
    },
    title:{
        fontFamily:'Oswald',
        fontSize:20
    },
    details:{
        fontSize:18
    }
})
