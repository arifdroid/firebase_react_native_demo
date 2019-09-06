import React from 'react'
import { View, Text } from 'react-native'

export const _prioritizeProductName= (jsonproductnameandbrand) =>{

    var finalArrayToCheck = jsonproductnameandbrand;



    var calc = 0;

    var finalBrandList = '';

    var finalBrandListWithPriority = [];


    finalArrayToCheck.forEach((element) => {



        var stringFinal = element.brand + ' ' + element.productname; //make it into string. 


        var pattern = stringFinal;


        while (pattern.includes("+")) {

            pattern = pattern.replace("+", "*")


        }
        //console.log('pattern 1 ', pattern)

        while (pattern.includes("*")) {

            pattern = pattern.replace("*", "\\+")


        }
        //console.log('pattern 2 ', pattern)

        var patternRegex = new RegExp(pattern, 'gi');





        if (!finalBrandList.match(patternRegex)) {  //if string dont find it, then continue iterate, else, stop, this already processed

            var ii = 0;

            finalArrayToCheck.forEach((elementInside) => {
                ii++;
                var stringFinalInside = elementInside.brand + ' ' + elementInside.productname; //cosrx 

                if (stringFinal === stringFinalInside) {
                    calc++;
                    //console.log('count is > ' + stringFinal, calc);


                }

                if (finalArrayToCheck.length === ii) {

                    if (calc > 0) {



                        //finalBrandList.concat(stringFinal.toString);

                        var finallll = stringFinal; // cosrx productname....... 
                        //var splitbrand = finallll.split(" "); //here is the moment of truth

                        //var brandNameHere = splitbrand[0];
                        // //console.log('apa jadi >> ', brandNameHere)
                        // var productnameHere2 = splitbrand.splice(1, splitbrand.length);
                        // var productnameHere = productnameHere2.join(" ");
                        // //              var priorityList = finalBrandListWithPriority;

                        finalBrandListWithPriority = finalBrandListWithPriority.concat({ "brand": element.brand, "productName": element.productname, "priority": calc })

                        //finalBrandListWithPriority=finalBrandListWithPriority.push({"priority":calc,"productName":finallll}) .. not working

                        //finalBrandList = finalBrandList.concat(finallll);

                        if (finalBrandList === '') {

                            finalBrandList = finallll

                        } else {

                            finalBrandList = finalBrandList + ',' + finallll

                        }
                        //    console.log('finalbrandlist > ',finalBrandList);
                    }

                    calc = 0;

                }

            })

        }//check if match
    })

    return finalBrandListWithPriority;

}


export const  _sortAscending= (arrayFinal)=>{


    var sortedOut = arrayFinal.sort((a,b)=>{

        if(a.priority>b.priority) return -1;
        else if(b.priority> a.priority) return 1;
        else return 0;
    
    });

    return sortedOut;

}



const Prioritize_Product = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}




export default Prioritize_Product
