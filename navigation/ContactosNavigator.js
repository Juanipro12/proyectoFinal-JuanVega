import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import ContactoListScreen from "../screens/ContactoListScreen";
import DetalleContacto from "./DetalleContacto";



const PlaceStack = createNativeStackNavigator()

const ContactosNavigator = () =>(
    <PlaceStack.Navigator
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
        name="ContactosLista"
        component={ContactoListScreen}
        options={()=>({
            title:'Contactos',
        })}
        
        />
        <PlaceStack.Screen
        name="Detalle"
        component={DetalleContacto}
        options={()=>({
            title:'Detalle',
        })}
        
        />
    </PlaceStack.Navigator>
)
export default ContactosNavigator