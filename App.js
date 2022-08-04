import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation';

export default function App() {
  const [loaded]= useFonts({
    Oswald:require('./assets/fonts/Oswald-Bold.ttf')
  })
  if(!loaded) return <AppLoading/>
  return (
    <>
      <MainNavigator/>
    </>
  );
}

