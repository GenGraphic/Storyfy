import { StyleSheet, View, ImageBackground, StatusBar, Text, Animated } from 'react-native'
import React, {useEffect, useState, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';



const SplashScreenApp = () => {
  const navigation = useNavigation();
  const [textSize] = useState(new Animated.Value(70));

  
  useEffect(() => {
    Animated.timing(textSize, {
      toValue: 160,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      navigation.navigate('Home')
    }, 1000)
  }, [textSize]);


  const animatedStyle = {
    fontSize: textSize,
    color: '#FFF',
    fontFamily: 'Hooltwood',
    position: 'absolute',
  };

  return (
    <View style={styles.body}>
      <StatusBar></StatusBar>
      <ImageBackground
      style={styles.imageBkg} 
      resizeMode='cover'
      source={require('../assets/images/splashScreen.png')}
      >
        <Animated.Text style={animatedStyle}>Storyfy</Animated.Text>

      </ImageBackground>
    </View>
  )
}

export default SplashScreenApp

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    imageBkg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
})