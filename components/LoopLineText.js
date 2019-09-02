import React from 'react'
import { View, Text } from 'react-native'

import {_fungsiTestHere} from './BrandDatabaseFunction';


var brandNameFinal='';

export var _fungsiLoopLineText =(elementPassed , initialPassed) =>{ //process this string like process 

    var receivedLetter = initialPassed;
    
    var textBrand_try_2 = elementPassed;

    var check_wordsCount = elementPassed.split(" ");
    check_wordsCount = check_wordsCount.length; // 
    console.log('LINETEXT wordcount >> ' + check_wordsCount);

    if (check_wordsCount <= 1) {  //only 1 word

        //here we can check letter passed from user, and decide draw which table. 
        //also check length of letter in one word. ,, simple, start with S have 6 letters
        // corsx start with C have 5 letters. 

        console.log('LINETEXT single word brand ');

        var wordSize = textBrand_try_2.length;

        console.log('LINETEXT word length >> ' + wordSize);

        var initialBrandName = textBrand_try_2.charAt(0);

        console.log('LINETEXT intial ' + initialBrandName);

        //check if first letter not recognized, check product name 

        if (initialBrandName === receivedLetter) {

            console.log('LINETEXT character same');
            //if same, then request data, to check with table 

            // if(wordSize===3){

            //     //go to table with inital A(eg.), 3 letters 

            // }else if(wordSize===4){}


            //here we pul data 

            var resultPullFromDatabase = _fungsiTestHere(initialBrandName, wordSize);

            console.log('LINETEXT PULLED word >> ' + resultPullFromDatabase); //here ARRAY

            //check for pattern 

            //resultPullFromDatabase.

            if (resultPullFromDatabase !== undefined) {

                var patternHere = new RegExp(textBrand_try_2, "i");

                var matched = resultPullFromDatabase.match(patternHere);

                console.log('MATCHED word >> ' + matched);

                brandNameFinal = matched;


                if (matched != null) {

                    //found = true;  //this is direct FOUND 

                    return [true];

                    //break;

                } else {



                    //try again , 

                    textBrand_try_2 = textBrand_try_2.toString;

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

                        return [true];

                        // found = true;

                        // break; //this should break , and return

                    } else { //means theres more than one array, ['rx,' , 'rx2,' ,'rx3,asdasda' ]


                        for (let elHere of splitByMatch) {

                            elHere = elHere.splice(0, wordSizeDiff); //remove ,. or other left over => ['rx','rx2','rx3']

                            var testReturnBrand = matched2.concat(elHere); // should be 

                            //if(testMatch) //or we could return array, of  ==> [corsx, corkkk, cor......]

                            array3firstletterMatch.push(testReturnBrand); //heres the case we want to check , [] what does this count as, whe

                            array3firstletterMatch_boolean = true;

                        }

                        if (array3firstletterMatch_boolean) {
                            // this.setState({

                            //     first3lettermatch: array3firstletterMatch,
                            //     //we need to check this. first, after push camera snap, instead of straight machine learning
                            // })

                            return [false, array3firstletterMatch];
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

    }







}

const LoopLineText = () => {
    return (
        <View>
            <Text></Text>
        </View>





    )
}

export default LoopLineText
