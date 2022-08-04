import React from 'react'
import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import CartScreen from '../screens/CartScreen'


const Stack = createNativeStackNavigator()

export const CartNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={{
            headerStyle:{
                backgroundColor: Platform.OS === 'android'?Colors.primary:""
            },
            headerTintColor:Platform.OS === 'android'?'white':Colors.primary,
            headerTitleStyle:{
                fontWeight:'bold'
            }
        }}
        >
            <Stack.Screen
            name='Cart'
            component={CartScreen}
            options={{title:'Carrito'}}
            />
        </Stack.Navigator>
  )
}
export default CartNavigator