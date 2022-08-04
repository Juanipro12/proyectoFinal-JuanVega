import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import OrderItem from '../component/OrderItem'
import { ORDERS } from '../data/orders'

const OrderItemScreen = () => {

    const orders= ORDERS
    const deleteItem =(id)=>console.log('delete item')
    const renderCartItem = ({item})=>(
        <OrderItem item={item} onDelete={deleteItem}/>
    )
  return (
    <View style={styles.container} >
      <FlatList
        data={orders}
        renderItem={renderCartItem}
        keyExtractor={item=>item.id}
        numColumns={1}
        />
    </View>
  )
}

export default OrderItemScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:10
    }
})