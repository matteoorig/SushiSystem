import { ImageBackground, StyleSheet, Text, View , Image, TouchableWithoutFeedback} from 'react-native';

const slider = ({width, height, state}) =>{
    return(
   <View style={{width:width, height:height, borderRadius:45, marginTop:40}}>
       <View style={{backgroundColor:'white', width:'100%', height:'100%', opacity:0.3, borderRadius:45, position:'relative'}}></View>
       <View style={{width:state, height:'100%', backgroundColor:'white', position:'absolute', borderRadius:45}}></View>
   </View>
    );
}

export default slider;