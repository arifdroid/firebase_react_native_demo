//console.log('check')

// const finalProductToProcess = [  {"brand":"cosrx", "product_name":"Salicylic Acid Daily Gentle Cleanser"}, [0]
//                                  {"brand":"cosrx", "product_name":"Salicylic Acid Exfoliating Cleanser "}, [1]
//                                  {"brand":"cetaphil", "product_name":"Salicylic Acid Daily Cleanser "},    [2]
//                                  {"brand":"clinelle", "product_name":"Bomb Nourishing Salicylic Acid"},    [3]
//                               ]

// const finalProductToProcess = [  {"1" :{"brand":"cosrx","product_name":"Salicylic Acid Daily Gentle Cleanser"}},
//                                  {"2", "product_name":"Salicylic Acid Exfoliating Cleanser "},
//                                  {"3", "product_name":"Salicylic Acid Daily Cleanser "},
//                                  {"4", "product_name":"Bomb Nourishing Salicylic Acid"},    
//                               ]


//this function works, to find product name, if already have product name, what do we do


const finalArrayToCheck = [];

const getBrandAndProduct = (regexParameter,brandNameParam)=>{  //this from product name, 

 console.log('param is '+ regexParameter)   
  
 var brandNameParamExist=false

 if(brandNameParam==null||brandNameParam==''|| brandNameParam==undefined){
    var j = 0;
 }else{

    console.log('WOT NIGA')

    if(brandNameParam=='cosrx'){

        j=1;

        brandNameParamExist=true;
    }

    //j==5;

 }   

while (true) {

    console.log('j is > ', j);

    switch (j) {

        case 0:  

            console.log('CASE 0 = j is > ', j);    

            var stringhere = "Bomb Nourishing Salicylic Acid,Purifying Gel Moisturizer,PureSwiss Hydracalm Lotion,UV Defense SPF50,PureSwiss Hydracalm Cleansing Gel,Soothing Skin Toner,PureSwiss Hydracalm Sleeping Mask,WhitenUP Brightening Cleanser,CaviarGold Firming Cleanser,Skin Smoothing Scrub With Marine Beads,Deep Cleansing Gel,Purifying Toner,CaviarGold Firming Lotion,WhitenUp Brightening Toner,PureSwiss Hydracalm Serum,CaviarGold Firming Serum,WhitenUp Brightening Serum,Blemish Clear,WhitenUp Brightening Spot Corrector Essence,Moisture Glow,CaviarGold Firming Cream,WhitenUp Brightening Day Cream SPF20,WhitenUp Brightening Night Cream,Eye Bright,CaviarGold Firming Eye Serum,CaviarGold Firming Facial Mask,Deep Cleansing Water,PureSwiss Hydracalm Caring Milk Cleanser,Profesional Care Moisture Glow,Whitenup EE Even Effect Cream-Natural,Oil Free Smoothing Compact Natural SPF18,Purifying Cleanser,PureSwiss Hydracalm Cream,Purifying Gel Moisturizer,PureSwiss Hydracalm Lotion,UV Defense SPF50,PureSwiss Hydracalm Cleansing Gel,Soothing Skin Toner,PureSwiss Hydracalm Sleeping Mask,WhitenUP Brightening Cleanser,CaviarGold Firming Cleanser,Skin Smoothing Scrub With Marine Beads,Deep Cleansing Gel,Purifying Toner,CaviarGold Firming Lotion,WhitenUp Brightening Toner,PureSwiss Hydracalm Serum,CaviarGold Firming Serum,WhitenUp Brightening Serum,Blemish Clear,WhitenUp Brightening Spot Corrector Essence,Moisture Glow,CaviarGold Firming Cream,WhitenUp Brightening Day Cream SPF20,WhitenUp Brightening Night Cream,Eye Bright,CaviarGold Firming Eye Serum,CaviarGold Firming Facial Mask,Deep Cleansing Water,PureSwiss Hydracalm Caring Milk Cleanser,Profesional Care Moisture Glow,Whitenup EE Even Effect Cream-Natural,Oil Free Smoothing Compact Natural SPF18,Purifying Cleanser,PureSwiss Hydracalm Cream";
            //if found, break, then start at next j, 

            var spliteHere = stringhere.split(",");

            var arrayresult = [];

            for (var i = 0; i < spliteHere.length; i++) {


                if (spliteHere[i].match(regexParameter)) {

                    arrayresult.push(spliteHere[i])
                    
                    console.log('BRAND IS clinelle, product is ', arrayresult)

                    finalArrayToCheck.push({"brand":"clinelle", "productname":spliteHere[i]})
                    //break;     
                }
            }

            //finalArrayToCheck.push()

            break;

        case 1:

            console.log('CASE 1 = j is > ', j);

            var stringhere = "Triple C Lightning Liquid,Lightning Liquid,Triple C Lightning Foam,One Step Green Hero Calming Pad,Light Fit Real Water Toner to Cream,Jumbo Ultimate Moisturizing Honey Overnight Mask,Acne Pimple Master Patch,Holy Moly Snail Mask,Ultimate Moisturizing Honey Overnight Mask,One Step Original Clear Pads,AC Collection Blemish Spot Clearing Serum,AC Collection Ultimate Spot Cream,Hyaluronic Acid Hydra Power Essence,Aloe Soothing Sun Cream SPF 50,Oil-Free Ultra Moisturizing Lotion,Hyaluronic Acid Intensive Cream,Step Moisture Up Pad ,Clear Fit Master Patch,Hanbyul Hydrogel Very Simple Pack,Honey Ceramide Full Moisture Cream,Ultimate Nourishing Rice Overnight Spa Mask,Propolis Light Ampoule,Low-pH Good Morning Cleanser,Two in One Poreless Power Liquid,Natural BHA Skin Returning A-Sol,Advanced Snail 92 All In One Cream,Salicylic Acid Exfoliating Cleanser ,Advanced Snail 96 Mucin Power Essence,Centella Water Alcohol-Free Toner,AHA 7 Whitehead Power Liquid,Clear Fit Blemish Cushion,Clear Fit Spot Concealer (Light Beige),Galactomyces 95 Whitening Power Essence,One Step Pimple Clear Pads,One Step Original Clear Pad,AHA/BHA Clarifying Treatment Toner,Centella Blemish Cream,Cooling Aqua Facial Mist,AC Collection Calming Liquid Mild,Aloe Vera Oil-free Moisture Cream,Galactomyces Alcohol-Free Toner,BHA Blackhead Power Liquid,Aloe Vera Oil-Free Soothing Gel,Low PH PHA Barrier Mist,Hyaluronic Acid Hydra Foam Cleanser,Balancium Comfort Ceramide Cream,Hydrogel Very Simple Pack,Lock The Moisture Stick,Sebum Centella Mineral Powder,AC Collection Calming Liquid Intensive,Hydrium Green Tea Aqua Soothing Gel Cream,Hydrium Centella Aqua Soothing Ampoule,Low pH First Cleansing Milk Gel,Low PH Centella Cleansing Powder,Hydrium Triple Hyaluronic Moisture Ampoule ,Hydrium Green Tea Aqua Soothing Gel Cream,Hydrium Centella Aqua Soothing Ampoule,Moisture Power Enriched Cream,Centella Blemish Ampoule,AHA/BHA Clarifying Treatment Toner,PHA Moisture Renewal Power Cream,Honey Ceramide Eye Cream,Galactomyces 95 Tone Balancing Essence,Natural BHA Skin Returning Emulsion,BHA Summer Pore Minish Serum,BHA Blackhead Power Cream,Salicylic Acid Daily Gentle Cleanser,Make Me Lovely Cream,Low PH BHA Overnight Mask,Mela 14 White Ampule,AC Collection Calming Foam Cleanser";
            
            
            var spliteHere = stringhere.split(",");

            var arrayresult = [];

            for (var i = 0; i < spliteHere.length; i++) {


                if (spliteHere[i].match(regexParameter)) {

                    arrayresult.push(spliteHere[i])
                    
                    console.log('BRAND IS cosrx, product is ', arrayresult)

                    finalArrayToCheck.push({"brand":"cosrx", "productname":spliteHere[i]})
                   
                    //break;     
                }
            }

        break;    

           // break;

        case 3:
         console.log('CASE 3 = j is > ', j);

        break;

        
        case 4:

            console.log('CASE 4 = j is > ', j," cetaphil");

            var stringhere = "PHA Moisture Renewal Power Cream,Honey Ceramide Eye Cream,Galactomyces 95 Tone Balancing Essence,Natural BHA Skin Returning Emulsion,BHA Summer Pore Minish Serum,BHA Blackhead Power Cream,Salicylic Acid Daily Gentle Cleanser,Make Me Lovely Cream,Salicylic Acid Daily Cleanser Cetaphil,Low PH BHA Overnight Mask,Mela 14 White Ampule,AC Collection Calming Foam Cleanser";
            
            
            var spliteHere = stringhere.split(",");

            var arrayresult = [];

            for (var i = 0; i < spliteHere.length; i++) {


                if (spliteHere[i].match(regexParameter)) {

                    arrayresult.push(spliteHere[i])
                    
                    console.log('BRAND IS cetaphil, product is ', arrayresult)
                    
                    finalArrayToCheck.push({"brand":"cetaphil", "productname":spliteHere[i]})
                   
                    //break;     
                }
            }

        break;    
    


    }

    if(brandNameParamExist){

        break; //break while loop
    }

    if (j >= 5) { //this depends on letter size, //variable. 

        console.log('BREAK')
        break;
    }

    j++;

}




} //end of loop 


// here for if got product name, then call above method. 

//below if have brand name, and got param brand name,

const findProductGotBrandName = (brandnamethis, productnamethis) =>{

    switch(brandnamethis){

        case 'cosrx':

             var stringhere = "Triple C Lightning Liquid,Lightning Liquid,Triple C Lightning Foam,One Step Green Hero Calming Pad,Light Fit Real Water Toner to Cream,Jumbo Ultimate Moisturizing Honey Overnight Mask,Acne Pimple Master Patch,Holy Moly Snail Mask,Ultimate Moisturizing Honey Overnight Mask,One Step Original Clear Pads,AC Collection Blemish Spot Clearing Serum,AC Collection Ultimate Spot Cream,Hyaluronic Acid Hydra Power Essence,Aloe Soothing Sun Cream SPF 50,Oil-Free Ultra Moisturizing Lotion,Hyaluronic Acid Intensive Cream,Step Moisture Up Pad ,Clear Fit Master Patch,Hanbyul Hydrogel Very Simple Pack,Honey Ceramide Full Moisture Cream,Ultimate Nourishing Rice Overnight Spa Mask,Propolis Light Ampoule,Low-pH Good Morning Cleanser,Two in One Poreless Power Liquid,Natural BHA Skin Returning A-Sol,Advanced Snail 92 All In One Cream,Salicylic Acid Exfoliating Cleanser ,Advanced Snail 96 Mucin Power Essence,Centella Water Alcohol-Free Toner,AHA 7 Whitehead Power Liquid,Clear Fit Blemish Cushion,Clear Fit Spot Concealer (Light Beige),Galactomyces 95 Whitening Power Essence,One Step Pimple Clear Pads,One Step Original Clear Pad,AHA/BHA Clarifying Treatment Toner,Centella Blemish Cream,Cooling Aqua Facial Mist,AC Collection Calming Liquid Mild,Aloe Vera Oil-free Moisture Cream,Galactomyces Alcohol-Free Toner,BHA Blackhead Power Liquid,Aloe Vera Oil-Free Soothing Gel,Low PH PHA Barrier Mist,Hyaluronic Acid Hydra Foam Cleanser,Balancium Comfort Ceramide Cream,Hydrogel Very Simple Pack,Lock The Moisture Stick,Sebum Centella Mineral Powder,AC Collection Calming Liquid Intensive,Hydrium Green Tea Aqua Soothing Gel Cream,Hydrium Centella Aqua Soothing Ampoule,Low pH First Cleansing Milk Gel,Low PH Centella Cleansing Powder,Hydrium Triple Hyaluronic Moisture Ampoule ,Hydrium Green Tea Aqua Soothing Gel Cream,Hydrium Centella Aqua Soothing Ampoule,Moisture Power Enriched Cream,Centella Blemish Ampoule,AHA/BHA Clarifying Treatment Toner,PHA Moisture Renewal Power Cream,Honey Ceramide Eye Cream,Galactomyces 95 Tone Balancing Essence,Natural BHA Skin Returning Emulsion,BHA Summer Pore Minish Serum,BHA Blackhead Power Cream,Salicylic Acid Daily Gentle Cleanser,Make Me Lovely Cream,Low PH BHA Overnight Mask,Mela 14 White Ampule,AC Collection Calming Foam Cleanser";
            
            
            var spliteHere = stringhere.split(",");

            var arrayresult = [];

            for (var i = 0; i < spliteHere.length; i++) {


                if (spliteHere[i].match(regexParameter)) {

                    arrayresult.push(spliteHere[i])
                    
                    console.log('BRAND IS cosrx, product is ', arrayresult)

                    finalArrayToCheck.push({"brand":"cosrx", "productname":spliteHere[i]})
                   
                    //break;     
                }
            }

        
        break;

        case 'clinelle':

                var stringhere = "Bomb Nourishing Salicylic Acid,Purifying Gel Moisturizer,PureSwiss Hydracalm Lotion,UV Defense SPF50,PureSwiss Hydracalm Cleansing Gel,Soothing Skin Toner,PureSwiss Hydracalm Sleeping Mask,WhitenUP Brightening Cleanser,CaviarGold Firming Cleanser,Skin Smoothing Scrub With Marine Beads,Deep Cleansing Gel,Purifying Toner,CaviarGold Firming Lotion,WhitenUp Brightening Toner,PureSwiss Hydracalm Serum,CaviarGold Firming Serum,WhitenUp Brightening Serum,Blemish Clear,WhitenUp Brightening Spot Corrector Essence,Moisture Glow,CaviarGold Firming Cream,WhitenUp Brightening Day Cream SPF20,WhitenUp Brightening Night Cream,Eye Bright,CaviarGold Firming Eye Serum,CaviarGold Firming Facial Mask,Deep Cleansing Water,PureSwiss Hydracalm Caring Milk Cleanser,Profesional Care Moisture Glow,Whitenup EE Even Effect Cream-Natural,Oil Free Smoothing Compact Natural SPF18,Purifying Cleanser,PureSwiss Hydracalm Cream,Purifying Gel Moisturizer,PureSwiss Hydracalm Lotion,UV Defense SPF50,PureSwiss Hydracalm Cleansing Gel,Soothing Skin Toner,PureSwiss Hydracalm Sleeping Mask,WhitenUP Brightening Cleanser,CaviarGold Firming Cleanser,Skin Smoothing Scrub With Marine Beads,Deep Cleansing Gel,Purifying Toner,CaviarGold Firming Lotion,WhitenUp Brightening Toner,PureSwiss Hydracalm Serum,CaviarGold Firming Serum,WhitenUp Brightening Serum,Blemish Clear,WhitenUp Brightening Spot Corrector Essence,Moisture Glow,CaviarGold Firming Cream,WhitenUp Brightening Day Cream SPF20,WhitenUp Brightening Night Cream,Eye Bright,CaviarGold Firming Eye Serum,CaviarGold Firming Facial Mask,Deep Cleansing Water,PureSwiss Hydracalm Caring Milk Cleanser,Profesional Care Moisture Glow,Whitenup EE Even Effect Cream-Natural,Oil Free Smoothing Compact Natural SPF18,Purifying Cleanser,PureSwiss Hydracalm Cream";

                var spliteHere = stringhere.split(",");
        
                var arrayresult = [];
        
                for (var i = 0; i < spliteHere.length; i++) {
        
        
                    if (spliteHere[i].match(regexParameter)) {
        
                        arrayresult.push(spliteHere[i])
                        
                        console.log('BRAND IS clinelle, product is ', arrayresult)
        
                        finalArrayToCheck.push({"brand":"clinelle", "productname":spliteHere[i]}) // push into other array
                        //break;     
                    }
                }
        

        break;



    }


}// end of function, param brand name

///////////////////////////////


//stringCosrx = stringCosrx.toLowerCase();

var testmatch = "triple C Lightning Liquid";
var testmatch_2 = "Triple C";
var testmatch_3 = "Lightning Liquid";



var testmatch_real = "Saljeylic Acid Daily Gentle Cleanser";
var testmatch_real_2 = "Saljeylic Acid Daily";
var testmatch_real_3 = "Daily Gentle Cleanser";
var testmatch_real_4 = "Acid Daily Gentle";
var testmatch_real_5 = "Salicylic Acid";

//var regexhere = new RegExp(testmatch_real_5, 'gi')

//var convertoarray = stringCosrx.split(",");

var convertoarray =[];
var arrayParam=[];

arrayParam = arrayParam.concat(testmatch_real);
 arrayParam = arrayParam.concat(testmatch_real_2);
 arrayParam = arrayParam.concat(testmatch_real_3);
arrayParam = arrayParam.concat(testmatch_real_4);
arrayParam = arrayParam.concat(testmatch_real_5);


console.log('arrayParam ', arrayParam +'\n\n');

for(let el of arrayParam ){

    var regexhere = new RegExp(el, 'gi')
    getBrandAndProduct(regexhere, 'cosrx');

    console.log('\n\n')


}

console.log('\n\n >>>>>>> HERE FINAL RESULT ARRAY : \n');


// console.log('final array is >> ', JSON.stringify(finalArrayToCheck))

//console.log('FINAL >> ', finalArrayToCheck.values())

var calc= 0;

var finalBrandList='';

var finalBrandListWithPriority = [];

finalArrayToCheck.forEach((element)=>{

    //console.log('FINAL >>', element.brand , element.productname)
    
    var stringFinal = element.brand +' '+element.productname;

    //console.log('FINAL >> : ', stringFinal)

    //if(stringFinal)

    if(!finalBrandList.match(stringFinal)){

    var ii=0;

    finalArrayToCheck.forEach((elementInside)=>{
        ii++;
        var stringFinalInside = elementInside.brand +' '+ elementInside.productname;

        if(stringFinal===stringFinalInside){
            calc++;
            console.log('count is > '+ stringFinal , calc);


        }

        if(finalArrayToCheck.length===ii){

            if(calc>0){

                

                //finalBrandList.concat(stringFinal.toString);

                var finallll = stringFinal; // cosrx productname....... 
                var splitbrand = finallll.split(" ");
  
                var brandNameHere = splitbrand[0];
                console.log('apa jadi >> ', brandNameHere)
                var productnameHere2 = splitbrand.splice(1,splitbrand.length);
                var productnameHere = productnameHere2.join(" ");
  //              var priorityList = finalBrandListWithPriority;

                finalBrandListWithPriority=finalBrandListWithPriority.concat({"brand":brandNameHere,"productName":productnameHere,"priority":calc})

                //finalBrandListWithPriority=finalBrandListWithPriority.push({"priority":calc,"productName":finallll}) .. not working

                //finalBrandList = finalBrandList.concat(finallll);

                if(finalBrandList===''){
                
                    finalBrandList =finallll
                    
                }else{

                finalBrandList = finalBrandList +',' +finallll
                
             }    
                //    console.log('finalbrandlist > ',finalBrandList);
            }

            calc=0;

        }

    })

    }//check if match
})

console.log('\n\nFinal string list ', finalBrandList)

console.log('\n\nFinal string list ', JSON.stringify(finalBrandListWithPriority))

///or we can just change to string, then find by match

//we miss most important number, sort repitition, to get priority. 






