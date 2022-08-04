import React from 'react'
import { FlatList } from 'react-native'
import GridItem from '../component/GridItem'
import { CATEGORIE } from '../data/categories'


export const CategoriesScreen = ({navigation}) => {

  const selectedCategory = (item) =>{
      navigation.navigate('Products',{
        categoryID: item.id,
        name:item.name
      })
  }
  const renderGridItem = ({item}) =>{return(
    <GridItem item={item} onSelected={selectedCategory} />
  )}
  return (
    <FlatList
    data={CATEGORIE}
    renderItem={renderGridItem}
    numColumns={2}
    keyExtractor={item=>{item.id}}/>
  )
} 
