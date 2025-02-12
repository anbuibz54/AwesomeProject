import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
export type RootStackParamList ={
    ['home']:{user:any} |undefined,
}
type Props  = {
  user:any
}
export default function RootStack(props:Props) {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
      <Stack.Navigator
        initialRouteName={'home'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen initialParams={{user: props.user}} name={'home'} component={Home} />
      </Stack.Navigator>
    );
  }