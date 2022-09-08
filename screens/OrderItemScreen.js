import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import OrderItem from '../component/OrderItem'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrder, getOrders } from '../store/actions/order.action'

const OrderItemScreen = () => {
  const dispach = useDispatch()

  const orders = useSelector(state =>state.order.list)
    const deleteItem =(id)=>dispach(deleteOrder(id))
    useEffect(()=>{
     dispach(getOrders())
    },[])
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
        onRefresh={()=>{dispach(getOrders())}}
        refreshing={false}
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