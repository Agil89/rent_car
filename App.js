/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//  import type {Node} from 'react';
 import 'react-native-gesture-handler'
 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import {SafeAreaView,StyleSheet} from 'react-native';
 import { Provider } from 'react-redux'
 import store from './src/store'
import { MainStackNavigator } from './src/navigation/AppNavigation';
 
 
 
 
 const App = () => {
   
   return (
     <Provider store={store}>
       <SafeAreaView style={styles.safeArea}>
         <NavigationContainer>
           <MainStackNavigator />
         </NavigationContainer>
       </SafeAreaView>
     </Provider>
   );
 };
 
 const styles = StyleSheet.create({
   safeArea:{
     flex:1
   }
 });
 
 export default App;
 