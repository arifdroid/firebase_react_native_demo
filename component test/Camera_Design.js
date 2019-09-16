import React, { Component } from 'react'
import { Text, View, ToastAndroid, TouchableOpacity, Button, StyleSheet, FlatList, ScrollView, Animated } from 'react-native';

import { RNCamera } from 'react-native-camera';


import Inital from './Inital_Brand_Letter';



import RNMLkit from 'react-native-firebase-mlkit';
//import console = require('console');

import firebase from 'react-native-firebase';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import View_Product from './View_Product';

/// .>>>> >>>> << HANDLE DATA 

//import {_fungsi_prosesData} from '/Users/60184/Documents/ReactNative/BASIC_RN_LATEST/firebase_demo/component test/Process_single_data.js';

import { _fungsiTestHere } from '/Users/60184/Documents/ReactNative/BASIC_RN_LATEST/firebase_demo/components/BrandDatabaseFunction'

import { _getBrandAndProduct_C } from '/Users/60184/Documents/ReactNative/BASIC_RN_LATEST/firebase_demo/brandDatabase/database_C/Get_ProductName_C'

import { _getBrandAndProduct_T } from '/Users/60184/Documents/ReactNative/BASIC_RN_LATEST/firebase_demo/brandDatabase/database_T/Get_ProductName_T'


import { _processResultTextFunction } from './Result_Text_Process';

import { _prioritizeProductName, _sortAscending } from './Prioritize_Product'

///

// const reffirebase = firebase.firestore().collection('cities').doc('London');

// const db = firebase.firestore();


class Camera_Design extends Component {
    constructor() {
        super()

        this.state = {

            elementTextFinal: '',
            lineTextFinal: '',
            resultTextFinal: '',
            objectresult: [],
            objectSize: 0,


            initialCharUserFinal: '', //we assume initial input is 'c' character

            brandName: 'default',
            productName: 'default',

            fadeValue: new Animated.Value(0),

            passtest:'PASSED THEM'

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

        console.log('letter initial >> ', initialChar_userInput)

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

                //provide case, for each entry 
                var productPriority;
                switch(initialChar_userInput){

                    case 'A':


                    break;
                    case 'C':
                        
                            productPriority = _getBrandAndProduct_C(regexhere)

                            //console.log('\n HERE NIGGA ', productPriority.length+'\n')
                    break;
                    case 'T':

                            productPriority = _getBrandAndProduct_T(regexhere)

                    break;


                }

               
                
                
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

            FINAL_ALPHA.forEach((el, i) => {


                if (i == 0) {

                    brandNameFinal = el.brand;
                    productNameFinal = el.productName;
                }

            })

            console.log('>> 6 , brand:' + brandNameFinal, 'productname:' + productNameFinal)

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
                brand: this.state.brandName,
                productName: this.state.productName,

            })


            // console.log('array result >> ' + arrayResult);

            ToastAndroid.show('FINISH PROCESS DATA ', arrayResult.length);



        }


    }; //end of snap process 


    /////


    /// input letter brand initial

    _letterInput = (item) =>{

        //this.state.initialCharUserFinal = item.key; 

        this.setState({
            initialCharUserFinal : item.key
        })

        //alert('defak : '+ item.key)

        //this.setState(th)

        //var here = await this._animateFade();

        Animated.sequence([
            
            Animated.timing(this.state.fadeValue, {
            toValue:1,
            duration:500,
        }),

        Animated.timing(this.state.fadeValue, {
            toValue:0,
            duration:1500,
        })

        ]).start();  

    };



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

                <RNCamera

                    ref={(ref) => { this.camera = ref }}
                    style={{ flex: 1, alignItems: 'flex-end' }}
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

                <View style={{ flexDirection: 'row', justifyContent: "flex-end", width: '100%', position: 'absolute', bottom: 89 }}>

                    <View style={{ height: 150, right: 10, backgroundColor: 'rgba(52, 52, 52, 0.2)' }}>

                        <FlatList
                            data={datahere}
                            renderItem={({ item }) => {

                                return (

                                    <Text style={{ alignSelf: 'center', paddingVertical: 20, paddingHorizontal: 5, color: 'white' }}

                                    //onPress={}
                                    onPress={()=>{
                                        this._letterInput(item);
                                    }}

                                    >{item.key}</Text>

                                )
                            }}

                        />
                    </View>

                </View>
                         
                 <Animated.View style={[styles.letter_initial,{opacity:this.state.fadeValue}]}>
                
                 <Text style={{color:'white', alignSelf:'center', fontSize:150}}>{this.state.initialCharUserFinal}</Text>
        
                 </Animated.View>
              

                <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 0,backgroundColor: 'rgba(52, 52, 52, 0.2)' }}>

                    <View style={{ flexDirection: 'column', marginLeft:20, flex:1, justifyContent:'center'}}>

                        <Text style={{color:'white', alignSelf:'center', margin:4}}>{this.state.initialCharUserFinal} : {this.state.brandName}</Text>
                        <Text style={{color:'white', alignSelf:'center', margin:4}}>{this.state.productName}</Text>

                    </View>


                    <TouchableOpacity style={styles.capture}
                    
                    onPress={()=>{

                        this._snapProcess();
                    }}
                    >

                        <Text>SNAP</Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.capture2}
                    
                    onPress={()=>this.props.navigation.navigate('View_Product',{productname:this.state.productName, brandname:this.state.brandName})}
                    
                    >

                        <Text>SEND</Text>

                    </TouchableOpacity>




                </View>



            </View>
        )
    }
}


var datahere = [{ key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' }, { key: 'K' }, { key: 'L' }, { key: 'M' }, { key: 'N' }, { key: 'O' }, { key: 'P' },
{ key: 'Q' }, { key: 'R' }, { key: 'S' }, { key: 'T' }, { key: 'U' }, { key: 'V' }, { key: 'W' }, { key: 'X' }, { key: 'Y' }, { key: 'Z' }];


const styles = StyleSheet.create({

    capture: {
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingLeft: 20,
        alignSelf: 'center',
        margin: 20,
    },
    capture2: {
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        right:10
        
    },
    letter_initial:{
        position: 'absolute',
        backgroundColor: 'rgba(52, 52, 52, 0.02)', 
        alignSelf:'center',
        bottom:260, justifyContent:'center' 
    }


})



const RootStack = createStackNavigator(
    {
      Camera_Design: Camera_Design,
      View_Product:View_Product,
    },{
  
      initialRouteName:'Camera_Design',
      headerBackTitleVisible:false,
      headerMode:'none'
  
    },
  
  );

  const AppContainer = createAppContainer(RootStack);
  
  export default class App extends React.Component{

    render(){
      return(
          <AppContainer/>
      )
    };
  };
  