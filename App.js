import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store';
import { init } from './db';


init()
  .then(()=>console.log('inicia data'))
  .catch((err)=>console.log(err))

  
export default function App() {
  const [loaded]= useFonts({
    Oswald:require('./assets/fonts/Oswald-Bold.ttf')
  })
  if(!loaded) return <AppLoading/>
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

