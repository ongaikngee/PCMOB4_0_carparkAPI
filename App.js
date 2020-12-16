import React from 'react';
import {View, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CarparkStack from "./screen/CarparkStack";

const Stack = createStackNavigator();
const InnerStack = createStackNavigator();

function AddScreen(){
  return(
    <View>
      <Text>Add Screen</Text>
    </View>
  );
}



export default function app(){
  return(
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="Carpark Stack" component={CarparkStack} />
      <Stack.Screen name="Add Carpark" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}