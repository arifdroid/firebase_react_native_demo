/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// https://github.com/mateusc42/react-native-firebase-mlkit wrapper ml kit 


import { createAppContainer, createStackNavigator } from 'react-navigation';
import React, { Fragment } from 'react';
import {

  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,


} from 'react-native';

import { Fonts } from './src/utils/Font';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,

} from 'react-native/Libraries/NewAppScreen';

import LinearGradient from 'react-native-linear-gradient'

import firebase from 'react-native-firebase';

//import Test2Comp from './components/Test2';

//import CameraComponent from './components/CameraComponent';

//import TestCamera from './component test/TestCamera';

//import Final_TestCamera from './component test/Final_TestCamera';

import Camera_Design from './component test/Camera_Design';


//const httpsCallable = firebase.functions().httpsCallable('testCloudFunction');

const httpsCallable = firebase.functions().httpsCallable('myFooBarFn');

//import console = require('console');

const reffirebase = firebase.firestore().collection('cities').doc('London');

const db = firebase.firestore();

//const reffirebaseCollection = firebase.firestore.collection('cities');

class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {

      population: 0,
      cityInput: 'zero',
      cityArray: [],
      upthere: 'default',
      text: 'none',
      urlReceived: 'not yet',

    }

  }

  // ------------- start function

  _donwloadThem = () => {


    firebase.firestore()
      .runTransaction(async transaction => {


        const doc = await transaction.get(reffirebase);


        if (!doc.exists) {

          return;
        }

        //if got data, 

        const dataWeUpdate = doc.data().population + 1;



        transaction.update(reffirebase, {

          population: dataWeUpdate,

        });

        this.setState({

          upthere: dataWeUpdate,
        });

        return dataWeUpdate;

      }).then(dataWeUpdate => {


        console.log('population new ' + dataWeUpdate);

      }).catch(error => {

        console.log('error catch while transaction =>> ' + error);

      });





  };

  ////  

  _donwloadCollection = () => {

    // db.collection('cities')
    // .get()

    // db.runTransaction( async object =>{

    //   const datacollection = object.get().


    // })

    db.collection('cities')
      .get().then(object => {

        object.docs.forEach(docSingleObject => {


        });


      }).catch(error => {

        console.log('errrrrooor');

        this.setState({

          cityInput: 'what nigg ' + error,

        });



      });

  };

  //another test download collection 

  _downloadColv2 = async () => {

    const snapshot = await firebase.firestore().collection('cities').get().catch(error => {

      console.log('error got ==>.> ' + error);
    });

    var dataprocessed = snapshot.docs.map(doc => doc.data());

    console.log('data we received ==.> ' + JSON.stringify(dataprocessed));

    this.setState({

      cityInput: dataprocessed,

    })

  };

  // server function 

  _getURLFromServer = () => {

    console.log('checkk test')

    this.setState({

      urlReceived: 'working'
    })

    //fetch('https://us-central1-febwhatsapp.cloudfunctions.net/helloWorld', )
    fetch('https://us-central1-febtestwhatsapp.cloudfunctions.net/helloWorld_2', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      'body': JSON.stringify({

        'data': 'hey bro'

      })
    }
    ).then((datathis) => datathis.json())
      .then((datathis2) => {



        try {

          console.log('HERE 56 ', datathis2)

          this.setState({

            urlReceived: datathis2.data
          })

        } catch{


        }

        try {

          console.log('HERE 55 ', JSON.stringify(datathis2))

        } catch{


        }




      }).catch(e => {


        console.log('HERE 3')

        console.log(e.code);
        console.log(e.message);
        console.log(e.details.foo);



      })

  };

  /////////////// finalise url test 


  _testPuppeteer_2 = () => {


    //fetch('https://us-central1-febwhatsapp.cloudfunctions.net/helloWorld', )
    fetch('https://us-central1-febtestwhatsapp.cloudfunctions.net/testPuppeteer_2', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      'body': JSON.stringify({

        'data': 'skincarisma the ordinary resveratrol-3%-+-ferulic-acid-3% ingredient_list'

      })
    }
    ).then((datathis) => datathis.json())
      .then((datathis2) => {

        try {

          console.log('HERE 56 ', datathis2)

          this.setState({


            urlReceived: datathis2.data


          })

        } catch{


        }

        try {

          console.log('HERE 55 ', JSON.stringify(datathis2))

        } catch{


        }




      }).catch(e => {


        console.log('HERE 3')

        console.log(e.code);
        console.log(e.message);
        console.log(e.details.foo);



      })






  } /////////// ..> end puppeteer_2 cloud function


  // ------------- end function

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

        <ImageBackground
          source={require('./img/background_final.png')}
          style={styles.containerImage}

        ></ImageBackground>

        <Text style={{ alignSelf: 'center', fontFamily: Fonts.LobsterFont, position: 'absolute', top: "6%", fontSize: 50, color: '#F58181' }}> Checker App </Text>

        <View style={{ margin: 10, width: "76%", position: 'absolute', bottom: 50 }}>
          <TouchableOpacity

            onPress={() => this.props.navigation.navigate('Camera_Design')}>
            <LinearGradient
              //locations={[0.3, 0,]}
              style={styles.button_gradient}
              colors={['#FF3E66', '#F696AA', '#F0D5DB']} >

              
              <Text style={{ color: 'white', letterSpacing:1.7 ,flex:4, paddingLeft:15}}>CHECK YOUR SKINCARE</Text>
              <Image style={{resizeMode:'contain', flex:1, paddingRight:15}} source={require('./img/cam_final.png')}></Image> 
            </LinearGradient>
          </TouchableOpacity>



        </View>

        {/*
    <View style={{width:'80%', marginHorizontal:20}}>

      <TextInput style={{backgroundColor:'#ddf7ff',}}
      onChangeText={text => this.setState({ text:text})}
      value={this.state.text}
      />

      <Text style={{margin:5}}>Url : {this.state.urlReceived}</Text>

    </View>

    <View style={{margin:10, width:200}}>
    <Button title='Cloud Function' onPress={()=>{this._testPuppeteer_2();}}></Button>
    </View>
    */}


      </View>
    );
  };
};

// var datahere = [{key:'a'},{key:'b'}, {key:'c'}, {key:'d'}, {key:'e'}, {key:'f'}, {key:'g'}, {key:'h'}, {key:'i'}, {key:'j'}, {key:'k'}, {key:'l'}, {key:'m'}, {key:'n'}, {key:'o'}, {key:'p'},
//                 {key:'q'},{key:'r'},{key:'s'}, {key:'t'},  {key:'u'}, {key:'v'}, {key:'w'}, {key:'x'}, {key:'y'}, {key:'z'}];

//////setting up navigation 

const RootStack = createStackNavigator(
  {

    Home: HomeScreen,
    // Test2Test:Test2Comp,
    // CameraComponent:CameraComponent,
    // Final_TestCamera:Final_TestCamera,
    Camera_Design: Camera_Design,
    // TestCamera:{

    //   screen: TestCamera,
    //   // headerMode:'none',
    //   // navigationOptions:  {
    //   //   headerLeft: null,
    //   //   headerVisible: false,
    //   // }


    // },

  }, {

  initialRouteName: 'Home',
  headerBackTitleVisible: false,
  headerMode: 'none'



},



);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

  render() {
    return (
      <AppContainer />

    )
  };
};

//////////// ..... >>>>>  ////  stack 

class Test extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>

        <Text> this is test component </Text>

      </View>

    )
  }
}




/////////////////////

const styles = StyleSheet.create({

  button_gradient: {
    flex: 1, flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center', width: null, height: 51, marginTop: 5, borderRadius: 8,
    elevation: 2.3, shadowOffset: { width: -5, height: -5 }, shadowColor: '#FF2D58', shadowOpacity: 0.2,
    
  },

  capture_opacity: {
    alignSelf: 'flex-end',
    //backgroundColor: 'rgba(245, 198, 198, 0.6)',
    borderRadius: 1,
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    elevation: 1,

  },
  containerImage: {

    flex: 1,
    width: '100%',
    height: '100%',

  },

  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

//export default App;
