import { StyleSheet, View, ImageBackground, StatusBar, Text } from 'react-native'
import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';



const SplashScreenApp = () => {
  const navigation = useNavigation();


  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000)
  }, [])

  return (
    <View style={styles.body}>
      <StatusBar></StatusBar>
      <ImageBackground
      style={styles.imageBkg} 
      resizeMode='cover'
      source={require('../assets/images/splashScreen.png')}
      >
        
        <Text style={styles.title}>Storyfy</Text>
        
      </ImageBackground>
    </View>
  )
}

export default SplashScreenApp

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    imageBkg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 20
    },
    title: {
      fontSize: 70,
      fontFamily: 'Hooltwood',
      color: '#FFF'
    }
})