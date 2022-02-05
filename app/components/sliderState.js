import { useEffect, useRef , useState} from 'react';
import { ImageBackground, StyleSheet, Text, View , Image, TouchableWithoutFeedback, Animated} from 'react-native';
import { TouchableOpacity } from 'react-native-web';



const slider = ({width, height, state, animateFrom}) =>{

    const [animatedStart, setAnimatedStart] = useState(new Animated.Value(animateFrom));
    
    useEffect(() => {
      Animated.timing(animatedStart, {
          toValue: state,
          duration: 800,
          useNativeDriver:false,
      }).start();
    }, []);

    return(
   <View style={{width:width, height:height, borderRadius:45, marginTop:40}}>
       <View style={{backgroundColor:'white', width:'100%', height:'100%', opacity:0.3, borderRadius:45, position:'relative'}}></View>
       <Animated.View style={{width:animatedStart, height:'100%', backgroundColor:'white', position:'absolute', borderRadius:45}}></Animated.View>
       
   </View>
    );
}

export default slider;