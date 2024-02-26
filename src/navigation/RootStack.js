import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen, HomeScreen } from '../screens';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
