import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

import {RNCamera} from 'react-native-camera';

import RNMLkit from 'react-native-firebase-mlkit';
//import console = require('console');

export default class TestCamera2 extends Component {
    
    constructor(){
        super();

        this.state={


        }

    }


    _snapProcess=async()=>{

        if(this.camera){

            const options = { quality: 0.5, base64: true,  };

            const data = await this.camera.takePictureAsync(options);

            //var deviceTextRecognition3 = await RNMLkit.deviceTextRecognition(data.uri);

            var deviceTextRecognition3 = await RNMLkit.cloudTextRecognition(data.uri);
            console.log('check >> '+ JSON.stringify(deviceTextRecognition3));





        }


    }
    
    
    render() {
        return (
            <View style={{flex:1}}>
            <View style={{flex:1}}>
            <RNCamera
            
            ref={(ref)=>{this.camera = ref}}
            style={{ flex: 1, alignItems: 'center' }}
            type={RNCamera.Constants.Type.back}
            //{/*onTextRecognized={}*/}
            
        
            
            />
            <TouchableOpacity
            style={{
                flex: 0, backgroundColor: '#fff', borderRadius: 5,
                padding: 15,
                paddingHorizontal: 20,
                alignSelf: 'center',
                margin: 20,
            }}

            onPress={()=>{

                this._snapProcess();    

            }}
            
            >
            
            
            
            <Text>CAPTURE</Text>
            </TouchableOpacity>
            
            
            </View>

            </View>
        )
    }
}
