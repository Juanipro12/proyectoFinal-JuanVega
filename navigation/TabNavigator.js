import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import newContactoScreen from '../screens/newContactoScreen'
import ContactosNavigator from './ContactosNavigator'


const ButtomsTabs = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <ButtomsTabs.Navigator
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
        }}
    >
         <ButtomsTabs.Screen 
        name='Contactos' 
        component={ContactosNavigator} 
        options={{
            tabBarIcon:({focused}) =>{
                return(
                <View style={styles.item}>
                    <Ionicons name='person-outline' size={24} color={focused?'blue':'black'}/>
                    <Text>Contactos</Text>
                </View>)
            }
        }}
        />
         <ButtomsTabs.Screen
        name="Nuevo"
        component={newContactoScreen}
        options={{
            tabBarIcon:({focused}) =>(
                <View style={styles.item}>
                    <Ionicons name='person-add-outline' size={24} color={focused?'blue':'black'}/>
                    <Text>Nuevo</Text>
                </View>
            )
        }}
        />

    </ButtomsTabs.Navigator>
  )
}

export default TabNavigator
const styles = StyleSheet.create({
    item:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})