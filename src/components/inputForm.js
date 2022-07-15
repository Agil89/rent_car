import { Text, View, TextInput, StyleSheet,ScrollView} from 'react-native'
import React, { useState } from 'react'


export const InputForm = ()=> {

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
  
    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState('');

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        
        if (val.length === 0) {
          setEmailValidError('email address must be enter');
        } else if (reg.test(val) === false) {
          setEmailValidError('enter valid email address');
        } else if (reg.test(val) === true) {
          setEmailValidError('');
        }
        };

    return (
      
          <View style={styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Fullname"
            value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Phone Number"
                keyboardType="numeric"
            />
            <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => {
            setEmail(value);
            handleValidEmail(value);
            }}
            />
         </View>
    )
  }


  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:"80%"
    },
    container:{
        justifyContent:"center",
        alignItems:"center",
    }
  });