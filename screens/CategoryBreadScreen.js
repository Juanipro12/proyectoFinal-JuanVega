import React from 'react'
import { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import BreadItems from '../component/BreadItems'
import { filteredBread, selectBread } from '../store/actions/bread.action'

export const CategoryBreadScreen = ({navigation,route}) => {
  const dispach = useDispatch()
  const categoryBreads = useSelector( store => store.breads.filterBread )
  const category = useSelector( store => store.categories.selected )
  useEffect(()=>{
    dispach(filteredBread(category.id))
  },[])
  const selected = (item) =>{
    dispach(selectBread(item.id))
    navigation.navigate('Detail',{
      bread:item.name
    })
  }
  const renderItemBread = ({item}) =>{return(
    <BreadItems item={item} onSelected={selected} />
  )}
  return (
    <FlatList
    data={categoryBreads}
    renderItem={renderItemBread}
    keyExtractor={item=>{item.id}}
    />

  )
}
