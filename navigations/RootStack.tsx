import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
export type RootStackParamList ={
    ['home']:undefined,
}
export default function RootStack() {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
      <Stack.Navigator
        initialRouteName={'home'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'home'} component={Home} />
      </Stack.Navigator>
    );
  }