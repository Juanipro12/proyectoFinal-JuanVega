import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CategoriesScreen } from '../screens/CategoriesScreen'
import { CategoryBreadScreen } from '../screens/CategoryBreadScreen'
import { BreadDetailScreen } from '../screens/BreadDetailScreen'
import { Platform } from 'react-native'
import { COLORS } from '../constants/colores'


const Stack= createNativeStackNavigator()


const ShopNavigator = () => {
  return (
    
        <Stack.Navigator initialRouteName='Home'screenOptions={{
          headerStyle:{
            backgroundColor:Platform.OS === 'android' ? COLORS.primary : COLORS.accent
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary
        }} >
            <Stack.Screen name='Home' component={CategoriesScreen} 
            options={{title:'Categorias'} }
            />
            <Stack.Screen name='Products' component={CategoryBreadScreen}
            options={({route})=>({title:route.params.name})
            }
            />
            <Stack.Screen name='Detail' component={BreadDetailScreen}
             options={({route})=>({title:route.params.bread.name})
            }
            />
        </Stack.Navigator>
    
  )
}
export default ShopNavigator