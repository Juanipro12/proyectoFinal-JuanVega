import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { CART } from '../data/cart'
import CartItem from '../component/CartItem'

const CartScreen = () => {

  const items = CART
  const total = 12000
  const confirmarCart = ()=>console.log('Confirmar pedido')
  const eliminarCart = ()=>console.log('Eliminar pedido')
  const renderItem = (data) =>{
    return(<CartItem item={data.item} onDelete={eliminarCart}/>)
  }
  return (
    <View style={styles.container} >
      <View style={styles.list} >
        <FlatList 
        data={items}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={()=>confirmarCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    padding:12,
    paddingBottom:120
  },
  list:{
    flex:1
  },
  footer:{
    padding:12,
    borderTopColor:'#ccc',
    borderTopWidth:1
  },
  comfirm:{
    backgroundColor:'#ccc',
    borderRadius:10,
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  total:{
    flexDirection:'row'
  },
  text:{
    fontZise:18,
    fontFamily:'Oswald',
    padding:8
  }
})