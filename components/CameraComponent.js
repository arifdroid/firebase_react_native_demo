import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button,NativeModules } from 'react-native';

import { RNCamera } from 'react-native-camera';

import RNMLkit from 'react-native-firebase-mlkit';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import { _fungsiTestHere } from './BrandDatabaseFunction';

import { _fungsiLoopLineText } from './LoopLineText'

import { tsThisType } from '@babel/types';



//import console = require('console');

//

//const tableC_5 : Table=[];

var table_singleW_C_5letter = "Cantu,Carex,Cargo,Cedel,Chame,Chloe,Cinch,Cipla,Citra,Code9,Coney,Coola,CosRX,Cos.W,Coxir,Cremo,Crest,Curel,CURLS,Cutex";

var found = false;

//var testMatch = 0; //this is for round check after first 3

var array3firstletterMatch = [];

var array3firstletterMatch_boolean = false;


var brandNameFinal = '';



//tableC_5= tableC_5.toLowerCase();

/////

class CameraScreen extends React.Component {

    constructor() {
        super();

        this.state = {

            inputToProcess: [],
            outputToScreen: 'default2',
            productName: 'product name',
            status: 'waiting..',

            first3lettermatch: [],

            letter: 'c',
        }

    }

    //overload method, since, sometimes, we have parameters, after process data. 

    _takeThemPicWithParam = (a, b, c) => {




    };



    _takeThemPic2 = (threeLetterProcessing) => {


        switch (this._takeThemPic2.arguments.length) {

            case 1:
                //we shall receive array, i guess. well we could have just pull from state. 

                //something is weird. 

                console.log('\n\n\n 3 letter found ' + threeLetterProcessing);
                //  'cosrx,cosr2,cose2sas,' => ['rx,','r2,', 'e2sas,'] ,, 
                // ['rx,' , '' ]
                //instead of using letter number, we can use find[,]

                //found=false;

                var elHere2 = threeLetterProcessing[0].toString; // [0] = rx, // [0] = r2,

                //for(let elHere2 of threeLetterProcessing){ rx ,
                //elHere2 = elHere2.toString;

                var n = elHere2.search(',');

                elHere2 = elHere2.splice(0, n - 1); //n should not be 1 or < 0

                //console.log('AFTER SHIFT ' + this.state.first3lettermatch)
                brandNameFinal = matched2.concat(elHere2);

                //then remove this, [0], shift left?

                this.state.first3lettermatch.shift();

                found = true;

                console.log('AFTER SHIFT ' + this.state.first3lettermatch)


                //}


                break;

            case 0: //letter processing

                (async () => {

                    if (this.camera) {

                        const options = { quality: 0.8, base64: true, skipProcessing: true, forceOrientation: true };

                        const data = await this.camera.takePictureAsync(options);

                        this.setState({

                            status: 'processing..'

                        })


                        var deviceTextRecognition2 = await RNMLkit.deviceTextRecognition(data.uri);

                        console.log('DATA PROCESSED >> ' + JSON.stringify(deviceTextRecognition2))

                        

                 


                    } // end of this.camera 

                })(); //this is end function for asyn (camera)

                break;




        } //end switch

    }; //end FUNCTION 

    // [ TAG  OLD CODE --- > FUNCTON ] >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>     


    //process data, get the biggest text first 




    ///// 


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <RNCamera

                    ref={ref => { this.camera = ref }}

                    style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
                    type={RNCamera.Constants.Type.back}
                />

                <View style={{flex:0}}><Text style={{color:'white'}}>fuck</Text></View>

                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', height: 80 }}>

                    <View style={{ alignContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', marginHorizontal: 10 }}>{this.state.outputToScreen}</Text>
                        <Text style={{ color: 'white', marginHorizontal: 10 }}>{this.state.productName}</Text>
                        <View style={{ margin: 3 }}></View>
                        <Text style={{ color: 'white', marginHorizontal: 10 }}>status : {this.state.status}</Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            flex: 0, backgroundColor: '#fff', borderRadius: 5,
                            padding: 15,
                            paddingHorizontal: 20,
                            alignSelf: 'center',
                            margin: 20,
                        }}

                        onPress={() => {
                            if (this.state.first3lettermatch.length >= 1) {
                                //a='masking';
                                a = this.state.first3lettermatch;
                                this._takeThemPic2(a);

                            } else {
                                this._takeThemPic2();

                            }
                        }}

                    >

                        <Text style={{ fontSize: 14 }}>SNAP</Text>
                    </TouchableOpacity>

                    {/*  <View style={{flex:0,borderRadius: 5,                
                    alignSelf: 'center',
                    margin: 20,}}
                   >
                    <Button title='Next' ></Button>
                    </View>
                    */}
                </View>
            </View>
        )
    }
}

/////

const RootStack = createStackNavigator(
    {

        CameraScreen: CameraScreen,
        //  ProcessDataScreen: ProcessDataScreen, 

    }, {

        initialRouteName: CameraScreen,
    }

);

const AppContainer = createAppContainer(RootStack);

export default class CameraComponent extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>

                <CameraScreen />
            </View>
        )

    }
}


