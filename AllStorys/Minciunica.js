import { StyleSheet, Text, View, Dimensions, ImageBackground, ScrollView, Image, StatusBar } from 'react-native'
import React from 'react'

const Minciunica = () => {
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
            source={require('../stories/Minciuna/images/book-frame.png')}
          />

          <Text style={styles.title}>Minciunica</Text>
          <Text style={styles.bookDescription}>O scurta povestioara din care invatam ca minciuna aduce consecinte grave. Vedem cum miniuna spusa chair si in gluma aduce probleme.</Text>

          <Image
            style={[styles.bookFrame, {alignSelf: 'flex-end'}]}
              source={require('../stories/Minciuna/images/book-frame-R.png')}
            />
        </View>

        <View style={styles.middle}></View>
        <ImageBackground
          style={styles.pageRight}
          source={require('../stories/Minciuna/images/1.png')}
        >
          <Text style={styles.text}>Felix era un baiat jucaus si mereu pus pe sotii, cu o imaginatie bogata. El avea 11 ani si era cel mai mic dintre cei 5 frati ai familiei. Locuiau intr-o casa mare si spatioasa, inconjurata de gradini si livezi. Felix era mandru de stana de oi pe care o ingrijea alaturi de fratii sai.</Text>
        </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
          style={styles.pageLeft}
          source={require('../stories/Minciuna/images/2.png')}
        >
          <Text style={styles.text}>Intr-o zi, cand a venit randul lui sa aiba grija de oi, Felix a vrut sa faca o gluma fratilor sai si sa se distreze.</Text>

        </ImageBackground>

        <View style={styles.middle}></View>

        <ImageBackground
          style={styles.pageRight}
          source={require('../stories/Minciuna/images/3.png')}
        >
            <Text style={styles.text}>A alergat catre ei, mintindu-i ca un lup ataca stana de oi.</Text>
        </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
            style={styles.pageLeft}
            source={require('../stories/Minciuna/images/4.png')}
          >
            <View>
              <Text style={styles.text}>Felix: Veniti, veniti! Un lup ataca stana de oi!</Text>
              <Text style={styles.text}>Fratele cel mare: Ce? Un lup? Sa mergem sa vedem!</Text>
              <Text style={styles.text}>Fratele mijlociu: Nu cred ca e un lup, Felix glumeste mereu cu noi.</Text>
              <Text style={styles.text}>Fratele cel mare: Hai sa mergem sa vedem cu ochii nostri.</Text>
            </View>
            <Text style={styles.text}>Fratii sai s-au speriat si au inceput sa alearge catre stana, ingrijorati pentru siguranta animalelor.</Text>
          
          </ImageBackground>

          <View style={styles.middle}></View>

          <ImageBackground
            style={styles.pageRight}
            source={require('../stories/Minciuna/images/5.png')}
          >
              <Text style={styles.text}>Cand au ajuns acolo, nu era niciun lup. Felix s-a distrat copios si a ramas fascinat de reactia fratilor sai.</Text>
              <Text style={styles.text}>Fratele cel mijlociu: Unde e lupul?</Text>
              <Text style={styles.text}>Felix: Ahahaha! V-am pacalit! Nu era niciun lup!</Text>
              <Text style={styles.text}>Fratele cel mare: Felix, nu mai glumi cu noi asa. E periculos daca intr-o zi chiar vine un lup.</Text>
              
          </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
            style={styles.pageLeft}
            source={require('../stories/Minciuna/images/6.png')}
          >
            <Text style={styles.text}>A doua zi, Felix a facut din nou aceeasi gluma, spunandu-le ca un urs ataca stana de oi. </Text>
          </ImageBackground>

          <View style={styles.middle}></View>

          <ImageBackground
            style={styles.pageRight}
            source={require('../stories/Minciuna/images/7.png')}
          >
              <Text style={styles.text}>Felix: Ajutor! Un urs vine sa atace stana de oi!</Text>
              <Text style={styles.text}>Fratele mijlociu: Ce? Un urs? Hai sa mergem repede!</Text>
              <Text style={styles.text}>Fratele cel mare: Nu cred ca Felix spune adevarul. Nu se poate sa fie un urs aici.</Text>
              <Text style={styles.text}>Fratele mijlociu: Dar daca chiar e un urs? Hai sa vedem ce se intampla.</Text>
              <Text style={styles.text}>Si de aceasta data, fratii sai au alergat spre stana pentru a se asigura ca totul este in regula.</Text>
          </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
            style={styles.pageLeft}
            source={require('../stories/Minciuna/images/8.png')}
          >
            <Text style={styles.text}>Dar, cand au ajuns acolo, nu era niciun urs. Felix a ras si a glumit din nou, bucurandu-se de reactia fraților săi.</Text>
            <Text style={styles.text}>Fratele mijlociu: Unde e ursul, Felix?</Text>
            <Text style={styles.text}>Felix: Haha! V-am facut din nou o farsa.</Text>
            <Text style={styles.text}>Fratele cel mare: Felix, nu mai glumi asa. Daca o sa mai minti, o sa ai probleme.</Text>
          </ImageBackground>

          <View style={styles.middle}></View>

          <ImageBackground
            style={styles.pageRight}
            source={require('../stories/Minciuna/images/9.png')}
          >
              <Text style={styles.text}>Insa a treia zi, in stana de oi chiar a aparut un lup adevarat, care a atacat animalele.</Text>
          </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
            style={styles.pageLeft}
            source={require('../stories/Minciuna/images/10.png')}
          >
            <Text style={styles.text}>Felix a fugit panicat la fratii sai, cerandu-le ajutorul. Dar fratii lui nu l-au mai crezut, considerand ca este doar o alta gluma.</Text>

          </ImageBackground>

          <View style={styles.middle}></View>

          <ImageBackground
            style={styles.pageRight}
            source={require('../stories/Minciuna/images/11.png')}
          >
            <Text style={styles.text}>Felix: Fratilor, intr-adevar, vine un lup! E adevarat!</Text>
            <Text style={styles.text}>Fratele mijlociu: Ai mai glumit cu noi si acum vrei sa ne pacalesti din nou?</Text>
            <Text style={styles.text}>Felix: Nu, nu, chiar e adevarat!</Text>
            <Text style={styles.text}>Fratele cel mare: Nu te mai credem, Felix. Daca in stana e un lup, du-te tu sa il alungi.</Text>
            <Text style={styles.text}>Felix s-a intors la stana grabit si a inceput sa alunge lupul.</Text>
          </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
            style={styles.pageLeft}
            source={require('../stories/Minciuna/images/12.png')}
          >
            <Text style={styles.text}>In timpul luptei, Felix a fost zgariat pe fata de catre lup. Din fericire cainele stanei a aparut si l-a salvat pe Felix de lup.</Text>

          </ImageBackground>

          <View style={styles.middle}></View>

          <ImageBackground
            style={styles.pageRight}
            source={require('../stories/Minciuna/images/13.jpg')}
          >
            <Text style={styles.text}>Felix s-a dus la fratii sai plangand, cerandu-si iertare ca a mințit si promitand sa nu mai faca niciodata astfel de glume.</Text>
            <Text style={styles.text}>Felix: Ma doare obrazul, ma simt atat de rau. Fratilor, imi pare atat de rau ca v-am mintit mereu. Am invatat o lectie importanta astazi.</Text>
            <Text style={styles.text}> Fratii sai l-au iertat si l-au consolat, spunandu-i ca e bine ca a invatat din greseala sa si ca e important sa spui intotdeauna adevarul.</Text>
          </ImageBackground>
      </View>

      <StatusBar hidden={true}/>
    </ScrollView>
  )
}

export default Minciunica

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
    fontSize: 16,
   }
})