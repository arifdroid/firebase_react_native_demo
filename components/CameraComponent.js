import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import {RNCamera} from 'react-native-camera';

export default class CameraComponent extends React.Component {
    render() {
        return (
            <View style={{ flex:1, backgroundColor:'black'}}>
                <RNCamera
                  style={{flex:1, justifyContent:'flex-end',alignItems:'center'}}
                  type={RNCamera.Constants.Type.front}                
                />
                <View style={{flex:0,flexDirection:'row', justifyContent:'center'}}>
                    <TouchableOpacity
                    style={{flex:0,backgroundColor: '#fff',borderRadius: 5,
                    padding: 15,
                    paddingHorizontal: 20,
                    alignSelf: 'center',
                    margin: 20,}}
                    >
                    
                        <Text style={{fontSize:14}}>SNAP</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
        )
    }
}
