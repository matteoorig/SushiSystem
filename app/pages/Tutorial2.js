import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View , Image, TouchableWithoutFeedback, Animated} from 'react-native';
import AppLoading from 'expo-app-loading'; //expo install expo-app-loading
import {
    useFonts,
    Cabin_400Regular,
} from '@expo-google-fonts/cabin';
import { AntDesign } from '@expo/vector-icons'; 
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


import WrapperTutorial from "../components/wrapperTutorial";
import Page2text from '../components/page2text';
import Mslider from '../components/sliderState';
import { useRef, useState } from 'react';





const Tutorial2 = (props) =>{

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
                setTutorialState(0);
                break;
          }
    }

    const configGesture = {
        velocityThreshold: 0,
        directionalOffsetThreshold: 80
    };
    

    let [fontsLoaded] = useFonts({
        Cabin_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
    return(
        <ImageBackground style={{height:'100%', position:'relative', justifyContent:'center', alignItems:'center'}} blurRadius={3} source={require('../img/sushiBack.jpg')}>
        <View style={{width:'100%', height:'100%',position:'absolute', backgroundColor:'black', opacity:0.6}}></View>
            <WrapperTutorial width={310} height={543} position={'relative'}/>

            {tutorialState == 0 ? (<Page2text width={'100%'} position={'absolute'} top={150} />) : (<View></View>)}
            


            {tutorialState == 0 ? (<Mslider width={310} height={4} state={80} animateFrom={0}/>):(<View></View>)}
            {tutorialState == 1 ? (<Mslider width={310} height={4} state={180} animateFrom={80}/>):(<View></View>)}
            {tutorialState == 2 ? (<Mslider width={310} height={4} state={280} animateFrom={180}/>):(<View></View>)}
            <GestureRecognizer config={configGesture} onSwipeLeft={()=>checkState()} style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
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