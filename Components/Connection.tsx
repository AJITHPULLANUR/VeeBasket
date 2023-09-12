import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Delivery from '../Components/Delivery';
import History from '../Components/History';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Connection = () => {
  return (
      <Tab.Navigator
        initialRouteName="Delivery"
       
        screenOptions={{headerShown: false, tabBarActiveTintColor: 'black',tabBarLabelStyle:{fontSize:11,}}}
        
        >
          

        <Tab.Screen name="Delivery" component={Delivery} options={{
          tabBarIcon:({focused})=>{
            return(
              <Image    source={require('../Icons/fast-delivery.png')}
              style={{tintColor: focused ? 'black' : 'grey',width:32,height:30}}
            />

            )
          }
        }} />
        <Tab.Screen name="History" component={History}  options={{
          tabBarIcon:({focused})=>{
            return(
              <Image    source={require('../Icons/list.png')}
              style={{tintColor: focused ? 'black' : 'grey',width:27,height:27}}
            />

            )
          }
        }}  />
      </Tab.Navigator>

      
  );
};

export default Connection;

const styles = StyleSheet.create({});
