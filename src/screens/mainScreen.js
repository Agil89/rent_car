
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, FlatList, View, Text } from 'react-native';
import { OneCar } from '../components/oneCar';
import { useDispatch, useSelector } from 'react-redux'
import { loadCars } from '../store/actions/carAction'




export const MainScreen = () => {

    const [images, setImages] = useState([
        require('./../assets/images/car1.jpeg'),
        require('./../assets/images/car2.jpeg'),
        require('./../assets/images/car3.jpeg'),
        require('./../assets/images/car4.jpeg')])

    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(loadCars())
    },[])

    const allCars = useSelector(state =>state.cars.allCars)
    const mode = useSelector(state =>state.modeReducer.mode)
 

    return (
        <SafeAreaView style={[styles.container,{backgroundColor: mode==='lightMode'? 'white' : 'black'}]}>
            {allCars.length === 0 ? <View style={{flex:1}}>
                <Text>Loading</Text></View> :
            <FlatList 
            data={allCars}
            renderItem={({item,index})=> <OneCar item={item} index={index} /> }
            keyExtractor={(car,index) => index} /> }
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },

});