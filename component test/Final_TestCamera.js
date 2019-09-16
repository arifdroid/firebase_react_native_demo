import React, { Component } from 'react'
import { Text, View, ToastAndroid, TouchableOpacity, Button } from 'react-native';

import { RNCamera } from 'react-native-camera';



import RNMLkit from 'react-native-firebase-mlkit';
//import console = require('console');

import firebase from 'react-native-firebase';

/// .>>>> >>>> << HANDLE DATA 

import { _fungsiTestHere } from '/Users/60184/Documents/ReactNative/BASIC_RN_LATEST/firebase_demo/components/BrandDatabaseFunction'

import {_getBrandAndProduct} from '/Users/60184/Documents/ReactNative/BASIC_RN_LATEST/firebase_demo/brandDatabase/database_C/Get_ProductName_C'

import { _processResultTextFunction } from './Result_Text_Process';

import {_prioritizeProductName, _sortAscending} from './Prioritize_Product'

///

const reffirebase = firebase.firestore().collection('cities').doc('London');

const db = firebase.firestore();


export default class Final_TestCamera extends Component {
    constructor() {
        super()

        this.state = {

            elementTextFinal: '',
            lineTextFinal: '',
            resultTextFinal: '',
            objectresult: [],
            objectSize: 0,
            initialCharUserFinal: '', //we assume initial input is 'c' character

            brandName:'default',
            productName:'default',
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

        var initialChar_userInput = this.state.initialCharUserFinal; // 

        if (this.camera) {

            //console.log('check snap')

            const options = { quality: 1, base64: false, skipProcessing: false, forceOrientation: true };

            const data = await this.camera.takePictureAsync(options);

            //console.log('data '+ JSON.stringify(data))     

            var deviceTextRecognition4 = await RNMLkit.deviceTextRecognition(data.uri);

            //console.log('\n\nDATA >>',JSON.stringify(deviceTextRecognition4)+'\n\n')

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




            ToastAndroid.show('processing data ', ToastAndroid.SHORT);

            console.log(' >>>> 1');

            //>>>>>>>>>>>  <<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<< .... 

            // ..... >>>>>> PROCESS DATA HERE 

            var arrayToProcess = _processResultTextFunction(deviceTextRecognition4);

            console.log(' >>>> 2');

            var productPriorityAll = [];


            //var getproductPriority = new GetProductName_C;
            //var getproductPriority = new GetProductName_T;

            //var productPriority = getproductPriority._getBrandAndProduct(arrayToProcess);
            var kkk = 0;
            for (let el of arrayToProcess) {
                kkk++;
                var regexhere = new RegExp(el, 'gi')

                //console.log('\n\n'+kkk +':kkk>>>>>>> HERE el :',el+' \n');

               // var productPriority = getproductPriority._getBrandAndProduct(regexhere, '', kkk);

               var productPriority = _getBrandAndProduct(regexhere)



                //getBrandAndProduct(regexhere);
                //need to dissect 

                //sometimes return pure object, not just single object
                //if(productPriority!=[]){

                if (productPriority !== null) {

                    if (productPriority.length>= 1) {

                        productPriority.forEach(elll => {

                            productPriorityAll.push(elll);

                        })

                    } else {
                        productPriorityAll.push(productPriority);
                    }
                }




                //}    

            }

            console.log(' >>>> 3');
            //productPriorityAll = productPriorityAll.shift();
            //console.log('\n\n >>>>>>> HERE FINAL RESULT ARRAY : \n');

            //console.log('\n\n\nPRODUCT PRIORITY ALL>>> ', JSON.stringify(productPriorityAll) + '\n\n\n')

            //var priorityProduct = new PriorityLooper;

            var arrayPriorityProduct = _prioritizeProductName(productPriorityAll);

            console.log(' >>>> 4');

            var FINAL_ALPHA = _sortAscending(arrayPriorityProduct);

            console.log(' >>>> 5 FINAL ALPHA', JSON.stringify(FINAL_ALPHA));



            var brandNameFinal = '';
            var productNameFinal = '';

            // for(var a=0; a<FINAL_ALPHA.left;a++){

            //     if(a==0){

            //          brandNameFinal = FINAL_ALPHA[a].brand;   
            //         productNameFinal = FINAL_ALPHA[a].productname;

            //         break;
            //     }

            // }

            // console.log('>> 6 , brand:'+brandNameFinal, 'productname:'+productNameFinal)

            FINAL_ALPHA.forEach((el,i)=>{


                if(i==0){

                    brandNameFinal = el.brand;
                    productNameFinal = el.productName;
                }

            })

            console.log('>> 6 , brand:'+brandNameFinal, 'productname:'+productNameFinal)

            this.state.brandName = brandNameFinal;
            this.state.productName = productNameFinal;

            //console.log('\n\nFinal string list ', JSON.stringify(arrayPriorityProduct))


            // var mergeBrandProduct = new PriorityLooper;

            // var FINAL_BETA = mergeBrandProduct._combineBrandAndProductName(arrayPriorityProduct, resultted)


           // console.log('\n\n FINAL BETA >>', JSON.stringify(FINAL_BETA))



            // ..... >>>>>> PROCESS DATA HERE 

            //>>>>>>>>>>>  <<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<



            this.setState({

                objectSize: this.state.objectresult.length,
                brand:this.state.brandName,
                productName:this.state.productName,

            })


            // console.log('array result >> ' + arrayResult);

            ToastAndroid.show('FINISH PROCESS DATA ', arrayResult.length);



        }


    }; //end of snap process 


    /////



    _clearData = () => {

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
                            <Button title='clear' onPress={() => { this._clearData(); }}></Button>
                        </View>
                        <View style={{ marginHorizontal: 1, padding: 20 }}>
                            <Button title='shuffle' onPress={() => { this._shuffleData(); }}></Button>
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
                    <View style={{ flexDirection: 'row', left: '180%' }}>
                        <Button title='check' ></Button>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>{this.state.brandName}</Text>
                            <Text style={{ color: 'white', marginTop: 10 }}>{this.state.productName}</Text>

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



                            <Text style={{ justifyContent: 'center', alignItems: 'center' }}>CAPTURE NOW</Text>
                        </TouchableOpacity>

                    </View>


                </View>


            </View>
        )
    }
}
