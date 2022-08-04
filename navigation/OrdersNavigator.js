import React from 'react'
import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import OrderItemScreen from '../screens/OrderItemScreen'


const Stack = createNativeStackNavigator()

export const OrdersNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="Orders"
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
            name='Orders'
            component={OrderItemScreen}
            options={{title:'Orders'}}
            />
        </Stack.Navigator>
  )
}
export default OrdersNavigator