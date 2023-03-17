import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react';
import Menu from '../Components/Menu';
import LibraryContext from '../LibraryContext';
import StoryTitle from '../Components/StoryTitle';
import { useNavigation } from '@react-navigation/native';

const UserLibrary = () => {
    const { userStories } = useContext(LibraryContext);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigation = useNavigation();
    let listAnimTimeing = 500


    //the function is called from Sorytiltle ang set the selectedItem the id of the pressed item
    //in Storytitle, if the selected Item id is equal to it's id, the color is changed to orange
    const selectThis = (item) => {
        setSelectedItem(item);
    }

    //i navigate to Reading Space and giving it the id of the story that is pressed
    //in the Reading Space the story with this id is being searched in Library Context and story is beeing rendered
    const NavigateToSelectedStory = () => {

        navigation.navigate('ReadingSpace', {storyID: selectedItem})
    }
    
  return (
    <View style={styles.body}>
      <ImageBackground
      source={require('../assets/images/userLibrary.png')}
      style={styles.imageBkg}
      >
        <Menu libraryColor={'#E07A5F'} shopColor={'#FFF'} createScreenColor={'#FFF'} generateScreenColor={'#FFF'}></Menu>
        
        <View style={styles.libraryCont}> 
            <Text style={styles.title}>Wow, have you read all of them?</Text>

            <ScrollView style={styles.storiesList}>
                {userStories.map((story) => {
                    return(
                        <StoryTitle 
                            id={story.id} 
                            key={story.id} 
                            storyTitle={story.name}
                            selectThis={selectThis}
                            selectedItem={selectedItem}
                            animationIncrement={listAnimTimeing = listAnimTimeing + 500}
                            story={story.story}
                        >
                        </StoryTitle>
                    )  
                })

                }
            </ScrollView>

            <TouchableOpacity style={styles.readBtn} onPress={NavigateToSelectedStory}>
                <Text style={styles.txtBtn}>Read</Text>
                <Image 
                source={require('../assets/images/icons/right-arrow.png')}
                style={styles.icon}
                />
            </TouchableOpacity>
        </View>

        

      </ImageBackground>
    </View>
  )
}

export default UserLibrary

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    imageBkg: {
        flex:1,
        flexDirection: 'row'
    },
    libraryCont: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: 20,
    },
    title: {
        color: '#FFF',
        fontFamily: 'Hooltwood',
        fontSize: 30
    },
    icon: {
        width: 50,
        height: 50
    },
    readBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    txtBtn: {
        color: '#FFF',
        fontFamily: 'Hooltwood',
        fontSize: 25
    },
    storiesList: {
        flex: 1,
        width: '100%',
        marginTop: 50
    }

}) 