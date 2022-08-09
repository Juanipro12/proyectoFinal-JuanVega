import React from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import GridItem from '../component/GridItem'
import { selectCategory } from '../store/actions/category.action'


export const CategoriesScreen = ({navigation}) => {
  const categories = useSelector(state => state.categories.categories)
  const dispach = useDispatch()
  const selectedCategory = (item) =>{
      dispach(selectCategory(item.id))
      navigation.navigate('Products',{
        name:item.name
      })
  }
  const renderGridItem = ({item}) =>{return(
    <GridItem item={item} onSelected={selectedCategory} />
  )}
  return (
    <FlatList
    data={categories}
    renderItem={renderGridItem}
    numColumns={2}
    keyExtractor={item=>{item.id}}/>
  )
} 
