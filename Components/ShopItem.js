import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useContext} from 'react';
import InsetShadow from 'react-native-inset-shadow';
import LibraryContext from '../LibraryContext';


const ShopItem = ({title, description, age, price, thumbnail, story}) => {
    const { addStory } = useContext(LibraryContext)

  return (
    <InsetShadow style={styles.shadow}>
      <View style={styles.body}>
        <View style={styles.infoCont}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.age}>{age} years</Text>
        </View>

        <TouchableOpacity 
        style={styles.buyBtn}
        onPress={() => addStory(title, description, price, age, thumbnail, story)}
        >
            <Text style={styles.buyTxt}>BUY</Text>
            <Text style={styles.price}>{price}€</Text>
        </TouchableOpacity>

        <Image
            style={styles.thumbnail}
            source={thumbnail}
        />
      </View>
    </InsetShadow>
  )
}

export default ShopItem

const styles = StyleSheet.create({
    shadow: {
        borderRadius: 5,
    },
    body: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        flexDirection: 'row',
        borderRadius: 5
    },
    thumbnail: {    
        height: '100%',
        flex:1,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    infoCont: {
        flex: 1,
        padding: 5
    },
    title: {
        fontSize: 20,
        fontFamily: 'Hooltwood',
        color: '#3D405B', //licht black
    },
    description: {
        fontSize: 14,
        fontFamily: 'HennyPenny',
        opacity: 0.7
    },
    age: {
        fontFamily: 'Hooltwood',
        color: '#3D405B',
        fontSize: 12
    },
    buyBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#E07A5F',
        shadowColor: 'black',
        shadowOffset: {width: -5, height: 0},
        shadowOpacity: 0.2
    },
    buyTxt: {
        color: '#FFF',
        fontFamily: 'Hooltwood',
    },
    price: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'Hooltwood',
        fontSize: 12
    }
})