/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
//import console = require('console');

const reffirebase = firebase.firestore().collection('cities').doc('London');

class App extends React.Component {
  constructor(){
    super();
    
    this.setState={

      population:0,

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

        return dataWeUpdate;

    }).then(dataWeUpdate=>{


      console.log('population new '+ dataWeUpdate);

    }).catch(error =>{

      console.log('error catch while transaction =>> '+ error);

    });





  };

  // ------------- end function

  render(){
  return (
   <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
   
    <Text> tests </Text>
    <View style={{margin:10, width:200}}>
      <Button title='get from firebase' onPress={this._donwloadThem}></Button>
    </View>
   
   </View>
  );
  };
};

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

export default App;
