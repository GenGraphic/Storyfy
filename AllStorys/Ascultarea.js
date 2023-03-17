import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, StatusBar, Image } from 'react-native'
import React from 'react';

const Ascultarea = () => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView 
      indicatorStyle='false'
      horizontal={true}
      snapToInterval={Dimensions.get('screen').width}
      decelerationRate='fast'
    >
      <View style={[styles.page, {width: windowWidth}]}>
        <View style={styles.firstPage}>
          <Image
            style={styles.bookFrame}
            source={require('../stories/Ascultarea/images/book-frame.png')}
          />
          <Text style={styles.title}>Invata ascultarea</Text>
          <Text style={styles.bookDescription}>O scurta povestioara care subliniaza importanta ascultarii de parinti. Si cum ascultand de parinti aduce mereu lucruri bune</Text>

          <Image
            style={[styles.bookFrame, {alignSelf: 'flex-end'}]}
              source={require('../stories/Ascultarea/images/book-frame-R.png')}
            />
        </View>

        <View style={styles.middle}></View>
        <ImageBackground
          style={styles.pageRight}
          source={require('../stories/Ascultarea/images/1.png')}
        >
          <Text style={styles.text}>Intr-un sat linistit, traia un copil alaturi de familia sa. Erau oameni saraci, dar locuiau intr-o casa primitoare inconjurata de campuri intinse si paduri dese.</Text>
        </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
          style={styles.pageLeft}
          source={require('../stories/Ascultarea/images/2.png')}
        >
          <Text style={styles.text}>In curte, copilul avea multe animale dragi lui, pe care le ingrijea cu multa atentie.</Text>

        </ImageBackground>

        <View style={styles.middle}></View>

        <ImageBackground
          style={styles.pageRight}
          source={require('../stories/Ascultarea/images/3.png')}
        >
            <Text style={styles.text}>Insa, in camera lui era intotdeauna dezordine. Jucarii si haine erau aruncate peste tot, astfel ca nici macar patul sau nu putea fi vazut.</Text>
        </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
            style={styles.pageLeft}
            source={require('../stories/Ascultarea/images/4.png')}
          >
            <Text style={styles.text}>Parintii copilului erau oameni buni si iubitori, iar mama sa era mereu gata sa ii ofere sfaturi bune si intelepte. Era o femeie frumoasa si blanda, cu ochi calzi si par lung si castaniu.</Text>
          </ImageBackground>

          <View style={styles.middle}></View>

          <ImageBackground
            style={styles.pageRight}
            source={require('../stories/Ascultarea/images/5.png')}
          >
              <Text style={styles.text}>Copilul isi dorea o noua jucarie pe care ceilalti copii din sat o aveau, insa avea nevoie de bani pentru a o cumpara.</Text>
          </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
            style={styles.pageLeft}
            source={require('../stories/Ascultarea/images/6.png')}
          >
            <Text style={styles.text}>S-a hotarat sa ceara bani de la mama sa, insa aceasta i-a spus ca va primi banii doar daca isi va face ordine in camera. Copilul nu a ascultat-o si a plecat suparat.</Text>
          </ImageBackground>

          <View style={styles.middle}></View>

          <ImageBackground
            style={styles.pageRight}
            source={require('../stories/Ascultarea/images/7.png')}
          >
              <Text style={styles.text}>A doua zi, copilul s-a dus din nou la mama sa sa ii ceara bani. Mama l-a intrebat daca si-a facut curat in camera, iar copilul a mintit spunand ca da. Mama, dezamagita, i-a spus ca nu va primi banii daca nu isi va face ordine in camera.</Text>
          </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
            style={styles.pageLeft}
            source={require('../stories/Ascultarea/images/8.png')}
          >
            <Text style={styles.text}>Cu inima franta si fara alta solutie, copilul s-a apucat sa faca curat in camera.</Text>
          </ImageBackground>

          <View style={styles.middle}></View>

          <ImageBackground
            style={styles.pageRight}
            source={require('../stories/Ascultarea/images/9.png')}
          >
              <Text style={styles.text}>Sub ultima gramada de haine aruncate, a gasit exact suma de bani de care avea nevoie. Acesta si-a dat seama ca mama sa pusese banii acolo special, pentru a-l invata o lectie.</Text>
          </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
            style={styles.pageLeft}
            source={require('../stories/Ascultarea/images/10.png')}
          >
            <Text style={styles.text}>Plin de uimire si recunostinta, copilul s-a dus la mama sa si a strans-o in brate.</Text>
            <Text style={styles.text}>-Multumesc, mama! Am invatat ca trebuie sa ascult de sfaturile tale si ca trebuie sa imi fac ordine in camera mea. Promit sa fiu mai ascultator de acum inainte!</Text>

          </ImageBackground>

          <View style={styles.middle}></View>

          <ImageBackground
            style={styles.pageRight}
            source={require('../stories/Ascultarea/images/11.png')}
          >
            <View>
              <Text style={styles.text}>Mama sa l-a strans la piept si i-a zambit cu dragoste.</Text>
              <Text style={styles.text}>-Ma bucur ca ai invatat aceasta lectie, dragul meu. Sunt mandra de tine si sunt sigura ca vei deveni un baiat minunat!</Text>
            </View>

              <Text style={styles.text}>Si asa, copilul a invatat cat de importanta este ascultarea de parinti si cat de mult il iubesc acestia.</Text>
          </ImageBackground>
      </View>

      <StatusBar hidden={true}/>
    </ScrollView>
  )
}

export default Ascultarea

const styles = StyleSheet.create({
   page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width
   },
   title: {
    fontFamily: 'Hooltwood',
    fontSize: 25,
    textAlign: 'center'
   },
   middle: {
    backgroundColor: '#313131',
    height: '100%',
    width: 25,
   },
   pageLeft: {
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
   },
   pageRight: {
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end'
   },
   bookFrame: {
    height: 300,
    width: 300
   },
   firstPage: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    padding: 10
   },
   bookDescription: {
    width:'80%',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'HennyPenny',
    fontSize: 20
   },
   text: {
    fontFamily: 'HennyPenny',
    color: '#FFF',
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    padding: 5,
    fontSize: 18,
    marginBottom: 50,
   }
})