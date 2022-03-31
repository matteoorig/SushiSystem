import { StatusBar } from 'expo-status-bar';

import { ImageBackground, StyleSheet, Text, View , Image, TouchableWithoutFeedback, Animated, TextInput} from 'react-native';
import AppLoading from 'expo-app-loading'; //expo install expo-app-loading
import {
    useFonts,
    Cabin_400Regular,
} from '@expo-google-fonts/cabin';
import { AntDesign } from '@expo/vector-icons'; 
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { w3cwebsocket as W3CWebSocket } from "websocket";


import WrapperTutorial from "../components/wrapperTutorial";
import Page2text from '../components/page2text';
import Page3text from '../components/page3text';
import Page4text from '../components/page4text';

import Mslider from '../components/sliderState';
import { useEffect, useRef, useState } from 'react';


const configGesture = {
    velocityThreshold: 0,
    directionalOffsetThreshold: 80
};

const navigateToNew = (props) =>{
    props.navigation.navigate('Home');
}



const Tutorial2 = (props) =>{
    const client = new W3CWebSocket('ws://localhost:8888');
    useEffect(()=>{
      
        client.onopen = () => {
            const obj = {
                'cmd': "client"
            }
            client.send(obj);
        };
    
        client.onmessage = (message) => {
            const result = JSON.stringify(message.data);
            const command = result.split(';');
            
        };
        client.onerror = function() {
            console.log('Connection Error');
            //qui c'è da mettere un popup che dica che
        };
    
    })
    const [tutorialState, setTutorialState] = useState(0);



    function checkState(){
        switch (tutorialState) {
            case 0:
                //esce prima

                
                setTutorialState(1);

                //entra l'altra
                break;
            case 1:
                setTutorialState(2);
                break;
            case 2:
                console.log("si gode")
                navigateToNew(props);
                setTutorialState(0);
                break;
          }
    }



    let [fontsLoaded] = useFonts({
        Cabin_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
    return(
        <ImageBackground style={{height:'100%', position:'relative', justifyContent:'center', alignItems:'center'}} blurRadius={3} source={require('../img/sushiBack.jpg')}>
        <View style={{width:'100%', height:'100%',position:'absolute', backgroundColor:'black', opacity:0.6}}></View>
            {tutorialState == 0 ? (<WrapperTutorial width={310} height={543} position={'relative'} />):(null)}
            {tutorialState == 1 ? (<WrapperTutorial width={310} height={543} position={'relative'} />):(null)}
            {tutorialState == 2 ? (<WrapperTutorial width={310} height={543} position={'relative'} />):(null)}

            {tutorialState == 0 ? (<Page2text width={'100%'} position={'absolute'} top={200} />) : (<View></View>)}
            {tutorialState == 1 ? (<Page3text width={'100%'} position={'absolute'} top={200} />) : (<View></View>)}
            {tutorialState == 2 ? (<Page4text width={'100%'} position={'absolute'} height={543} top={135} />) : (<View></View>)}


            {tutorialState == 0 ? (<Mslider width={310} height={4} state={80} animateFrom={0}/>):(<View></View>)}
            {tutorialState == 1 ? (<Mslider width={310} height={4} state={180} animateFrom={80}/>):(<View></View>)}
            {tutorialState == 2 ? (<Mslider width={310} height={4} state={280} animateFrom={180}/>):(<View></View>)}
            <GestureRecognizer config={configGesture} onSwipeLeft={()=>checkState()} style={{width:'100%', height:'95%', justifyContent:'flex-end', alignItems:'center', position:'absolute'}}>
                <Animated.View  style={{position:'relative'}}>
                    <Image source={require('../img/manoSwipe.png')} style={{height:70, width:70, resizeMode:'contain', marginTop:50}}/>
                    <AntDesign name="doubleleft" size={24} color="white" style={{position:'absolute', top:40, left:-10}}/>
                </Animated.View>
            </GestureRecognizer>
            
            
                

        </ImageBackground>
    );
    }
}



export default Tutorial2;