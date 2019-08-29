import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';

import { RNCamera } from 'react-native-camera';

import RNMLkit from 'react-native-firebase-mlkit';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import { _fungsiTestHere } from './BrandDatabaseFunction';

//import console = require('console');

//

//const tableC_5 : Table=[];

var table_singleW_C_5letter = "Cantu,Carex,Cargo,Cedel,Chame,Chloe,Cinch,Cipla,Citra,Code9,Coney,Coola,CosRX,Cos.W,Coxir,Cremo,Crest,Curel,CURLS,Cutex";

var found = false;

//var testMatch = 0; //this is for round check after first 3

var array3firstletterMatch = [];

var array3firstletterMatch_boolean = false;


var brandNameFinal='';



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

                break;

            case 0: //letter processing

                (async () => {


                    // if(this.state.first3lettermatch.length>=1){ //but we dont have await ,, or we distict them while we push button. 




                    //     array3firstletterMatch_boolean=false;
                    // }


                    //if(this.camer)
                    if (this.camera) {

                        const options = { quality: 0.5, base64: true, skipProcessing: true, forceOrientation: true };

                        const data = await this.camera.takePictureAsync(options);

                        this.setState({

                            status: 'processing..'

                        })

                        var deviceTextRecognition2 = await RNMLkit.deviceTextRecognition(data.uri);

                        // console.log('text detected ==>> '+ deviceTextRecognition2);
                        // console.log('text convert ==>> '+ JSON.stringify(deviceTextRecognition2));

                        //var texttest = deviceTextRecognition2[0].lineText;

                        // >>>>>>>>>>>>>>>> 

                        // new code , processing >>>>>>>>>>>>>>>>>>>>

                        // first initial entered by user 
                        var receivedLetter = this.state.letter; 


                        for (let element of deviceTextRecognition2) {

                            //if not found . 
                            var textBrand_try_2 = element.elementText.toLowerCase(); //the ordinary , corsx

                            var resultTextHere = element.resultText.toLowerCase();
                            resultTextHere = resultTextHere.replace(/\n/g," ");
                            var splitthem = resultTextHere.split(" ");
                            var fiveWords = splitthem.slice(0,4);
                            var kajianFinal = fiveWords.join(" ");
                            console.log('result text >>> '+ kajianFinal );    
                            console.log('textbrand2 >>> ' + textBrand_try_2);

                            var check_wordsCount = textBrand_try_2.split(" "); // ["the", "ordinary"]

                            check_wordsCount = check_wordsCount.length; // 2

                            console.log('count >> ' + check_wordsCount);

                            if (check_wordsCount <= 1) {  //only 1 word

                                //here we can check letter passed from user, and decide draw which table. 
                                //also check length of letter in one word. ,, simple, start with S have 6 letters
                                // corsx start with C have 5 letters. 

                                console.log(' single word brand ');

                                var wordSize = textBrand_try_2.length;

                                console.log('word length >> ' + wordSize);

                                var initialBrandName = textBrand_try_2.charAt(0);

                                console.log('intial ' + initialBrandName);

                                //check if first letter not recognized, check product name 

                                if (initialBrandName === receivedLetter) {

                                    console.log('character same');
                                    //if same, then request data, to check with table 

                                    // if(wordSize===3){

                                    //     //go to table with inital A(eg.), 3 letters 

                                    // }else if(wordSize===4){}


                                    //here we pul data 

                                    var resultPullFromDatabase = _fungsiTestHere(initialBrandName, wordSize);

                                    console.log('PULLED word >> ' + resultPullFromDatabase); //here ARRAY

                                    //check for pattern 

                                    //resultPullFromDatabase.

                                    if (resultPullFromDatabase !== undefined) {

                                        var patternHere = new RegExp(textBrand_try_2, "i");

                                        var matched = resultPullFromDatabase.match(patternHere);

                                        console.log('MATCHED word >> ' + matched);

                                        brandNameFinal = matched;


                                        if (matched != null) {

                                            found = true;  //this is direct FOUND 
                                            break;

                                        } else {



                                            //try again , 

                                            var subofText = textBrand_try_2.slice(0, 3);

                                            console.log('MATCHED word 2 >> ' + subofText);
                                            var patternWhat = new RegExp(subofText, "i");
                                            //but we didnt return the full pattern

                                            var matched2 = resultPullFromDatabase.match(patternWhat);

                                            //we could split the word. and add 2 letter later, 
                                            //assume  asdscc,cda,cosrx,cosaass , so if split at cos, we will have two array of strings, 
                                            // ['asdscc,cda,'] ['rx,cosaass'] , then we splice, then concat from matched

                                            matched2 = matched2.toString;

                                            var wordSizeDiff = wordSize - 3; // we always cut 3, 

                                            var splitByMatch = resultPullFromDatabase.split(matched2);
                                            // ['asdscc,cda,'] ['rx,coasaass'] ,, if more than 1 'cos' ,, 
                                            // => we will have something like, 'asdscc,cosrx,coskkkk, cos121' ==> [{asdscc,'} , {'rx,'}, {kkkk, }...
                                            //we can drop the first index of array

                                            //29 ogos , if we get only 2 array length, which means only one possible answer, 
                                            //so we could just. 

                                            splitByMatch = splitByMatch.shift(); // you left with, [{'rx,'}, {kkkk, }...] , then can try one by one

                                            if (splitByMatch.length === 1) {
                                                //direct check for answer then break 
                                                //we need to know, full length -3
                                                var splitByMatchstring = splitByMatch[0].toString;  //['rx, ASDSA,coqesas sadasd']

                                                splitByMatchstring = splitByMatchstring.splice(0, wordSizeDiff);

                                                brandNameFinal = matched2.concat(splitByMatchstring);  //FOUND BRAND NAME  

                                                found = true;

                                                break; //this should break , and return

                                            } else { //means theres more than one array, ['rx,' , 'rx2,' ,'rx3,asdasda' ]


                                                for (let elHere of splitByMatch) {

                                                    elHere = elHere.splice(0, wordSizeDiff); //remove ,. or other left over => ['rx','rx2','rx3']

                                                    var testReturnBrand = matched2.concat(elHere); // should be 

                                                    //if(testMatch) //or we could return array, of  ==> [corsx, corkkk, cor......]

                                                    array3firstletterMatch.push(testReturnBrand); //heres the case we want to check , [] what does this count as, whe

                                                    array3firstletterMatch_boolean = true;

                                                }

                                                if (array3firstletterMatch_boolean) {
                                                    this.setState({

                                                        first3lettermatch: array3firstletterMatch,
                                                        //we need to check this. first, after push camera snap, instead of straight machine learning
                                                    })
                                                }

                                            }//end else, check 2nd match, and update 3 letter array


                                            // console.log('MATCHED word 2 >> ' + matched2);


                                            // if (matched2 != null) {

                                            //     found = true;
                                            //     break;
                                            // }


                                        }// end of find 3 matched letters 

                                    } // end of PULL FROM DATABASE. 



                                } //if INTIAL CHARACTER not same, then dont check this , we proceed to check product variation

                                //for product variation, assume we get long strings, combinatiion is endless, first, 
                                //maybe try for , number of each letter contains when we concats, 
                                //then matched with product line, starts with letter brand. 

                                //example, salicylic acid gentle for skin , == salicylicacidgentleforskin , => calculate, how many a's,i's,c's

                            } else { //can be, the ordinary, cedar creek essentia 







                            } //end of two or extra words. == BRANDS NAME 


                            //PRODUCT LINE VARIATION, >> not BRAND











                        }  //end of looping every elemant text block from machine learning





                        console.log(' WOT MATE ');

                        if (found === true) {
                            this.setState({

                                inputToProcess: deviceTextRecognition2,
                                outputToScreen: brandNameFinal,
                                status: 'finish',
                                productName: 'not processed yet',
                            })
                        } else {
                            this.setState({

                                outputToScreen: 'not found',
                                status: 'finish'
                            })

                        }

                        //alert('snapped');


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
                                this._takeThemPic2()

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


