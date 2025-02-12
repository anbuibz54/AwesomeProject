import  * as React from 'react';
import { View,Text } from 'react-native';
import { RootStackParamList } from '../navigations/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList,'home'>;
export default function Home(props:Props){
    const user = props.route.params?.user;
    React.useEffect(()=>{
    },[]);
    return(
        <View>
            <Text>Remote Name</Text>
            {
                user && (
                    <View style={{display:'flex',flexDirection:'column'}}>
                    <Text style={{fontSize:20,fontWeight:700}}>User: {user.name}</Text>
                    <Text style={{fontSize:16,fontWeight:700}}>Tdee: {user.tdee}</Text>
                    </View>
                )
            }
        </View>
    )
}