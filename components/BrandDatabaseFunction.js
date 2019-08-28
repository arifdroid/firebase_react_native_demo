import React from 'react'
import { View, Text } from 'react-native'
//import console = require('console');


export var _fungsiTestHere = (inputCharacter, inputNUmber) => {

    console.log( 'PASESSSSS ===> ' + inputCharacter , inputNUmber)

    if (inputNUmber === 3) {

        switch (inputCharacter) {

            case "a":
                var inputhere = '';

                break;

            case "b":
                var inputhere = '';

                break;

            case "c":
                var inputhere = '';

                break;

        }
    } else if (inputNUmber === 4) {

        switch (inputCharacter) {
        case "a":
        var inputhere = 'ABBA,Abib,Alia,Ambi,Amie,AMPM,ARON,ASAP,ASDA,Aura,Aveo,Avon,Ayan';

        break;
    
        case "b":
        var inputhere = '';

        break;

        }
    } else if (inputNUmber === 5) {

        switch(inputCharacter){

        case "a":
        var inputhere = 'Acnes,Acnol,Acure,Adcos,Aenon,Aerin,Aesop,Ahava,A.H.C,Aiken,AIPPO,Aisti,Allie,Almay,Amaki,Amika,Ampro,Amway,ANGFA,Anjou,Anora,Aquis,Ariul,Aroma,Arosa,Arrow,Artpe,Astor,Atomy,Atrix,Aveda,Avene,Avril,Ayura,Aztec';

        break;
    
        case "b":
        var inputhere = '';

        break;

        case "c":

        console.log('FOUND CHAR AND NUMBER')

        var inputhere = 'Cantu,Carex,Cargo,Cedel,Chame,Chloe,Cinch,Cipla,Citra,Code9,Coney,Coola,CosRX,Cos.W,Coxir,Cremo,Crest,Curel,CURLS,Cutex';

        break;

        }    
    }


    return inputhere;
}






const BrandDatabaseFunction = () => {

}

export default BrandDatabaseFunction
