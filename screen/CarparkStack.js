import React from 'react';
import {Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import CarparkScreen from "../screen/CarparkScreen"

const InnerStack = createStackNavigator();

export default function CarparkStack(){

    return(
        <InnerStack.Navigator>
            <InnerStack.Screen name="Carpark Availabilty" component={CarparkScreen} />
        </InnerStack.Navigator>
    );
}