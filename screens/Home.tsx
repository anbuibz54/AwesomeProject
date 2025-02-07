import  * as React from 'react';
import { View,Text } from 'react-native';
import { RootStackParamList } from '../navigations/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList,'home'>;
export default function Home(props:Props){
    React.useEffect(()=>{
        console.log("Home")
    },[])
    return(
        <View>
            <Text>Remote Name</Text>
        </View>
    )
}