import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View , Image, TouchableWithoutFeedback} from 'react-native';

import Page1text from '../components/page1text';
import SushiClub from '../components/SushiClub';

const navigateToNew = (props) =>{
    props.navigation.navigate('Tutorial2');
}

const Tutorial1 = (props)=>{
    return(
        
        <ImageBackground style={{height:'100%', position:'relative', justifyContent:'center', alignItems:'center'}} blurRadius={3} source={require('../img/sushiBack.jpg')}>
            <View style={{width:'100%', height:'100%',position:'absolute', backgroundColor:'black', opacity:0.8}}></View>
            <SushiClub/>
            <Page1text height={'50%'} width={'100%'}/>
            <Image source={require('../img/bottoneSushi.png')} style={{width:352,height:200, resizeMode:'contain', position:'relative'}} />
            <TouchableWithoutFeedback onPress={()=>{navigateToNew(props)}}><View style={{width:150, height:150,position:'absolute', bottom:0, marginBottom:80}}></View></TouchableWithoutFeedback>
        </ImageBackground>
        
    );
}

 
export default Tutorial1;