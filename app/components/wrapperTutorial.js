import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View , Image, TouchableWithoutFeedback, Animated} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';

const wrapper = ({width, height, position, animOut}) =>{

    const [textAreaX, setTextAreaX] = useState(new Animated.Value(animOut));

    //animazione in entrata
    useEffect(() => {
        Animated.timing(textAreaX, {
            toValue: 0,
            duration: 800,
            useNativeDriver:false,
        }).start();
    }, []);
    
    return(
        <Animated.View style={{width:width, height:height, position:position, transform:[{translateX:textAreaX}]}}>
            <LinearGradient colors={['rgba(255,255,255,1)', 'transparent']} style={{width:'100%', height:'100%', borderRadius:40, backgroundColor:'#7D7D7D', opacity:0.4}} blurRadius={2} ></LinearGradient>
        </Animated.View>
    );
}

export default wrapper;
