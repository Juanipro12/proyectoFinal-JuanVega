import React from 'react'
import { View,Text,StyleSheet,Button} from 'react-native'

export const CategoryBreadScreen = ({navigation}) => {
  return (
    <View style={styles.screen} >
        <Text>CategoryBreadScreen</Text>
        <Button title='Ir a Detail' onPress={()=>{navigation.navigate('Detail')}}/>
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