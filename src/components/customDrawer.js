
import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialIcons';



export const CustomDrawer = (props) =>{
    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#E9FFAD'}}>
            <ImageBackground source={require('../assets/images/back1.jpeg')} style={{padding:20}}>
                <Image source={require('../assets/images/profile.jpeg')} style={{height:80,width:80,borderRadius:40,marginBottom:10}} />
                <Text style={{color:'black',fontSize:18}}>
                    Agil Makhmudov
                </Text>
            </ImageBackground>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
      },
});