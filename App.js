import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ShopNavigator from './navigation/ShopNavigator';

export default function App() {
  const [loaded]= useFonts({
    Oswald:require('./assets/fonts/Oswald-Bold.ttf')
  })
  if(!loaded) return <AppLoading/>
  return (
    <>
    <ShopNavigator/>
    </>
  );
}

