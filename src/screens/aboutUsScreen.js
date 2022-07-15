import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";


export const AboutUsScreen = () => {

  const mode = useSelector(state =>state.modeReducer.mode)


  return (
    <View style={[styles.container,{backgroundColor: mode==='lightMode'? 'white' : 'black'}]}>
      <View>
        <Image
          style={styles.image}
          source={require("./../assets/images/rentMain.webp")}
        />
      </View>
      <View>
        <Text style={[styles.title,{color: mode==='lightMode'? 'black' : 'white'}]}>Welcome to Rentalcars</Text>
        <Text style={[styles.text,{color: mode==='lightMode'? 'black' : 'white'}]}>
          That wonderful feeling – you start the engine and your adventure
          begins… At Rentalcars.com everything we do is about giving you the
          freedom to discover more. We’ll move mountains to find you the right
          rental car, and bring you a smooth, hassle-free experience from start
          to finish. Here you can find out more about how we work.
        </Text>
       <View>
           <Text style={[styles.contactTitle,{color: mode==='lightMode'? 'black' : 'white'}]}>
               Our contacts
           </Text>
          
       </View>
       <View style={[styles.contactsData,{color: mode==='lightMode'? 'black' : 'white'}]}>
           <Text style={{color: mode==='lightMode'? 'black' : 'white'}}>
               Phone number : 
           </Text>
           <Text style={[styles.contactText,{color: mode==='lightMode'? 'black' : 'white'}]}>
               +994 70 884 84 84
           </Text>
       </View>
       <View style={[styles.contactsData,{color: mode==='lightMode'? 'black' : 'white'}]}>
           <Text style={{color: mode==='lightMode'? 'black' : 'white'}}>
               Email address : 
           </Text>
           <Text style={[styles.contactText,{color: mode==='lightMode'? 'black' : 'white'}]}>
               rentcars@gmail.com
           </Text>
       </View>
       <View style={[styles.contactsData,{color: mode==='lightMode'? 'black' : 'white'}]}>
           <Text style={{color: mode==='lightMode'? 'black' : 'white'}}>
               Address : 
           </Text>
           <Text style={[styles.contactText,{color: mode==='lightMode'? 'black' : 'white'}]}>
               Azerbaijan, c. Baku, Nizami , 34/7
           </Text>
       </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title:{
      fontSize:20,
      fontWeight:"bold",
      textAlign:"center",
      marginTop:15
  },
  text:{
      marginTop:10,
      fontSize:16,
      paddingVertical:3,
      paddingHorizontal:10,
      textAlign:"center"
  },
  contactsData:{
      alignItems:"center",
      flexDirection:"row",
      width:"80%",
      paddingLeft:50
  },
  contactText:{
      alignSelf:"flex-end",
      textAlign:"right",
      paddingLeft:30
  },
  contactTitle:{
      fontSize:20,
      fontWeight:"bold",
      marginVertical:15,
      textAlign:"center"
  }
});
