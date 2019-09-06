import React from 'react'
import { View, Text } from 'react-native'



export const _processResultTextFunction=(process_resultText)=>{


    var arrayStringResultText_toProcess = [];

    process_resultText.forEach(el => {


        var resultextstringori = el.resultText.toLowerCase().replace(/\n/g, " ");

        //        var split_resultText = stringResultText.split(" ");

        var split_resultText = resultextstringori.split(" ");

        if (split_resultText.length == 6) { //chunk them.


            var split_resultText_1 = split_resultText.splice(0, 6); //1 ['', '', '','','','',]

            var first_2words_6 = split_resultText_1.splice(0, 2).join(" ").toString().toLowerCase();

            //console.log('\nfirst_2words_6 >> ', first_2words_6+'\n')

            var split_resultText_2 = resultextstringori.split(" ");

            var revert_split_resultText_2 = split_resultText_2.splice(0, 6); //2 ['', '', '','','','',]

            var second_2words_6 = revert_split_resultText_2.splice(1, 2).join(" ").toString().toLowerCase();

            //console.log('\nsecond_2words_6 >>', second_2words_6 +'\n');

            var split_resultText_3 = resultextstringori.split(" ");

            var revert_split_resultText_3 = split_resultText_3.splice(0, 6); //2

            var third_2words_6 = revert_split_resultText_3.splice(2, 2).join(" ").toString().toLowerCase();

            //console.log('\nthird_2words_6 >>', third_2words_6 +'\n');

            var split_resultText_4 = resultextstringori.split(" ");

            var revert_split_resultText_4 = split_resultText_4.splice(0, 6); //2

            var four_2words_6 = revert_split_resultText_4.splice(3, 2).join(" ").toString().toLowerCase();

            //console.log('\nfour_2words_6 >>', four_2words_6 +'\n');

            var split_resultText_5 = resultextstringori.split(" ");

            var revert_split_resultText_5 = split_resultText_5.splice(0, 6); //2

            var five_2words_6 = revert_split_resultText_5.splice(4, 2).join(" ").toString().toLowerCase();

            //console.log('\nfive_2words_6 >>', five_2words_6 +'\n');

            //////////////////////////////


            var split_resultText_6 = resultextstringori.split(" ");

            var revert_split_resultText_6 = split_resultText_6.splice(0, 6); //2

            var first_3words_6 = revert_split_resultText_6.splice(0, 3).join(" ").toString().toLowerCase();

            //console.log('\nfirst_3words_6 >>', first_3words_6 +'\n');


            var split_resultText_7 = resultextstringori.split(" ");

            var revert_split_resultText_7 = split_resultText_7.splice(0, 6); //2

            var second_3words_6 = revert_split_resultText_7.splice(3, 3).join(" ").toString().toLowerCase();

            //console.log('\nsecond_3words_6 >>', second_3words_6 +'\n');

            var split_resultText_8 = resultextstringori.split(" ");

            var revert_split_resultText_8 = split_resultText_8.splice(0, 6); //2

            var third_3words_6 = revert_split_resultText_8.splice(1, 3).join(" ").toString().toLowerCase();

            //console.log('\nthird_3words_6 >>', third_3words_6 +'\n');

            var split_resultText_9 = resultextstringori.split(" ");

            var revert_split_resultText_9 = split_resultText_9.splice(0, 6); //2

            var four_3words_6 = revert_split_resultText_9.splice(2, 3).join(" ").toString().toLowerCase();

            //console.log('\nfour_3words_6 >>', four_3words_6 +'\n');

            arrayStringResultText_toProcess.push(first_2words_6, second_2words_6, third_2words_6, four_2words_6, five_2words_6, first_3words_6, second_3words_6, third_3words_6, four_3words_6);

            //console.log('\n\n\n CLEAN CODEEEE \n\n\n')

            //console.log(' EDDIE FUKIN HILARIOUS >> ', arrayStringResultText_toProcess)


        } else if (split_resultText.length == 5) {

            var split_resultText_10 = resultextstringori.split(" ");

            var revert_split_resultText_10 = split_resultText_10.splice(0, 6); //1 ['', '', '','','','',]

            var first_2words_5 = revert_split_resultText_10.splice(0, 2).join(" ").toString().toLowerCase();

            //console.log('\nfirst_2words_5 >> ', first_2words_5+'\n')

            var split_resultText_11 = resultextstringori.split(" ");

            var revert_split_resultText_11 = split_resultText_11.splice(0, 6); //2 ['', '', '','','','',]

            var second_2words_5 = revert_split_resultText_11.splice(1, 2).join(" ").toString().toLowerCase();

            //console.log('\nsecond_2words_5 >>', second_2words_5 +'\n');

            var split_resultText_12 = resultextstringori.split(" ");

            var revert_split_resultText_12 = split_resultText_12.splice(0, 6); //2

            var third_2words_5 = revert_split_resultText_12.splice(2, 2).join(" ").toString().toLowerCase();

            //console.log('\nthird_2words_6 >>', third_2words_5 +'\n');

            var split_resultText_13 = resultextstringori.split(" ");

            var revert_split_resultText_13 = split_resultText_13.splice(0, 6); //2

            var four_2words_5 = revert_split_resultText_13.splice(3, 2).join(" ").toString().toLowerCase();

            //console.log('\nfour_2words_5 >>', four_2words_5 +'\n');

            ////////////


            var split_resultText_14 = resultextstringori.split(" ");

            var revert_split_resultText_14 = split_resultText_14.splice(0, 6); //2

            var first_3words_5 = revert_split_resultText_14.splice(0, 3).join(" ").toString().toLowerCase();

            //console.log('\nfirst_3words_5 >>', first_3words_5 +'\n');


            var split_resultText_15 = resultextstringori.split(" ");

            var revert_split_resultText_15 = split_resultText_15.splice(0, 6); //2

            var second_3words_5 = revert_split_resultText_15.splice(1, 3).join(" ").toString().toLowerCase();

            //console.log('\nsecond_3words_5 >>', second_3words_5 +'\n');

            var split_resultText_16 = resultextstringori.split(" ");

            var revert_split_resultText_16 = split_resultText_16.splice(0, 6); //2

            var third_3words_5 = revert_split_resultText_16.splice(2, 3).join(" ").toString().toLowerCase();

            //console.log('\nthird_3words_5 >>', third_3words_5 +'\n');

            /////////

            arrayStringResultText_toProcess.push(first_2words_5, second_2words_5, third_2words_5, four_2words_5, first_3words_5, second_3words_5, third_3words_5);

            //console.log('\n\n\n CLEAN CODEEEE \n\n\n')

            //console.log(' EDDIE FUKIN HILARIOUS >> ', arrayStringResultText_toProcess)




        } else if (split_resultText.length == 4) {

            var split_resultText_17 = resultextstringori.split(" ");

            var revert_split_resultText_17 = split_resultText_17.splice(0, 6); //1 ['', '', '','','','',]

            var first_2words_4 = revert_split_resultText_17.splice(0, 2).join(" ").toString().toLowerCase();

            //console.log('\nfirst_2words_4 >> ', first_2words_4+'\n')

            var split_resultText_18 = resultextstringori.split(" ");

            var revert_split_resultText_18 = split_resultText_18.splice(0, 6); //2 ['', '', '','','','',]

            var second_2words_4 = revert_split_resultText_18.splice(1, 2).join(" ").toString().toLowerCase();

            //console.log('\nsecond_2words_4 >>', second_2words_4 +'\n');

            var split_resultText_19 = resultextstringori.split(" ");

            var revert_split_resultText_19 = split_resultText_19.splice(0, 6); //2

            var third_2words_4 = revert_split_resultText_19.splice(2, 2).join(" ").toString().toLowerCase();

            //console.log('\nthird_2words_4 >>', third_2words_4 +'\n');

            /////////////


            var split_resultText_20 = resultextstringori.split(" ");

            var revert_split_resultText_20 = split_resultText_20.splice(0, 6); //2

            var first_3words_4 = revert_split_resultText_20.splice(0, 3).join(" ").toString().toLowerCase();

            //console.log('\nfirst_3words_4 >>', first_3words_4 +'\n');


            var split_resultText_21 = resultextstringori.split(" ");

            var revert_split_resultText_21 = split_resultText_21.splice(0, 6); //2

            var second_3words_4 = revert_split_resultText_21.splice(1, 3).join(" ").toString().toLowerCase();

            //console.log('\nsecond_3words_4 >>', second_3words_4 +'\n');

            /////////

            arrayStringResultText_toProcess.push(first_2words_4, second_2words_4, third_2words_4, first_3words_4, second_3words_4);

            //console.log('\n\n\n CLEAN CODEEEE \n\n\n')

            //console.log(' EDDIE FUKIN HILARIOUS >> ', arrayStringResultText_toProcess)




        } else if (split_resultText.length == 3) {

            var split_resultText_22 = resultextstringori.split(" ");

            var revert_split_resultText_22 = split_resultText_22.splice(0, 6); //1 ['', '', '','','','',]

            var first_2words_3 = revert_split_resultText_22.splice(0, 2).join(" ").toString().toLowerCase();

            //console.log('\nfirst_2words_3 >> ', first_2words_3+'\n')

            var split_resultText_23 = resultextstringori.split(" ");

            var revert_split_resultText_23 = split_resultText_23.splice(0, 6); //2 ['', '', '','','','',]

            var second_2words_3 = revert_split_resultText_23.splice(1, 2).join(" ").toString().toLowerCase();

            //console.log('\nsecond_2words_3 >>', second_2words_3 +'\n');


            ////////


            var split_resultText_24 = resultextstringori.split(" ");

            var revert_split_resultText_24 = split_resultText_24.splice(0, 6); //2

            var first_3words_3 = revert_split_resultText_24.splice(0, 3).join(" ").toString().toLowerCase();

            //console.log('\nfirst_3words_3 >>', first_3words_3 +'\n');

            //////////

            arrayStringResultText_toProcess.push(first_2words_3, second_2words_3, first_3words_3);

            //console.log('\n\n\n CLEAN CODEEEE \n\n\n')

            //console.log(' EDDIE FUKIN HILARIOUS >> ', arrayStringResultText_toProcess)




        } else if (split_resultText.length == 2) {

            var split_resultText_25 = resultextstringori.split(" ");

            var revert_split_resultText_25 = split_resultText_25.splice(0, 6); //1 ['', '', '','','','',]

            var first_2words_2 = revert_split_resultText_25.splice(0, 2).join(" ").toString().toLowerCase();

            //console.log('\nfirst_2words_2 >> ', first_2words_2+'\n')

            ///////////////////

            arrayStringResultText_toProcess.push(first_2words_2);

            console.log('\n\n\n CLEAN CODEEEE \n\n\n')

            console.log(' EDDIE FUKIN HILARIOUS >> ', arrayStringResultText_toProcess)




        } else if (split_resultText.length >= 8) { //chunk them.

            var split_resultText_28 = resultextstringori.split(" ");

            var revert_split_resultText_28 = split_resultText_28.splice(0, 8); //1 ['', '', '','','','',]

            var first_2words_8 = revert_split_resultText_28.splice(0, 2).join(" ").toString().toLowerCase();

            //console.log('\nfirst_2words_6 >> ', first_2words_6+'\n')

            var split_resultText_29 = resultextstringori.split(" ");

            var revert_split_resultText_29 = split_resultText_29.splice(0, 8); //2 ['', '', '','','','',]

            var second_2words_8 = revert_split_resultText_29.splice(1, 2).join(" ").toString().toLowerCase();

            //console.log('\nsecond_2words_6 >>', second_2words_6 +'\n');

            var split_resultText_30 = resultextstringori.split(" ");

            var revert_split_resultText_30 = split_resultText_30.splice(0, 8); //2

            var third_2words_8 = revert_split_resultText_30.splice(2, 2).join(" ").toString().toLowerCase();

            //console.log('\nthird_2words_6 >>', third_2words_6 +'\n');

            var split_resultText_31 = resultextstringori.split(" ");

            var revert_split_resultText_31 = split_resultText_31.splice(0, 8); //2

            var four_2words_8 = revert_split_resultText_31.splice(3, 2).join(" ").toString().toLowerCase();

            //console.log('\nfour_2words_6 >>', four_2words_6 +'\n');

            var split_resultText_32 = resultextstringori.split(" ");

            var revert_split_resultText_32 = split_resultText_32.splice(0, 8); //2

            var five_2words_8 = revert_split_resultText_32.splice(4, 2).join(" ").toString().toLowerCase();

            //console.log('\nfive_2words_6 >>', five_2words_6 +'\n');

            //////////////////////////////


            var split_resultText_33 = resultextstringori.split(" ");

            var revert_split_resultText_33 = split_resultText_33.splice(0, 8); //2

            var six_2words_8 = revert_split_resultText_33.splice(5, 2).join(" ").toString().toLowerCase();

            //console.log('\nfirst_3words_6 >>', first_3words_6 +'\n');


            var split_resultText_34 = resultextstringori.split(" ");

            var revert_split_resultText_34 = split_resultText_34.splice(0, 8); //2

            var seven_2words_8 = revert_split_resultText_34.splice(6, 2).join(" ").toString().toLowerCase();

            //console.log('\nsecond_3words_6 >>', second_3words_6 +'\n');


            ///// 

            var split_resultText_35 = resultextstringori.split(" ");

            var revert_split_resultText_35 = split_resultText_35.splice(0, 8); //2

            var first_3words_8 = revert_split_resultText_35.splice(0, 3).join(" ").toString().toLowerCase();

            //console.log('\nthird_3words_6 >>', third_3words_6 +'\n');

            var split_resultText_36 = resultextstringori.split(" ");

            var revert_split_resultText_36 = split_resultText_36.splice(0, 8); //2

            var second_3words_8 = revert_split_resultText_36.splice(1, 3).join(" ").toString().toLowerCase();

            //console.log('\nfour_3words_6 >>', four_3words_6 +'\n');


            var split_resultText_37 = resultextstringori.split(" ");

            var revert_split_resultText_37 = split_resultText_37.splice(0, 8); //2

            var third_3words_8 = revert_split_resultText_37.splice(2, 3).join(" ").toString().toLowerCase();

            //console.log('\nfour_3words_6 >>', four_3words_6 +'\n');


            var split_resultText_38 = resultextstringori.split(" ");

            var revert_split_resultText_38 = split_resultText_38.splice(0, 8); //2

            var fourth_3words_8 = revert_split_resultText_38.splice(3, 3).join(" ").toString().toLowerCase();

            //console.log('\nfour_3words_6 >>', four_3words_6 +'\n');


            var split_resultText_39 = resultextstringori.split(" ");

            var revert_split_resultText_39 = split_resultText_39.splice(0, 8); //2

            var five_3words_8 = revert_split_resultText_39.splice(4, 3).join(" ").toString().toLowerCase();

            //console.log('\nfour_3words_6 >>', four_3words_6 +'\n');

            var split_resultText_40 = resultextstringori.split(" ");

            var revert_split_resultText_40 = split_resultText_40.splice(0, 8); //2

            var six_3words_8 = revert_split_resultText_40.splice(5, 3).join(" ").toString().toLowerCase();

            //console.log('\nfour_3words_6 >>', four_3words_6 +'\n');

            arrayStringResultText_toProcess.push(first_2words_8, second_2words_8, third_2words_8, four_2words_8, five_2words_8, six_2words_8, seven_2words_8, first_3words_8, second_3words_8, third_3words_8, fourth_3words_8, five_3words_8, six_3words_8);

            //console.log('\n\n\n CLEAN CODEEEE \n\n\n')

            //console.log(' EDDIE FUKIN HILARIOUS >> ', arrayStringResultText_toProcess)


        } else if (split_resultText.length == 7) { //chunk them.

            var split_resultText_28 = resultextstringori.split(" ");

            var revert_split_resultText_28 = split_resultText_8.splice(0, 7); //1 ['', '', '','','','',]

            var first_2words_8 = revert_split_resultText_28.splice(0, 2).join(" ").toString().toLowerCase();

            //console.log('\nfirst_2words_6 >> ', first_2words_6+'\n')

            var split_resultText_29 = resultextstringori.split(" ");

            var revert_split_resultText_29 = split_resultText_29.splice(0, 7); //2 ['', '', '','','','',]

            var second_2words_8 = revert_split_resultText_29.splice(1, 2).join(" ").toString().toLowerCase();

            //console.log('\nsecond_2words_6 >>', second_2words_6 +'\n');

            var split_resultText_30 = resultextstringori.split(" ");

            var revert_split_resultText_30 = split_resultText_30.splice(0, 7); //2

            var third_2words_8 = revert_split_resultText_30.splice(2, 2).join(" ").toString().toLowerCase();

            //console.log('\nthird_2words_6 >>', third_2words_6 +'\n');

            var split_resultText_31 = resultextstringori.split(" ");

            var revert_split_resultText_31 = split_resultText_31.splice(0, 7); //2

            var four_2words_8 = revert_split_resultText_31.splice(3, 2).join(" ").toString().toLowerCase();

            //console.log('\nfour_2words_6 >>', four_2words_6 +'\n');

            var split_resultText_32 = resultextstringori.split(" ");

            var revert_split_resultText_32 = split_resultText_32.splice(0, 7); //2

            var five_2words_8 = revert_split_resultText_32.splice(4, 2).join(" ").toString().toLowerCase();

            //console.log('\nfive_2words_6 >>', five_2words_6 +'\n');

            //////////////////////////////


            var split_resultText_33 = resultextstringori.split(" ");

            var revert_split_resultText_33 = split_resultText_33.splice(0, 7); //2

            var six_2words_8 = revert_split_resultText_33.splice(5, 2).join(" ").toString().toLowerCase();

            //console.log('\nfirst_3words_6 >>', first_3words_6 +'\n');


            // var split_resultText_34 = resultextstringori.split(" ");

            // var revert_split_resultText_34 = split_resultText_34.splice(0, 6); //2

            // var seven_2words_8 = revert_split_resultText_34.splice(6, 2).join(" ").toString().toLowerCase();

            //console.log('\nsecond_3words_6 >>', second_3words_6 +'\n');


            ///// 

            var split_resultText_35 = resultextstringori.split(" ");

            var revert_split_resultText_35 = split_resultText_35.splice(0, 7); //2

            var first_3words_8 = revert_split_resultText_35.splice(0, 3).join(" ").toString().toLowerCase();

            //console.log('\nthird_3words_6 >>', third_3words_6 +'\n');

            var split_resultText_36 = resultextstringori.split(" ");

            var revert_split_resultText_36 = split_resultText_36.splice(0, 7); //2

            var second_3words_8 = revert_split_resultText_36.splice(1, 3).join(" ").toString().toLowerCase();

            //console.log('\nfour_3words_6 >>', four_3words_6 +'\n');


            var split_resultText_37 = resultextstringori.split(" ");

            var revert_split_resultText_37 = split_resultText_37.splice(0, 7); //2

            var third_3words_8 = revert_split_resultText_37.splice(2, 3).join(" ").toString().toLowerCase();

            //console.log('\nfour_3words_6 >>', four_3words_6 +'\n');


            var split_resultText_38 = resultextstringori.split(" ");

            var revert_split_resultText_38 = split_resultText_38.splice(0, 7); //2

            var fourth_3words_8 = revert_split_resultText_38.splice(3, 3).join(" ").toString().toLowerCase();

            //console.log('\nfour_3words_6 >>', four_3words_6 +'\n');


            var split_resultText_39 = resultextstringori.split(" ");

            var revert_split_resultText_39 = split_resultText_39.splice(0, 7); //2

            var five_3words_8 = revert_split_resultText_39.splice(4, 3).join(" ").toString().toLowerCase();

            //console.log('\nfour_3words_6 >>', four_3words_6 +'\n');

            var split_resultText_40 = resultextstringori.split(" ");

            var revert_split_resultText_40 = split_resultText_40.splice(0, 7); //2

            var six_3words_8 = revert_split_resultText_40.splice(5, 3).join(" ").toString().toLowerCase();

            //console.log('\nfour_3words_6 >>', four_3words_6 +'\n');

            arrayStringResultText_toProcess.push(first_2words_8, second_2words_8, third_2words_8, four_2words_8, five_2words_8, six_2words_8, first_3words_8, second_3words_8, third_3words_8, fourth_3words_8, five_3words_8);

            //console.log('\n\n\n CLEAN CODEEEE \n\n\n')
            //console.log(' EDDIE FUKIN HILARIOUS >> ', arrayStringResultText_toProcess)


        }
    });  //finish process data.

    console.log('\n\n HEREEEE \n\n')


    return arrayStringResultText_toProcess;


};




const Result_Text_Process = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Result_Text_Process
