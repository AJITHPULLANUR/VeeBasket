import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home';
import Connection from './Components/Connection';
import 'react-native-gesture-handler'
import Delivery from './Components/Delivery';
import Farsa from './RouteComponents/Farsa';
import Albaik from './RouteComponents/Albaik';
import Cart from './Components/Cart';
import Order from './Components/Order';
import { CartProvider } from './Components/ShopContext';
import Midway from './RouteComponents/Midway';
import Berry from './RouteComponents/Berry';
import Malbar from './RouteComponents/Malbar';
import Kouser from './RouteComponents/Kouser';
import Nahdi from './RouteComponents/Nahdi';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import More from './RouteComponents/More';

const App = () => {
  const Stack=createStackNavigator();
  return (
<CartProvider>
   
  <NavigationContainer >
    <StatusBar backgroundColor="yellow" barStyle="dark-content" />
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='connection' component={Connection}/>
    <Stack.Screen name='farsa' component={Farsa}/>
    <Stack.Screen name='albaik' component={Albaik}/>
    <Stack.Screen name='cart' component={Cart}/>
    <Stack.Screen name='Completed Orders' component={Order}/>
    <Stack.Screen name='Midway' component={Midway}/>
    <Stack.Screen name='Malbar' component={Malbar}/>
    <Stack.Screen name='Kouser' component={Kouser}/>
    <Stack.Screen name='Nahdi' component={Nahdi}/>
    <Stack.Screen name='Berry' component={Berry}/>
    <Stack.Screen name='more' component={More}/>






    </Stack.Navigator>


  </NavigationContainer>
  </CartProvider>

  )
}

export default App

const styles = StyleSheet.create({})