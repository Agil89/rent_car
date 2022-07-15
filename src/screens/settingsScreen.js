
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import SwitchMode from '../components/switchMode';


export const SettingsScreen = () =>{

    const mode = useSelector(state =>state.modeReducer.mode)
    console.log(mode);
    return(
        <View style={[styles.container,{backgroundColor: mode==='lightMode'? 'white' : 'black'}]}>

            <Text style={{color: mode==='lightMode'? 'black' : 'white'}}>Change background mode</Text>
            <SwitchMode />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:10,
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'center',
        paddingLeft:20,
      },
});