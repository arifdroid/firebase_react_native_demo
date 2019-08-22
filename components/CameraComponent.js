import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import {RNCamera} from 'react-native-camera';

import RNMLkit from 'react-native-firebase-mlkit';
//import console = require('console');

export default class CameraComponent extends React.Component {

    constructor(){
        super();


    }

    _takeThemPic = async()=>{

        //if(this.camer)
        if(this.camera){

            const options = { quality: 0.5, base64:true, skipProcessing:true, forceOrientation:true};

            const data = await this.camera.takePictureAsync(options);

            const deviceTextRecognition = await RNMLkit.deviceTextRecognition(data.uri);

            console.log('text detected ==>> '+ deviceTextRecognition);
            console.log('text convert ==>> '+ JSON.stringify(deviceTextRecognition));
            

            alert('snapped');
            

        }

    }


    render() {
        return (
            <View style={{ flex:1, backgroundColor:'black'}}>
                <RNCamera

                    ref={ref =>{this.camera = ref}}

                  style={{flex:1, justifyContent:'flex-end',alignItems:'center'}}
                  type={RNCamera.Constants.Type.back}                
                />
                <View style={{flex:0,flexDirection:'row', justifyContent:'center'}}>
                    <TouchableOpacity
                    style={{flex:0,backgroundColor: '#fff',borderRadius: 5,
                    padding: 15,
                    paddingHorizontal: 20,
                    alignSelf: 'center',
                    margin: 20,}}
                   
                    onPress={this._takeThemPic}
                   
                    >
                    
                        <Text style={{fontSize:14}}>SNAP</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
        )
    }
}
