
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { CarInfo } from '../components/carInfo';
import { DatePick } from '../components/datePicker';
import { InputForm } from '../components/inputForm';
import { SliderImage } from './../components/slider'


export const DetailScreen = ({route}) =>{
    const item = route.params.item
    console.log(item);
    return(
        <SafeAreaView style={styles.container} >
            <ScrollView >
                <SliderImage />
                <CarInfo item={item} />
                <InputForm />
                <DatePick price={item.price}/>
            </ScrollView>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    }
})