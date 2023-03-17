import React, {useCallback} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { LibraryProvider } from './LibraryContext';
import { ShopProvider } from './ShopContext';
import * as SplashScreen from 'expo-splash-screen';



//Screens
import SplashScreenApp from './Screens/SplashScreenApp';
import Home from './Screens/Home';
import UserLibrary from './Screens/UserLibrary';
import Shop from './Screens/Shop';
import ReadingSpace from './Screens/ReadingSpace';
import UserProfile from './Screens/UserProfile';

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Hooltwood': require('./assets/Holtwood_One_SC/HoltwoodOneSC-Regular.ttf'),
    'HennyPenny': require('./assets/Henny-Penny/HennyPenny-Regular.ttf')
  });

  //wait for the fonst to load
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <ShopProvider>
      <LibraryProvider>
        <NavigationContainer onReady={onLayoutRootView}> 
          <Stack.Navigator>
            <Stack.Screen name="SplashScreen" options={{headerShown: false, gestureEnabled: false}} component={SplashScreenApp}/>
            <Stack.Screen name="Home" options={{headerShown: false, gestureEnabled: false}} component={Home}/>
            <Stack.Screen name="UserLibrary" options={{headerShown: false, gestureEnabled: false}} component={UserLibrary}/>
            <Stack.Screen name="Shop" options={{headerShown: false, gestureEnabled: false}} component={Shop}/>
            <Stack.Screen name="ReadingSpace" options={{headerShown: false, gestureEnabled: false}} component={ReadingSpace}/>
            <Stack.Screen name="UserProfile" options={{headerShown: false, gestureEnabled: false}} component={UserProfile}/>
          </Stack.Navigator>
        </NavigationContainer>
      </LibraryProvider>
    </ShopProvider>
  );
}

