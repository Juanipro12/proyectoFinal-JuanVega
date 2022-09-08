import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authscreen from "../screens/Authscreen";



const Stack = createNativeStackNavigator()

const AuthNavigator = () => (
    <Stack.Navigator
    initialRouteName="Auth"
    screenOptions={{headerShown:false}}
    >
        <Stack.Screen  name='Auth' component={Authscreen}/>
    </Stack.Navigator>
)
export default AuthNavigator