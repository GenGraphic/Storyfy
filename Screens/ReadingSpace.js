import { StyleSheet, View, TouchableOpacity, Text} from 'react-native'
import React, {useContext} from 'react';
import LibraryContext from '../LibraryContext';
import { useNavigation } from '@react-navigation/native';


const ReadingSpace = ({route, navigation}) => {
  const {userStories} = useContext(LibraryContext);
  const { storyID } = route.params

  //this is the reading space. 
  //this screen is getting the id of the pressed story in UserLibrary screen and 
  //hier this id is searched and render the story from LibraryContext  
  return (
    <View style={styles.page}>
      <TouchableOpacity 
      style={styles.backBtn}
      onPress={() => navigation.goBack()}>
        <Text style={styles.textBack}>Back</Text>
      </TouchableOpacity>
      {
        userStories.find(elm => elm.id === storyID).story
      }
    </View>
  )
}

export default ReadingSpace

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#C4C4C4',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center'
  },
  backBtn: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 2,
    backgroundColor: '#E07A5F',
    padding: 5,
    borderRadius: 5
  },
  textBack: {
    fontFamily: 'Hooltwood',
    color: '#FFF',
  }
})