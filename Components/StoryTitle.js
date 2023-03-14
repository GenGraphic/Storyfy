import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import React, {useRef, useEffect} from 'react';

const StoryTitle = ({storyTitle, id, selectThis, selectedItem, animationIncrement}) => {
  const translation = useRef(new Animated.Value(500)).current;
  
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(translation, {
        toValue: 0,
        useNativeDriver: true
      }).start();
    },animationIncrement)
    
  }, [])

  return (
    <Animated.View style={{transform: [{translateX: translation}]}}>
      <TouchableOpacity style={styles.body} onPress={() => selectThis(id)}> 
        <Text style={[styles.storyTitle, id === selectedItem && {color: '#E07A5F'}]}>{storyTitle}</Text>
        <View style={styles.dotsCont}>
          <Text numberOfLines={1} style={[styles.storyTitle, id === selectedItem && {color: '#E07A5F'}]}>......................................................................................................................................</Text>
        </View>
        <Text style={[styles.storyTitle, id === selectedItem && {color: '#E07A5F'}]}>{id}</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default StoryTitle

const styles = StyleSheet.create({
    body: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:5
    },
    storyTitle: {
        fontFamily: 'HennyPenny',
        fontSize: 30,
        color: '#FFF'
    },
    dotsCont: {
        flex: 1,
        flexWrap: 'nowrap',
    }
})