import React from 'react';
import { MainScreen } from '../screens/mainScreen';
import { UserProfileScreen } from '../screens/userProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RentScreen } from '../screens/rentScreen';
import { CustomDrawer } from '../components/customDrawer';
import { AboutUsScreen } from '../screens/aboutUsScreen';
import { SettingsScreen } from '../screens/settingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import { DetailScreen } from '../screens/detailScreen';






const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();



export const DrawerRoute = () =>{
        return (
            <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
              <Drawer.Screen name="Main" component={MainScreen} options={{
                drawerIcon:({color}) =>(
                  <Ionicons name="home-outline" size={22} color={color} />
                )
              }} />
              <Drawer.Screen name="Profile" component={UserProfileScreen} options={{
                drawerIcon:({color}) =>(
                  <Feather name="user" size={22} color={color} />
                )
              }} />
              <Drawer.Screen name="About us" component={AboutUsScreen} options={{
                drawerIcon:({color}) =>(
                  <Ionicons name="information-circle-outline" size={22} color={color} />
                )
              }} />
              <Drawer.Screen name="Settings" component={SettingsScreen} options={{
                drawerIcon:({color}) =>(
                  <Feather name="settings" size={22} color={color} />
                )
              }} />
             
            </Drawer.Navigator>
          );
}

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName=''>
        <Stack.Screen
          name="Root"
          component={DrawerRoute}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Main"
        component={MainScreen} />
        <Stack.Screen name="RentPage" component={RentScreen} />
        <Stack.Screen
        name="Detail"
        component={MainScreen} />
        <Stack.Screen name="DetailPage" component={DetailScreen} />
      </Stack.Navigator>
    )
}