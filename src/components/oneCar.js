import { Text, View, StyleSheet, Image, Button } from 'react-native'
import React, { Component } from 'react'
import { DetailScreen } from '../screens/detailScreen'
import { useNavigation } from '@react-navigation/native';
import Animated,{FadeInUp,FlipInXUp} from "react-native-reanimated";


export const OneCar =({item,index})=>{
  const navigation = useNavigation();
    return (
      <Animated.View 
      entering={FadeInUp.delay(index * 500)} 
      style={styles.container} >
        <View>
          <View style={styles.carName} >
            <Text style={styles.allCars}>
              {item.marka} {item.model}
            </Text>
            <Text style={styles.allCars}>
              {item.year}
            </Text>
          </View>
          <View style={styles.carName} >
          <Text style={styles.allCars} >
              {item.fuel}
            </Text>
            <Text style={styles.allCars} >
              {item.transmission}
            </Text>
          </View>
        </View>
        <View>
          <Image style={styles.image} source={{uri:`http://10.0.2.2:8000${item.image}`}}  />
        </View>
        <View>
          <Button title="Rent" onPress={() => navigation.navigate("DetailPage",{item})} />
        </View>
      </Animated.View>
    )
  }


  const styles = StyleSheet.create({
    carName:{
      justifyContent:'space-between',
      flexDirection:'row'
    },
    container:{
      marginBottom:10,
      padding:20,
      backgroundColor:'#d9d9d9',
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 1
      }

    },
    image:{
      width:'100%',
      height:150
    },
    allCars:{
      fontWeight:'bold',
      fontSize:20
    }
});