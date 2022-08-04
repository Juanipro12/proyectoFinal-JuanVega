import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import OrdersNavigator from './OrdersNavigator'


const ButtomsTabs = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <ButtomsTabs.Navigator
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:styles.tabBar
        }}
    >
        <ButtomsTabs.Screen 
        name='ShopTab' 
        component={ShopNavigator}
        options={{
            tabBarIcon:({focused}) =>(
                <View style={styles.item}>
                    <Ionicons name='md-home' size={24} color={focused?'blue':'black'}/>
                    <Text>Tienda</Text>
                </View>
            )
        }}
        />
        <ButtomsTabs.Screen 
        name='CartTab' 
        component={CartNavigator} 
        options={{
            tabBarIcon:({focused}) =>(
                <View style={styles.item}>
                    <Ionicons name='md-cart' size={24} color={focused?'blue':'black'}/>
                    <Text>Carrito</Text>
                </View>
            )
        }}
        />
        <ButtomsTabs.Screen 
        name='OrdersTab' 
        component={OrdersNavigator} 
        options={{
            tabBarIcon:({focused}) =>(
                <View style={styles.item}>
                    <Ionicons name='cash-outline' size={24} color={focused?'blue':'black'}/>
                    <Text>Ordenes</Text>
                </View>
            )
        }}
        />
    </ButtomsTabs.Navigator>
  )
}

export default TabNavigator
const styles = StyleSheet.create({
    tabBar:{
        shadowColor:'#7f5df0',
        shadowOffset:{ width:0,height:10 },
        shadowOpacity:0.25,
        shadowRadius:0.25,
        position:'absolute',
        bottom:25,
        left:20,
        right:20,
        borderRadius:15,
        height:90
    },
    item:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})