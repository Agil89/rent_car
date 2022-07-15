import { Text, View, Button, StyleSheet,TouchableOpacity, Modal, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

export const DatePick = ({price}) => {
    const price_per_day = parseInt(price)
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [date2, setDate2] = useState(new Date())
    const [open2, setOpen2] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    var days = Math.floor((date2-date) / (1000 * 60 * 60 * 24))
    if (days === 0){
        days = 1
    }
    var total = days * price_per_day
    
    if (total === 0){
        total = price_per_day
    }
    
    const title = "Rent car with total price: " + total.toString() +"$" + "\n" + "(for " + days + " day)"
    return (
      <View  style={styles.container}>
          <View style={styles.pickerContainer}>
          <View style={styles.picker}>
              <View style={styles.selectedDate}>
                <Text numberOfLines={1} style={styles.selectedText} >Selected date from:</Text>
                <Text style={styles.selectedText} >{moment(date).format('YYYY-MM-DD')}</Text>
              </View>
          
            <Button title={"Select start date"} onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                minimumDate={new Date()}
                onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                setDate2(date)
                
                }}
                onCancel={() => {
                setOpen(false)
                }}
            />
          </View>
          
          <View style={styles.picker}>
             <View style={styles.selectedDate}>
                <Text numberOfLines={1} style={styles.selectedText} >Selected date to:</Text>
                <Text style={styles.selectedText} >{moment(date2).format('YYYY-MM-DD')}</Text>
              </View>
            <Button title="Select fin date" onPress={() => setOpen2(true)} />
            <DatePicker
                modal
                open={open2}
                date={date2}
                minimumDate={date}
                onConfirm={(date2) => {
                setOpen2(false)
                setDate2(date2)
                console.log(Math.floor((date2-date) / (1000 * 60 * 60 * 24)));
                }}
                onCancel={() => {
                setOpen2(false)
                }}
            />
          </View>
          
          </View>
            <TouchableOpacity 
            style={styles.rentButton} 
            onPress={() => setModalVisible(true)}
            >
                <Text numberOfLines={2} style={styles.rentButtonText}>{title}</Text>
            </TouchableOpacity>
            <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>We get your request for rent. Our manager will contact with you.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible)
                navigation.replace("Main")}}
            >
              <Text style={styles.textStyle}>Go to Main page</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
    },
    pickerContainer:{
        
        flexDirection:"row",
        justifyContent:"space-around"
    },
    picker:{
        marginTop:5,
        width:"39%",
    },
    selectedDate:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    selectedText:{
        fontWeight:"bold",
        fontSize:16
    },
    rentButton:{
        height: 100,
        paddingTop:10,
        padding:20
    },
    rentButtonText:{
        textAlign:"center",
        padding:10,
        fontSize:20,
        fontWeight:"bold",
        backgroundColor:"#4E8CFE",
        color:"white"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

})