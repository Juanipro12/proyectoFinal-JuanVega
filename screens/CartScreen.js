import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { CART } from '../data/cart'
import CartItem from '../component/CartItem'
import {useDispatch, useSelector} from 'react-redux'
import { confimCart } from '../store/actions/cart.actions'

const CartScreen = () => {
  const { items , total } = useSelector(store => store.cart)
  const dispatch = useDispatch()
  const selfConfirmarCart = ()=>dispatch(confimCart(items,total))
  const eliminarItem = (id)=>dispatch(renderItem(id))
  const renderItem = (data) =>{
    return(<CartItem item={data.item} onDelete={eliminarItem}/>)
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
        <TouchableOpacity style={styles.confirm} onPress={selfConfirmarCart}>
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
    fontSize:18,
    fontFamily:'Oswald',
    padding:8
  }
})