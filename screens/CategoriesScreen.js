import React from 'react'
import { View,Text,StyleSheet,Button } from 'react-native'

export const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.screen} >
        <Text>Home</Text>
        <Button title='Ir a Bread' onPress={()=>{navigation.navigate('Bread')}}/>
    </View>
  )
} 
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})