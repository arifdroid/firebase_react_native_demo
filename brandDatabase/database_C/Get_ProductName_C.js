import React from 'react'
import { View, Text } from 'react-native'

export const _getBrandAndProduct=(regexParameter, brandNameParam='',kkk)=>{  //this from product name, 

    //        console.log('param is ' + regexParameter)
    
            var finalArrayToCheck = [];
    
            var brandNameParamExist = false
    
            if (brandNameParam == null || brandNameParam == '' || brandNameParam == undefined) {
                var j = 0;
                
                
                //console.log('\n\n >>>>>>>>>>>WOT NIGA\n\n')
    
    
            } else {
    
      //          console.log('WOT NIGA')
    
                if (brandNameParam == 'cosrx') {
    
                    j = 1;
    
                    brandNameParamExist = true;
                }
    
                //j==5;
    
            }
    
            while (true) {
    
               // console.log('j is > ', j);
    
                switch (j) {
    
                    case 0:
    
    //                    console.log('CASE 0 = j is > ', j);
    
                        var stringhere = "Bomb Nourishing Salicylic Acid,Purifying Gel Moisturizer,PureSwiss Hydracalm Lotion,UV Defense SPF50,PureSwiss Hydracalm Cleansing Gel,Soothing Skin Toner,PureSwiss Hydracalm Sleeping Mask,WhitenUP Brightening Cleanser,CaviarGold Firming Cleanser,Skin Smoothing Scrub With Marine Beads,Deep Cleansing Gel,Purifying Toner,CaviarGold Firming Lotion,WhitenUp Brightening Toner,PureSwiss Hydracalm Serum,CaviarGold Firming Serum,WhitenUp Brightening Serum,Blemish Clear,WhitenUp Brightening Spot Corrector Essence,Moisture Glow,CaviarGold Firming Cream,WhitenUp Brightening Day Cream SPF20,WhitenUp Brightening Night Cream,Eye Bright,CaviarGold Firming Eye Serum,CaviarGold Firming Facial Mask,Deep Cleansing Water,PureSwiss Hydracalm Caring Milk Cleanser,Profesional Care Moisture Glow,Whitenup EE Even Effect Cream-Natural,Oil Free Smoothing Compact Natural SPF18,Purifying Cleanser,PureSwiss Hydracalm Cream,Purifying Gel Moisturizer,PureSwiss Hydracalm Lotion,UV Defense SPF50,PureSwiss Hydracalm Cleansing Gel,Soothing Skin Toner,PureSwiss Hydracalm Sleeping Mask,WhitenUP Brightening Cleanser,CaviarGold Firming Cleanser,Skin Smoothing Scrub With Marine Beads,Deep Cleansing Gel,Purifying Toner,CaviarGold Firming Lotion,WhitenUp Brightening Toner,PureSwiss Hydracalm Serum,CaviarGold Firming Serum,WhitenUp Brightening Serum,Blemish Clear,WhitenUp Brightening Spot Corrector Essence,Moisture Glow,CaviarGold Firming Cream,WhitenUp Brightening Day Cream SPF20,WhitenUp Brightening Night Cream,Eye Bright,CaviarGold Firming Eye Serum,CaviarGold Firming Facial Mask,Deep Cleansing Water,PureSwiss Hydracalm Caring Milk Cleanser,Profesional Care Moisture Glow,Whitenup EE Even Effect Cream-Natural,Oil Free Smoothing Compact Natural SPF18,Purifying Cleanser,PureSwiss Hydracalm Cream";
                        //if found, break, then start at next j, 
    
                        var spliteHere = stringhere.split(",");
    
                        var arrayresult = [];
    
                        for (var i = 0; i < spliteHere.length; i++) {
    
    
                            if (spliteHere[i].match(regexParameter)) {
    
                                arrayresult.push(spliteHere[i])
    
                                //console.log('BRAND IS clinelle, product is ', arrayresult)
    
                                finalArrayToCheck.push({ "brand": "clinelle", "productname": spliteHere[i] })
                                //break;     
                            }
                        }
    
                        //finalArrayToCheck.push()
    
                        break;
    
                    case 1:
    
                        //console.log('CASE 1 = j is > ', j);
    
                        var stringhere = "Triple C Lightning Liquid,Lightning Liquid,Triple C Lightning Foam,One Step Green Hero Calming Pad,Light Fit Real Water Toner to Cream,Jumbo Ultimate Moisturizing Honey Overnight Mask,Acne Pimple Master Patch,Holy Moly Snail Mask,Ultimate Moisturizing Honey Overnight Mask,One Step Original Clear Pads,AC Collection Blemish Spot Clearing Serum,AC Collection Ultimate Spot Cream,Hyaluronic Acid Hydra Power Essence,Aloe Soothing Sun Cream SPF 50,Oil-Free Ultra Moisturizing Lotion,Hyaluronic Acid Intensive Cream,Step Moisture Up Pad ,Clear Fit Master Patch,Hanbyul Hydrogel Very Simple Pack,Honey Ceramide Full Moisture Cream,Ultimate Nourishing Rice Overnight Spa Mask,Propolis Light Ampoule,Low-pH Good Morning Cleanser,Two in One Poreless Power Liquid,Natural BHA Skin Returning A-Sol,Advanced Snail 92 All In One Cream,Salicylic Acid Exfoliating Cleanser ,Advanced Snail 96 Mucin Power Essence,Centella Water Alcohol-Free Toner,AHA 7 Whitehead Power Liquid,Clear Fit Blemish Cushion,Clear Fit Spot Concealer (Light Beige),Galactomyces 95 Whitening Power Essence,One Step Pimple Clear Pads,One Step Original Clear Pad,AHA/BHA Clarifying Treatment Toner,Centella Blemish Cream,Cooling Aqua Facial Mist,AC Collection Calming Liquid Mild,Aloe Vera Oil-free Moisture Cream,Galactomyces Alcohol-Free Toner,BHA Blackhead Power Liquid,Aloe Vera Oil-Free Soothing Gel,Low PH PHA Barrier Mist,Hyaluronic Acid Hydra Foam Cleanser,Balancium Comfort Ceramide Cream,Hydrogel Very Simple Pack,Lock The Moisture Stick,Sebum Centella Mineral Powder,AC Collection Calming Liquid Intensive,Hydrium Green Tea Aqua Soothing Gel Cream,Hydrium Centella Aqua Soothing Ampoule,Low pH First Cleansing Milk Gel,Low PH Centella Cleansing Powder,Hydrium Triple Hyaluronic Moisture Ampoule ,Hydrium Green Tea Aqua Soothing Gel Cream,Hydrium Centella Aqua Soothing Ampoule,Moisture Power Enriched Cream,Centella Blemish Ampoule,AHA/BHA Clarifying Treatment Toner,PHA Moisture Renewal Power Cream,Honey Ceramide Eye Cream,Galactomyces 95 Tone Balancing Essence,Natural BHA Skin Returning Emulsion,BHA Summer Pore Minish Serum,BHA Blackhead Power Cream,Salicylic Acid Daily Gentle Cleanser,Make Me Lovely Cream,Low PH BHA Overnight Mask,Mela 14 White Ampule,AC Collection Calming Foam Cleanser";
    
                        stringhere = stringhere.toLowerCase();
    
                        var spliteHere = stringhere.split(",");
    
                        var arrayresult = [];
    
                        for (var i = 0; i < spliteHere.length; i++) {
    
                            var splitfound = spliteHere[i].match(regexParameter); // [] or ['','']
    
                            if(splitfound!=null){
    
                            if(splitfound.length==1){
    
    //                        if (spliteHere[i].match(regexParameter)) {
    
                                arrayresult.push(spliteHere[i])
    
                                //console.log('\n'+kkk+': kkk> BRAND IS cosrx, product is >>', arrayresult)
    
                                finalArrayToCheck.push({ "brand": "cosrx", "productname": spliteHere[i] })
    
                                //break;     
                            }else if(splitfound.length>1){
    
                                splitfound.forEach(el=>{
    
                                    finalArrayToCheck.push({ "brand": "cosrx", "productname": el.toString() })
                                })
    
    
                            }else{
                                //console.log('\n'+kkk+': kkk>NOT MATCH NIGE')
                            }
    
                            }//end of null
                        }
    
                        break;
    
                    // break;
    
                    case 3:
                        //console.log('CASE 3 = j is > ', j);
    
                        break;
    
    
                    case 4:
    
                       // console.log('CASE 4 = j is > ', j, " cetaphil");
    
                        var stringhere = "PHA Moisture Renewal Power Cream,Honey Ceramide Eye Cream,Galactomyces 95 Tone Balancing Essence,Natural BHA Skin Returning Emulsion,BHA Summer Pore Minish Serum,BHA Blackhead Power Cream,Salicylic Acid Daily Gentle Cleanser,Make Me Lovely Cream,Salicylic Acid Daily Cleanser Cetaphil,Low PH BHA Overnight Mask,Mela 14 White Ampule,AC Collection Calming Foam Cleanser";
    
                        stringhere = stringhere.toLowerCase();
    
                        var spliteHere = stringhere.split(",");
    
                        var arrayresult = [];
    
                        for (var i = 0; i < spliteHere.length; i++) {
    
                            var splitfound = spliteHere[i].match(regexParameter); // [] or ['','']
    
                            if(splitfound!=null){
    
                            if(splitfound.length==1){
                            //if (spliteHere[i].match(regexParameter)) {
    
                                //if we have 2 match, cannot just push. 
    
    
                                arrayresult.push(spliteHere[i])
    
                                //console.log('\n'+kkk+': kkk>BRAND IS cetaphil, product is ', arrayresult)
    
                                finalArrayToCheck.push({ "brand": "cetaphil", "productname": spliteHere[i] })
    
                                //break;     
                            }else if(splitfound.length>1){
    
                                splitfound.forEach(el=>{
    
                                    finalArrayToCheck.push({ "brand": "cetaphil", "productname": el.toString() })
                                })
    
    
                            }else{
                                //console.log('\n'+kkk+': kkk>NOT MATCH NIGE')
                            }
                        }// end of null
                        }
    
                        //console.log('\n\n'+kkk+': kkk> UPDATE ARRAY >> ',JSON.stringify(finalArrayToCheck) +'\n\n');
    
                        break;
    
    
    
                }
    
                if (brandNameParamExist) {
    
                    break; //break while loop
                }
    
                if (j >= 5) { //this depends on letter size, //variable. 
    
                    //console.log('BREAK')
                    break;
                }
    
                j++;
    
            }
    
            if(finalArrayToCheck.length<1){
    
                return null;
            }else{
            
                return finalArrayToCheck;
    
            }
    
    
        }



const Get_ProductName_C = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Get_ProductName_C
