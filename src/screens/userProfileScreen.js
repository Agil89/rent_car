
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux';



export const UserProfileScreen = () =>{
    const [fullname, setFullname] = useState('Agil Makhmudov')
    const [age, setAge] = useState("32")
    const [address, setAddress] = useState("Azerbaijan,Baku city,Bakikhanov 34/7")
    const [number, setNumber] = useState("+994 70 8278977")
    const mode = useSelector(state =>state.modeReducer.mode)
    return(
        <View style={[styles.container,{backgroundColor: mode==='lightMode'? 'white' : 'black'}]}>
            <View>
                <Image style={styles.image} source={require("./../assets/images/profile.jpeg")} />
            </View>
            <View>
                <View style={[styles.inputView,{color: mode==='lightMode'? 'black' : 'white'}]}>
                    <View>
                        <Text style={[styles.titleOfInput,{color: mode==='lightMode'? 'black' : 'white'}]}>
                            Fullname:
                        </Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",marginRight:30}}>
                        <TextInput
                        style={[styles.fullnameInput,{color: mode==='lightMode'? 'black' : 'white'}]}
                        value={fullname}
                        onChangeText={(text)=> setFullname(text)}/>
                        <Icon color={mode==='lightMode'? 'black' : 'white'} name='edit' size={24} />
                    </View>
                    
                </View>
                
            </View>
            <View>
                <View style={styles.inputView}>
                    <View>
                        <Text style={[styles.titleOfInput,{color: mode==='lightMode'? 'black' : 'white'}]}>
                            Age:
                        </Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",marginRight:30}}>
                        <TextInput
                        style={[styles.fullnameInput,{color: mode==='lightMode'? 'black' : 'white'}]}
                        value={age}
                        maxLength={2}
                        onChangeText={(age)=> setAge(age)}/>
                        <Icon color={mode==='lightMode'? 'black' : 'white'} name='edit' size={24} />
                    </View>
                    
                </View>
                
            </View>
            <View>
                <View style={styles.inputView}>
                    <View>
                        <Text style={[styles.titleOfInput,{color: mode==='lightMode'? 'black' : 'white'}]}>
                            Phone number:
                        </Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",marginRight:30}}>
                        <TextInput
                        style={[styles.fullnameInput,{color: mode==='lightMode'? 'black' : 'white'}]}
                        value={number}
                        onChangeText={(number)=> setNumber(number)}/>
                        <Icon color={mode==='lightMode'? 'black' : 'white'} name='edit' size={24} />
                    </View>
                    
                </View>
                
            </View>
            <View>
                <View style={styles.inputView}>
                    <View>
                        <Text style={[styles.titleOfInput,{color: mode==='lightMode'? 'black' : 'white'}]}>
                            Address:
                        </Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",marginRight:30}}>
                        <TextInput
                        style={[styles.fullnameInput,{color: mode==='lightMode'? 'black' : 'white'}]}
                        value={address}
                        onChangeText={(address)=> setAddress(address)}/>
                        <Icon color={mode==='lightMode'? 'black' : 'white'} name='edit' size={24} />
                    </View>
                    
                </View>
                
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width:"100%",
        height:250
    },
    
    inputView:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomColor:"#777",
        borderBottomWidth:1,
        justifyContent:"space-between"
    },
    fullnameInput:{
        fontWeight:"bold"
    },
    titleOfInput:{
        textAlign:"left",
        marginLeft:30
    }
})



