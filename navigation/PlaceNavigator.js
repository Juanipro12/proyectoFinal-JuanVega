import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../constants/colores";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import Ionicons from '@expo/vector-icons/Ionicons' 
import PlaceListScreen from "../screens/PlaceListScreen";



const PlaceStack = createNativeStackNavigator()

const PlaceNavigator = () =>(
    <PlaceStack.Navigator
        initialRoute="Place"
        screenOptions={{
            headerStyle:{
                backgroundColor:Platform.OS === 'android'?'black':''
                        },
            headerTintColor:Platform.OS === 'android'?'white':'black',
            headerTitleStyle:{
                fontWeight:'bold'
            }
        }}
    >
        <PlaceStack.Screen
        name="Direcciones"
        component={PlaceListScreen}
        options={({navigation})=>({
            title:'Direcciones',
            headerRight: ()=>(
                <TouchableOpacity onPress={()=> navigation.navigate('Nuevo')}>
                    <Ionicons
                        name='md-add'
                        color={Platform.OS === 'android'?'white':'black'}
                        size={24}
                        />
                </TouchableOpacity>
            )
        })}
        />
         <PlaceStack.Screen
        name="Nuevo"
        component={NewPlaceScreen}
        options={({navigation})=>({
            title:'Direcciones',
            headerRight: ()=>(
                <TouchableOpacity onPress={()=> navigation.navigate('Nuevo')}>
                    <Ionicons
                        name='md-add'
                        color={Platform.OS === 'android'?'white':COLORS.DARK}
                        />
                </TouchableOpacity>
            )
        })}
        />

    </PlaceStack.Navigator>
)
export default PlaceNavigator