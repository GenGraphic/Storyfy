import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React, {useContext} from 'react';
import Menu from '../Components/Menu';
import ShopItem from '../Components/ShopItem';
import ShopContext from '../ShopContext';

const Shop = () => {
  const { shopItemsList } = useContext(ShopContext);

  

  return (
    <View style={styles.body}>
      <ImageBackground
      source={require('../assets/images/shopScreen.png')}
      style={styles.imageBkg}
      >
        <Menu libraryColor={'#FFF'} shopColor={'#E07A5F'} createScreenColor={'#FFF'} generateScreenColor={'#FFF'}></Menu>

        <View style={styles.shopCont}>
          <Text style={styles.title}>Buy some stories</Text>

          <ScrollView style={styles.itemsList}>
            {shopItemsList.map((item) => {
              return(
                <ShopItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  age={item.age}
                  price={item.price}
                  thumbnail={item.thumbnail}
                />
              )
            })
            }
           
          </ScrollView>
        </View>
        
      </ImageBackground>
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  imageBkg: {
    flex:1,
    flexDirection: 'row',
  },
  title: {
    color: '#FFF',
    fontFamily: 'Hooltwood',
    fontSize: 30,
  },
  shopCont: {
    flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: 20,
  },
  itemsList: {
    flex: 1,
    width: '100%',
    marginTop: 50
  }
})