import React, { Component } from 'react'
import { Text, View, ToastAndroid, ScrollView, FlatList, Modal,ImageBackground } from 'react-native'

import cheerio from 'react-native-cheerio'

import { _fungsi_prosesData } from 'firebase_demo/component test/Process_single_data.js';
import { Fonts } from 'firebase_demo/src/utils/Font';

export default class View_Product extends Component {
    constructor(props) {
        super(props)
        this.state = {

            status: 'processing..',
            passedProductName: props.navigation.state.params.productname,
            passedBrandName: props.navigation.state.params.brandname,
            dataFlatList: [],
            //            dataMock_2:[{ ingredient:'water', cir:'A' ,ewg:1 } , { ingredient:'check', cir:'C', ewg:2 }],
            dataMock_2: [{ "ingredient": 'water', "cir": 'A', "ewg": 1 }, { "ingredient": 'check', "cir": 'C', "ewg": 2 }],


        }

    }

    componentWillMount() {

        var brand_received = this.state.passedBrandName;
        var prodctname_received = this.state.passedProductName;

        while (prodctname_received.includes(" ")) {
            prodctname_received = prodctname_received.replace(" ", "-")
        }
        var urlprocess = 'https://www.skincarisma.com/products/' + brand_received + '/' + prodctname_received + '/ingredient_list#info-section';


        this._loadData(urlprocess, brand_received, prodctname_received)

    }


    _loadData = async (urlReceived, brand_received, prodctname_received) => {

        ToastAndroid.show('begin processing... ', ToastAndroid.SHORT);

        console.log('check url 1 == ', urlReceived)

        // datareceived = product name 

        const url = urlReceived;

        var response = await fetch(urlReceived);

        console.log('check response 2 == ', response) //here we can check 

        var final_URL = ''

        if (response.status == 404) {

            console.log('this is fail, can proceed now, process url using puppeteer')

            console.log('betul ke brand dan nama', brand_received, prodctname_received)

            await fetch('https://us-central1-febtestwhatsapp.cloudfunctions.net/testPuppeteer_2', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                'body': JSON.stringify({

                    'data': 'skincarisma' + ' ' + brand_received + ' ' + prodctname_received

                })
            }
            ).then((datathis) => datathis.json())
                .then((datathis2) => {

                    try {

                        console.log('HERE 56 ', datathis2)

                        final_URL = datathis2.data;

                    } catch{


                    }


                }).catch(e => {


                    console.log('HERE 3')

                    console.log(e.code);
                    console.log(e.message);
                    console.log(e.details.foo);



                })

            if (final_URL != '') {

                try {
                    response = await fetch(final_URL);
                } catch (e) {

                    console.log('after fetch error : ', e.toString(), final_URL)
                }
            }



        }


        const htmlString = await response.text();

        const $ = cheerio.load(htmlString);

        const table_ingredient = $('table[class="table table-sm mt-4 ingredients-table"]>tbody>tr');



        // proses data 1st , get all data, string, into array

        var stringIngred_Array = [];

        console.log('\n\n')


        table_ingredient.each((i, element) => {

            var stringingred_3 = $(element).children('.align-middle').text();

            stringIngred_Array.push(stringingred_3);

        })

        //console.log('check ingred_array 3 == ', stringIngred_Array.length())

        // proses data 2nd , prosess string in array, remove \n


        var stringIngred_Array_2 = [];

        //remove \n in every array first 
        stringIngred_Array.forEach((el, i) => {

            //var stringhere = '';

            while (el.includes("\n")) {

                el = el.replace("\n", "");

            }

            //stringhere = el;

            stringIngred_Array_2.push(el)

        }) //finish remove \n


        //proses data 3rd,



        var final_Object = [];

        //var proses_data = new ProsesData;


        stringIngred_Array_2.forEach(el => {

            var objectGot = [];

            objectGot = _fungsi_prosesData(el);


            final_Object.push(objectGot);


        });


        //////////
        var final_Object_2 = [];

        final_Object.forEach((el, i) => {

            var dataaa = el.pop();

            if (i == 0) {

                final_Object_2.push({ "ingredient": 'Ingredient', "cir": ' CIR ', "ewg": ' EWG ' })
            }

            final_Object_2.push(dataaa);

        })

        for (var i = 0; i <= 4; i++) {

            console.log('\n check >> ', JSON.stringify(final_Object_2[i]) + '\n')
        }


        ////////////

        ToastAndroid.show('FINISH processing... ', ToastAndroid.SHORT);

        this.setState({

            status: 'finish processed',
            //dataFlatList:final_Object_2,
            dataMock_2: final_Object_2,

        })

        // final_object, wil contain, the array we need

    }



    //call function here.

    render() {
        return (
            <ImageBackground 
            source={require('firebase_demo/img/background_final.png')}
            style={{flex: 1,width: '100%',height: '100%',}}>

                
                    <Text style={{ alignSelf: 'center', fontFamily:Fonts.LobsterFont, fontSize: 20, color: '#F58181', margin:3, marginTop:50}}>{this.state.passedBrandName}</Text>
                    <Text style={{ alignSelf: 'center', fontFamily:Fonts.LobsterFont, fontSize: 20, color: '#F58181', margin:3 }}>{this.state.passedProductName}</Text>
                    <Text style={{ alignSelf: 'center',color:'rgba(52, 52, 52, 0.6)' , margin:20}}>{this.state.status}</Text>
                    
                    <ScrollView style={{ flex: 1 }}>

                        <FlatList
                            style={{ flex: 1, marginVertical: 10 }}
                            data={this.state.dataMock_2}
                            renderItem={({ item }) => {

                                return (

                                    <View style={{ flexDirection: 'row', backgroundColor: 'rgba(254, 250, 236, 0.6)', margin: 3, padding: 5, marginHorizontal: 10 }}>
                                        <Text style={{ flex: 1, alignSelf: 'center',color:'rgba(52, 52, 52, 0.6)' }}>{item.ewg}</Text>
                                        <Text style={{ flex: 1, alignSelf: 'center',color:'rgba(52, 52, 52, 0.6)' }}>{item.cir}</Text>
                                        <Text style={{ flex: 4, alignSelf: 'center',color:'rgba(52, 52, 52, 0.6)' }}>{item.ingredient}</Text>

                                    </View>


                                )

                            }}


                        />

                    </ScrollView>
          

            </ImageBackground>
        )
    }
}

const mockdata = [{ "ingredient": 'water', 'cir': 2 }, { "ingredient": 'ingredient here', 'cir': 99 }]

