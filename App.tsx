import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen/HomeScreen';
import Chitietsp from './src/Chitietsp/Chitietsp';
import Dathang from './src/DathangTsx/Dathang';
import LoginScreen from './src/LoginScreen';
import {Category} from './src/Category';
import Product from './src/Product';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const StackScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./asset/icon4.png')}
              style={{height: 30, width: 30}}
              resizeMode="stretch"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./asset/icon5.png')}
              style={{height: 30, width: 30}}
              resizeMode="stretch"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={StackScreen} />
        <Stack.Screen name="Chitietsp" component={Chitietsp} />
        <Stack.Screen name="Dathang" component={Dathang} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
