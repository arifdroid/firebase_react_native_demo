import React, { Component } from 'react'
import { Text, View, ToastAndroid, TouchableOpacity, Button } from 'react-native';

import { RNCamera } from 'react-native-camera';

import RNMLkit from 'react-native-firebase-mlkit';
//import console = require('console');

import firebase from 'react-native-firebase';

/// .>>>> >>>> << HANDLE DATA 

import {_fungsiTestHere} from '/Users/60184/Documents/ReactNative/BASIC_RN_LATEST/firebase_demo/components/BrandDatabaseFunction'



///

const reffirebase = firebase.firestore().collection('cities').doc('London');

const db = firebase.firestore();


export default class TestCamera extends Component {
    constructor() {
        super()

        this.state = {

            elementTextFinal: '',
            lineTextFinal: '',
            resultTextFinal: '',
            objectresult: [],
            objectSize: 0,
            initialCharUserFinal:'t', //we assume initial input is 'c' character
        }

    }


    _shuffleData = () => {

        var objectresult2 = this.state.objectresult; // big block, inside  ,, {[] , [], []}

        console.log('before OBJECTRESULT2 ', objectresult2)

        var elementText2 = '';
        var lineText2 = '';
        var resultText2 = '';

        //var numberkey = this.state.objectSize;

        if (objectresult2.length > 0) {

            //            for (let el of objectresult2){

            var objectresult3 = objectresult2[0];


            objectresult3.forEach((element, i) => {

                if (element.lineTextObj !== undefined) {
                    lineText2 = element.lineTextObj;
                } else if (element.elementTextObj !== undefined) {
                    elementText2 = element.elementTextObj;
                } else if (element.resultTextObj !== undefined) {
                    resultText2 = element.resultTextObj;
                }

            });


            // elementText2 = objectresult2[0].elementTextObj;
            // lineText2 = objectresult2[0].lineTextObj;
            // resultText2 = objectresult2[0].resultTextObj;

            console.log('before OBJECTRESULT2 , 2  ', objectresult2)

            //var objectresult4 = objectresult2.shift(); //not working

            var objectresult5 = objectresult2.splice(1, objectresult2.length);

            console.log('before OBJECTRESULT2/4 , 3 ', objectresult5)

            this.state.objectresult = objectresult5;

            console.log('WHO DO FOOK >> ', objectresult5);
            console.log('WHO DO FOOK 2 >> ', this.state.objectresult);


            this.setState({

                lineTextFinal: lineText2,
                elementTextFinal: elementText2,
                resultTextFinal: resultText2,
                objectSize: this.state.objectresult.length,



            })
            //           }

        }

    }

    _snapProcess = async () => {

        var initialChar_userInput= this.state.initialCharUserFinal; // 

        if (this.camera) {

            //console.log('check snap')

            const options = { quality: 1, base64: false, skipProcessing: false, forceOrientation: true };

            const data = await this.camera.takePictureAsync(options);

            //console.log('data '+ JSON.stringify(data))     

            var deviceTextRecognition4 = await RNMLkit.deviceTextRecognition(data.uri);

            console.log('\n\nDATA >>',JSON.stringify(deviceTextRecognition4)+'\n\n')

            var deviceTextRecognition3 = [
                {
                    "elementText": "Daily",
                    "lineText": "Daily",
                    "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
                    "blockText": "Saljeylic\nAcid\nDaily",
                    "blockCoordinates": {
                        "height": 695,
                        "width": 864,
                        "left": 1077,
                        "top": 562
                    }
                },
                {
                    "elementText": "Gentle",
                    "lineText": "Gentle",
                    "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
                    "blockText": "Gentle",
                    "blockCoordinates": {
                        "height": 184,
                        "width": 684,
                        "left": 1013,
                        "top": 1268
                    }
                },
                {
                    "elementText": "Cleanser",
                    "lineText": "Cleanser",
                    "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
                    "blockText": "Cleanser",
                    "blockCoordinates": {
                        "height": 189,
                        "width": 701,
                        "left": 1155,
                        "top": 1480
                    }
                },
                {
                    "elementText": "oSRX",
                    "lineText": "oSRX",
                    "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
                    "blockText": "oSRX",
                    "blockCoordinates": {
                        "height": 227,
                        "width": 790,
                        "left": 923,
                        "top": 1774
                    }
                },
                {
                    "elementText": "sebum.",
                    "lineText": "and excess sebum.",
                    "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
                    "blockText": "Formulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.",
                    "blockCoordinates": {
                        "height": 625,
                        "width": 1319,
                        "left": 962,
                        "top": 2154
                    }
                },
                {
                    "elementText": "FL.OZ",
                    "lineText": "150 ml/5.07 FL.OZ",
                    "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
                    "blockText": "150 ml/5.07 FL.OZ",
                    "blockCoordinates": {
                        "height": 185,
                        "width": 1140,
                        "left": 1044,
                        "top": 2955
                    }
                }
            ];


            ToastAndroid.show('finish process data ', ToastAndroid.SHORT);

            //>>>>>>>>>>>  <<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<< .... 

            // ..... >>>>>> PROCESS DATA HERE 



            this._firstProcessData(deviceTextRecognition4, initialChar_userInput);



            // ..... >>>>>> PROCESS DATA HERE 

            //>>>>>>>>>>>  <<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<

            //console.log('data ' + JSON.stringify(deviceTextRecognition3))

            //var textData = JSON.stringify(deviceTextRecognition2);

            //var arrayWait = []

            // "resultText": "Salieylic\nAcid\nDaily\nGentle\nCleanser\ncOSRX\nFormulated with botanical\ningredients and 0.50%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.0Z",
            // "Salieylic\nAcid\nDaily\nGentle\nCleanser\ncOSRX\nFormulated with botanical\ningredients"
            // "Salieylic Acid Daily GentleCleanser cOSRX Formulated with botanical ingredients"
            // [{Salieylic} , {Acid} , {Daily}, {Gentle}, {Cleanser}, {cOSRX}, {Formulated}, {with}, {botanical} , {ingredients} ]
            // 

            var arrayResult = [];

            var i = 0;
            for (let textData of deviceTextRecognition4) {
            //for (let textData of deviceTextRecognition4) {

                var elementText3 = textData.elementText;
                var lineText3 = textData.lineText;
                var resultText3 = textData.resultText.replace(/\n/g, " ");
                //resultText3 = resultText3.toString();
                var splitthem = resultText3.split(" "); // array of data
                if (splitthem.length >= 5) {
                    var fiveWords = splitthem.slice(0, 5);
                } else if (splitthem.length === 4) {
                    var fiveWords = splitthem.slice(0, 4);
                } else if (splitthem.length === 3) {
                    var fiveWords = splitthem.slice(0, 3);
                } else if (splitthem.length === 2) {
                    var fiveWords = splitthem.slice(0, 2);
                } else if (splitthem.length === 1) { // this is possibly not cut

                    var fiveWords = splitthem.slice(0, 1);
                }

                resultText3 = fiveWords.join(" "); //

                let ari = [{ "elementTextObj": elementText3 }, { "lineTextObj": lineText3 }, { "resultTextObj": resultText3 }];


                //arrayWait = [{i:ari}]
                console.log('elementObject ' + i + " >>> ", ari);
                arrayResult.push(ari)

                i++;
                // arrayWait = 

                // arrayResult.push(arr)

            }

            this.state.objectresult = arrayResult;

            console.log("arrayResult >> ", arrayResult);

            //arrayResult[0].values

            // console.log("arrayResult single test >> ", arrayResult[0].);

            // console.log("arrayResult single test >> ", arrayResult[0].elementTextObj);
            // console.log("arrayResult single test >> ", arrayResult[1].elementTextObj);
            // console.log("arrayResult single test >> ", arrayResult[2].elementTextObj);



            this.setState({

                objectSize: this.state.objectresult.length,

            })


            // console.log('array result >> ' + arrayResult);

            ToastAndroid.show('length ', arrayResult.length);



        }


    };

    ///// first process data  >> we try to get title first 

    _firstProcessData = (dataParam, initialChar_userInput) => {    

        // remember dataParam is JSON ==> [{} , {}, {} ]            
        // roll data to find comparable with input, and drop data that not contain right first initial 

        var initialCharArray = [];

        dataParam.forEach(elHere =>{ //extract all element first, remember we have elementtext and linetext. 

            if(elHere.elementText.toLowerCase().charAt(0)===initialChar_userInput){

                initialCharArray.push(elHere.elementText.toLowerCase());
            }

        });


        var initialChar = initialChar_userInput;



    }


    /////


    _uploadThem = () => {


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

    _clearData=()=>{

        this.setState({

            lineTextFinal: '',
            elementTextFinal: '',
            resultTextFinal: '',
            objectSize: 0,

        })


    }


    render() {

        console.log('wot')
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 3, backgroundColor: 'yellow' }}>

                    <View style={{ margin: 6 }}></View>

                    <Text style={{ marginHorizontal: 40, margin: 5 }}>sizeNow: {this.state.objectSize}</Text>
                    <Text style={{ marginHorizontal: 40, margin: 5 }}>elementText: {this.state.elementTextFinal}</Text>
                    <Text style={{ marginHorizontal: 40, margin: 5 }}>lineText: {this.state.lineTextFinal}</Text>
                    <Text style={{ marginHorizontal: 40, margin: 5 }}>resultText: {this.state.resultTextFinal}</Text>

                    <View style={{ flexDirection: 'row', backgroundColor: '', flex: 1, justifyContent: 'center', marginTop: 10 }}>

                        <View style={{ marginHorizontal: 1, padding: 20 }}>
                            <Button title='process'></Button>
                        </View>
                        <View style={{ marginHorizontal: 1, padding: 20 }}>
                            <Button title='clear' onPress={()=>{this._clearData();}}></Button>
                        </View>
                        <View style={{ marginHorizontal: 1, padding: 20 }}>
                            <Button title='shuffle'  onPress={() => { this._shuffleData();}}></Button>
                        </View>

                    </View>

                    {/*<View style={{alignSelf:'center', margin:45, flexDirection:'row', backgroundColor:'green', width:'100%'}}>
                <View style={{alignContent:'center'}}>
                <Button title='shuffle data' onPress={()=>{this._shuffleData();}}></Button>
                </View>
                <View style={{alignContent:'center'}}>
                <Button title='upload' onPress={()=>{this._shuffleData();}}></Button>
                </View>
                </View>*/}



                </View>

                <View style={{ flex: 1 }}>

                    <RNCamera

                        ref={(ref) => { this.camera = ref }}
                        style={{ flex: 1, alignItems: 'center' }}
                        type={RNCamera.Constants.Type.back}
                        //{/*onTextRecognized={}*/}
                        autoFocus={RNCamera.Constants.AutoFocus.on}


                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}


                    />
                    <View style={{ flexDirection:'row' , left:'180%'}}>
                        <Button title='check' ></Button>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
                            <Text style={{color:'white'}}>asdas</Text>
                            <Text style={{color:'white', marginTop:10}}>asdas</Text>

                        </View>

                        <TouchableOpacity
                            style={{
                                flex: 1, backgroundColor: '#fff', borderRadius: 5,
                                padding: 15,
                                paddingHorizontal: 20,
                                alignSelf: 'center',
                                margin: 20,
                            }}

                            onPress={() => {

                                this._snapProcess();

                            }}

                        >



                            <Text style={{justifyContent:'center', alignItems:'center'}}>CAPTURE NOW</Text>
                        </TouchableOpacity>

                    </View>


                </View>


            </View>
        )
    }
}
