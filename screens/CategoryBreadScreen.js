import React from 'react'
import { FlatList } from 'react-native'
import BreadItems from '../component/BreadItems'
import { BREADS } from '../data/breads'

export const CategoryBreadScreen = ({navigation,route}) => {
  const Breads = BREADS.filter(bread => bread.category == route.params.categoryID)
  const selected = (item) =>{
    navigation.navigate('Detail',{
      bread:item
    })
  }
  const renderItemBread = ({item}) =>{return(
    <BreadItems item={item} onSelected={selected} />
  )}
  return (
    <FlatList
    data={Breads}
    renderItem={renderItemBread}
    keyExtractor={item=>{item.id}}
    />

  )
}
