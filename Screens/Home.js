import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react';
import Menu from '../Components/Menu';

const Home = () => {

  return (
    <View style={styles.body}>
      <ImageBackground
      source={require('../assets/images/homeScreen.png')}
      style={styles.imageBkg}
      >
        <Menu libraryColor={'#FFF'} shopColor={'#FFF'} createScreenColor={'#FFF'} generateScreenColor={'#FFF'}></Menu>

        <View style={styles.textCont}> 
            <Text style={styles.title}>Storyfy</Text>
            <Text style={styles.description}>
                StoryGenius is an app that offers personalized stories for children. The app uses AI tools to generate unique stories based on the child's interests and reading level. The stories are interactive, and the child can make choices that influence the outcome. The app includes illustrations, animations, and sound effects to bring the story to life and make it more engaging.
            </Text>
        </View>
        
      </ImageBackground>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    imageBkg: {
        flex:1,
        flexDirection: 'row'
    },
    textCont: {
        marginBottom: '10%',
        alignSelf: 'flex-end',
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 70,
        fontFamily: 'Hooltwood',
        color: '#FFF',
    },
    description: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Hooltwood',
    }

})