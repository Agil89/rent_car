import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export const CarInfo = ({item}) => {
    return (
      <View style={styles.container} >
        <View style={styles.oneView}>
            <Text style={styles.infoName}>
                Model
            </Text>
            <Text style={styles.infoData}>
                {item.marka}
            </Text>
        </View>
        <View style={styles.borderContainer}>
        <View style={styles.border} />
        </View>
        <View style={styles.oneView} >
            <Text style={styles.infoName} >
                Make of car
            </Text>
            <Text style={styles.infoData}>
                {item.model}
            </Text>
        </View>
        <View style={styles.borderContainer}>
        <View style={styles.border} />
        </View>
        <View style={styles.oneView} >
            <Text style={styles.infoName} >
                Year
            </Text>
            <Text style={styles.infoData} >
                {item.year}
            </Text>
        </View>
        <View style={styles.borderContainer}>
        <View style={styles.border} />
        </View>
        <View style={styles.oneView} >
            <Text style={styles.infoName} >
                Fuel type
            </Text>
            <Text style={styles.infoData} >
                {item.fuel}
            </Text>
        </View>
        <View style={styles.borderContainer}>
        <View style={styles.border} />
        </View>
        <View style={styles.oneView} >
            <Text style={styles.infoName} >
                Type of gearbox
            </Text>
            <Text style={styles.infoData} >
                {item.transmission}
            </Text>
        </View>
        <View style={styles.borderContainer}>
        <View style={styles.border} />
        </View>
        <View style={styles.oneView} >
            <Text style={styles.infoName} >
                Count of seats
            </Text>
            <Text style={styles.infoData} >
                4
            </Text>
        </View>
        <View style={styles.borderContainer}>
        <View style={styles.border} />
        </View>
        <View style={styles.oneView} >
            <Text style={styles.infoName} >
                Price(for 24 hours)
            </Text>
            <Text style={styles.infoData} >
                {item.price}$
            </Text>
        </View>
        <View style={styles.borderContainer}>
        <View style={styles.border} />
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    container:{
        marginTop:5
        
    },
    oneView:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginBottom:2,
        width:"90%",
        marginLeft:"5%",
        
        
    },
    infoName:{
        width:'40%',
        fontWeight:"bold",
        
        
    },
    infoData:{
        width:'40%',
        textAlign:'right',
        fontWeight:"bold",
        
    },
    borderContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    border:{
        flex:0.8,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        opacity:0.3
    
      },
})