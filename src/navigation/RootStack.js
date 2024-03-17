import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen, HomeScreen } from '../screens';

const Stack = createNativeStackNavigator();

const options = {
  headerStyle: {
    backgroundColor: '#1a7c89',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={options} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
