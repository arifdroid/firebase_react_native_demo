/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 // https://github.com/mateusc42/react-native-firebase-mlkit wrapper ml kit 


import { createAppContainer, createStackNavigator } from 'react-navigation';
import React, {Fragment} from 'react';
import {

  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import firebase from 'react-native-firebase';

import Test2Comp from './components/Test2';

import CameraComponent from './components/CameraComponent';
//import console = require('console');

const reffirebase = firebase.firestore().collection('cities').doc('London');

const db = firebase.firestore();

//const reffirebaseCollection = firebase.firestore.collection('cities');

class HomeScreen extends React.Component {
  constructor(){
    super();
    
    this.state={

      population:0,
      cityInput:'zero',
      cityArray:[],
      upthere:'default',

    }
  
  }

  // ------------- start function

  _donwloadThem=()=>{


    firebase.firestore()
    .runTransaction(async transaction => {


        const doc = await transaction.get(reffirebase);


        if(!doc.exists){

          return;
        }

        //if got data, 

        const dataWeUpdate = doc.data().population +1 ;

        

        transaction.update(reffirebase,{

          population:dataWeUpdate,

        });

        this.setState({

            upthere:dataWeUpdate,
        });

        return dataWeUpdate;

    }).then(dataWeUpdate=>{


      console.log('population new '+ dataWeUpdate);

    }).catch(error =>{

      console.log('error catch while transaction =>> '+ error);

    });





  };

  ////  

  _donwloadCollection =()=>{

    // db.collection('cities')
    // .get()

    // db.runTransaction( async object =>{

    //   const datacollection = object.get().


    // })

    db.collection('cities')
    .get().then( object =>{

        object.docs.forEach(docSingleObject=>{

          
        });


    }).catch(error=>{

      console.log('errrrrooor');

      this.setState({

        cityInput:'what nigg '+ error,

      });



    });

  };

  //another test download collection 

  _downloadColv2 = async() =>{

    const snapshot = await firebase.firestore().collection('cities').get().catch(error=>{

      console.log('error got ==>.> '+ error);
    });

    var dataprocessed = snapshot.docs.map(doc=>doc.data());

    console.log('data we received ==.> ' + JSON.stringify(dataprocessed));

    this.setState({

      cityInput:dataprocessed,

    })

  };

  // ------------- end function

  render(){
  return (
   <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
   
    <Text>{this.state.upthere}</Text>
    <View style={{margin:10, width:200}}>
      <Button title='get from firebase' onPress={this._donwloadThem}></Button>
    </View>
    <Text style={{margin:10}}>test</Text>
    <Text>{this.state.cityInput}</Text>
    <View style={{margin:10, width:200}}>
    <Button title='get from firebase' onPress={this._downloadColv2}></Button>
    </View>

    <View style={{margin:10, width:200}}>
    <Button title='Camera' onPress={()=>this.props.navigation.navigate('CameraComponent')}></Button>
    </View>
  
    
   </View>
  );
  };
};


//////setting up navigation 

const RootStack = createStackNavigator(
  {

    Home:HomeScreen,
    Test2Test:Test2Comp,
    CameraComponent:CameraComponent,

  },{

    initialRouteName:'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component{

  render(){
    return(
        <AppContainer/>

    )
  };
};

//////////// ..... >>>>>  ////  stack 

class Test extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(

      <View style={{justifyContent:'center', alignItems:'center'}}>
      
      <Text> this is test component </Text>
      
      </View>

    )
  }
}




/////////////////////

const styles = StyleSheet.create({
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
