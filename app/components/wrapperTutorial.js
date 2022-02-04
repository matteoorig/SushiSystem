import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View , Image, TouchableWithoutFeedback} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const wrapper = ({width, height, position}) =>{
    return(
        <View style={{width:width, height:height, position:position}}>
            <LinearGradient colors={['rgba(255,255,255,1)', 'transparent']} style={{width:'100%', height:'100%', borderRadius:40, backgroundColor:'#7D7D7D', opacity:0.4}} blurRadius={2} ></LinearGradient>
        </View>
    );
}

export default wrapper;