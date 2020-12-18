import React from 'react';
import {View, Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CarparkStack from "./screen/CarparkStack";
import AddScreen from "./screen/AddScreen";
import SubScreen from "./screen/SubScreen";

const Stack = createStackNavigator();

export default function app(){
  return(
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="Carpark Stack" component={CarparkStack} />
      <Stack.Screen name="Add Carpark" component={AddScreen} />
      <Stack.Screen name="2nd Screen" component={SubScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}