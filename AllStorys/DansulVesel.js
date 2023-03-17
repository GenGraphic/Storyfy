import { StyleSheet, Text, View, Dimensions, ImageBackground, ScrollView, Image, StatusBar } from 'react-native'
import React from 'react'

const DansulVesel = () => {
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
            source={require('../stories/DansulVesel/images/book-frame.png')}
          />

          <Text style={styles.title}>Dansul Vesel</Text>
          <Text style={styles.bookDescription}>O povestioara amuzanta in care animalele se intrec in diferite probe. Dar Vrand sa se distreze aceasta decid sa faca un concurs de dans. Uneori e mai bine sa ne distram in loc sa ne intrecem.</Text>

          <Image
            style={[styles.bookFrame, {alignSelf: 'flex-end'}]}
              source={require('../stories/DansulVesel/images/book-frame-R.png')}
            />
        </View>

        <View style={styles.middle}></View>
        <ImageBackground
          style={styles.pageRight}
          source={require('../stories/DansulVesel/images/1.png')}
        >
          <Text style={styles.text}>A fost odată ca niciodată, într-o pădure frumoasă și plină de viață, locuiau animale care vorbeau. Printre ele se numărau: Vulpea vicleană, Ursul puternic, Râsul harnic, Veverița agitată, Iepurele iute și Câinele credincios.</Text>
        </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
          style={styles.pageLeft}
          source={require('../stories/DansulVesel/images/2.png')}
        >
          <Text style={styles.text}>Într-o zi, toate animalele s-au adunat în jurul Veveriței agitate, care avea o veste importantă de anunțat.</Text>
          <Text style={styles.text}>Ascultați-mă, toți! A spus Veverița. Am aflat de la un pescăruș că în pădurea noastră va avea loc un concurs de gimnastică. Și ce e mai important, câștigătorul va primi un coș plin cu nuci delicioase!
          La auzul acestor cuvinte, toate animalele s-au entuziasmat și și-au exprimat dorința de a participa la concurs.
          </Text>

        </ImageBackground>

        <View style={styles.middle}></View>

        <View
          style={styles.pageRight}
        >
          <ImageBackground
            style={{flex: 1}}
            source={require('../stories/DansulVesel/images/4.png')}
          >
            <Text style={styles.text}>Eu sunt cel mai puternic dintre toți, a spus Ursul. Sigur voi câștiga!</Text>
          </ImageBackground>
          <ImageBackground
            style={{flex: 1}}
            source={require('../stories/DansulVesel/images/5.png')}
          >
            <Text style={styles.text}>Ei, bine, eu sunt cea mai agilă, a spus Veverița. Eu am o șansă bună!</Text>
          </ImageBackground>  
          
        </View>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <View style={styles.pageLeft}>
        <ImageBackground
            style={{flex: 1}}
            source={require('../stories/DansulVesel/images/6.png')}
          >
            <Text style={styles.text}>Dar cel mai rapid sunt eu, a spus Iepurele. Sunt sigur că voi lua premiul!</Text>
          </ImageBackground>
          <ImageBackground
            style={{flex: 1}}
            source={require('../stories/DansulVesel/images/7.png')}
          >
            <Text style={styles.text}>Ha! Nimeni nu poate să fie mai viclean decât mine, a spus Vulpea. Eu voi găsi cu siguranță o modalitate de a câștiga acest concurs!</Text>
          </ImageBackground>          
        </View>

        <View style={styles.middle}></View>

        <ImageBackground
          style={styles.pageRight}
          source={require('../stories/DansulVesel/images/8.png')}
        >
            <Text style={styles.text}>Și eu voi participa, a spus Câinele credincios. Chiar dacă nu sunt foarte agil, voi face tot ce pot pentru a fi un bun concurent.</Text>
        </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <View style={styles.pageLeft}>
          <ImageBackground
          source={require('../stories/DansulVesel/images/9.png')}
          style={{flex: 1, justifyContent: 'flex-end'}}
          >
            <Text style={styles.text}>Așadar, toate animalele s-au pregătit intensiv pentru concursul de gimnastică. Ursul s-a antrenat să ridice pietre grele.</Text>
          </ImageBackground>
          <ImageBackground
          source={require('../stories/DansulVesel/images/10.png')}
          style={{flex: 1, justifyContent: 'flex-end'}}
          >
            <Text style={styles.text}>Veverița a sărit prin crengi.</Text>
          </ImageBackground>
          
        </View>

        <View style={styles.middle}></View>

        <View style={styles.pageRight}>
          <ImageBackground
          source={require('../stories/DansulVesel/images/11.png')}
          style={{flex: 1, justifyContent: 'flex-end'}}
          >
            <Text style={styles.text}>Iepurele a alergat în jurul copacilor.</Text>
          </ImageBackground>
          <ImageBackground
          source={require('../stories/DansulVesel/images/12.png')}
          style={{flex: 1, justifyContent: 'flex-end'}}
          >
            <Text style={styles.text}>Vulpea și-a exersat planuri vicleane</Text>
          </ImageBackground>
        </View>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
          style={styles.pageLeft}
          source={require('../stories/DansulVesel/images/13.png')}
        >
          <Text style={styles.text}>Iar Câinele credincios a făcut câteva sărituri și s-a jucat cu mingea.</Text>
        </ImageBackground>

        <View style={styles.middle}></View>

        <View style={styles.pageRight}>
          <ImageBackground
          style={{flex: 1, justifyContent: 'center'}}
          source={require('../stories/DansulVesel/images/14.jpg')}
          >
            <Text style={styles.text}>La ziua concursului, toate animalele s-au adunat la locul stabilit și și-au prezentat cele mai bune mișcări. 
            Ursul a ridicat o piatră enormă, Veverița a sărit prin crengi ca o acrobată, Iepurele a alergat atât de repede încât era doar un fulger, Vulpea a făcut un truc inteligent și Câinele credincios a făcut un salt incredibil.
            </Text>
          </ImageBackground>

          
        </View>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
          style={styles.pageLeft}
          source={require('../stories/DansulVesel/images/15.png')}
        >
          <Text style={styles.text}>Dar în timp ce toate animalele își prezentau mișcările lor, Râsul harnic, care tocmai se trezise din somnul de după-amiază, a început să râdă din ce în ce mai tare. Toate animalele s-au oprit și l-au întrebat:</Text>

        </ImageBackground>

        <View style={styles.middle}></View>

        <ImageBackground
          style={styles.pageRight}
          source={require('../stories/DansulVesel/images/16.png')}
        >
          <Text style={styles.text}>Ce se întâmplă, Râsule?
          Ei bine, a răspuns Râsul harnic, îmi pare rău că v-am întrerupt, dar mi se pare amuzant să văd cum toți vă luptați pentru acest coș de nuci delicioase. 
          De ce nu faceți un concurs mai distractiv, unde să ne distrăm cu toții împreună?
          </Text>
          <Text style={styles.text}>La început, toate animalele au fost surprinse de propunerea Râsului harnic, dar au fost și de acord că ar putea fi mai distractiv să participe împreună la ceva. 
          În cele din urmă, au hotărât să organizeze un concurs de dans.
          </Text>
        </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <View style={styles.pageLeft}>
          <ImageBackground
          style={{flex: 1, justifyContent: 'flex-end'}}
          source={require('../stories/DansulVesel/images/17.png')}
          >
            <Text style={styles.text}>Fiecare animal a ales o melodie și și-a creat propriul stil de dans. Ursul a dansat un dans greoi</Text>
          </ImageBackground>

          <ImageBackground
          style={{flex: 1, justifyContent: 'flex-end'}}
          source={require('../stories/DansulVesel/images/18.png')}
          >
            <Text style={styles.text}>Veverița a dansat ca o acrobată</Text>
          </ImageBackground>
        </View>

        <View style={styles.middle}></View>

        <View style={styles.pageLeft}>
          <ImageBackground
          style={{flex: 1, justifyContent: 'flex-end'}}
          source={require('../stories/DansulVesel/images/19.png')}
          >
            <Text style={styles.text}>Iepurele a făcut un dans energic.</Text>
          </ImageBackground>

          <ImageBackground
          style={{flex: 1, justifyContent: 'flex-end'}}
          source={require('../stories/DansulVesel/images/20.png')}
          >
            <Text style={styles.text}>Vulpea a făcut un dans viclean.</Text>
          </ImageBackground>
        </View>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <View style={styles.pageLeft}>
          <ImageBackground
          style={{flex: 1, justifyContent: 'flex-end'}}
          source={require('../stories/DansulVesel/images/21.png')}
          >
            <Text style={styles.text}>Iar Câinele credincios a făcut un dans simplu și amuzant.</Text>
          </ImageBackground>

          <ImageBackground
          style={{flex: 1, justifyContent: 'flex-end'}}
          source={require('../stories/DansulVesel/images/22.png')}
          >
            <Text style={styles.text}>Dar atunci când a venit rândul lui Râsul harnic să danseze, el a început să râdă și să danseze într-un mod amuzant, făcând toate celelalte animale să râdă și să se simtă bine.</Text>
          </ImageBackground>
        </View>

        <View style={styles.middle}></View>

        <ImageBackground
        style={styles.pageRight}
        source={require('../stories/DansulVesel/images/23.png')}
        >
          <Text style={styles.text}>În cele din urmă, toate animalele au fost declarate câștigătoare și au împărțit coșul cu nuci delicioase într-un mod echitabil. Dar cel mai important, au petrecut o zi distractivă împreună și au legat prietenii noi.</Text>
        </ImageBackground>
      </View>

      <View style={[styles.page, {width: windowWidth}]}>
        <ImageBackground
        style={styles.pageRight}
        source={require('../stories/DansulVesel/images/24.png')}
        >
          <Text style={styles.text}>De atunci, animalele au organizat un concurs de dans în fiecare an, unde toți au participat și au dansat împreună. 
          A fost o tradiție care a adus mereu zâmbete și râsete în pădurea lor minunată.
          </Text>
        </ImageBackground>

        <View style={styles.middle}></View>

        <View style={styles.firstPage}>
          <Image
            style={styles.bookFrame}
            source={require('../stories/DansulVesel/images/book-frame.png')}
          />

          <Text style={styles.title}>Sfarsit</Text>

          <Image
            style={[styles.bookFrame, {alignSelf: 'flex-end'}]}
              source={require('../stories/DansulVesel/images/book-frame-R.png')}
            />
        </View>
      </View>

      <StatusBar hidden={true}/>
    </ScrollView>
  )
}

export default DansulVesel

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