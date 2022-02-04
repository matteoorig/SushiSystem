import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Page1text from '../components/page1text';
import SushiClub from '../components/SushiClub';



const Tutorial1 = ()=>{
    return(
        
        <ImageBackground style={{height:'100%', position:'relative'}} source={require('../img/sushiBack.jpg')}>
            <View style={{width:'100%', height:'100%',position:'absolute', backgroundColor:'black', opacity:0.5}}></View>
            <SushiClub/>
            <Page1text height={'50%'} width={'100%'}/>
        </ImageBackground>
        
    );
}

 
export default Tutorial1;