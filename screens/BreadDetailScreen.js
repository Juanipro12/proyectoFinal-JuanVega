import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export const BreadDetailScreen = ({route}) => {
  const { bread } = route.params
  return (
    <View style={styles.screen} >
        <Text style={styles.title} >{bread.name}</Text>
        <Text>{bread.description}</Text>
        <Text>{bread.weight}</Text>
        <Text>{bread.price}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    title:{
      fontSize:20,
      fontFamily:'Oswald',
      marginBottom:10
    }
})