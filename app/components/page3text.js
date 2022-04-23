import { ImageBackground, StyleSheet, Text, View, TextInput, Animated } from 'react-native';
import { useEffect, useState } from "react";
import AppLoading from 'expo-app-loading'; //expo install expo-app-loading
import {
    useFonts,
    Antic_400Regular
} from '@expo-google-fonts/antic';
import Svg, { Path } from 'react-native-svg'; //expo install react-native-svg


const path = [
   // <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
"M57.7907 2.05191C53.9829 -1.76652 46.3629 -0.111869 40.4472 5.82034C38.3711 7.90229 36.8253 10.1979 35.8553 12.4571L28.8336 12.5526C28.48 12.5571 28.14 12.6981 27.8907 12.9526L0.397775 40.5271C-0.132592 41.0544 -0.132592 41.9181 0.397775 42.4545L17.501 59.6011C18.0313 60.133 18.8926 60.133 19.4184 59.6011L46.9114 32.0311C47.1652 31.7811 47.3057 31.4493 47.3148 31.0947L47.7092 13.7027C47.7228 13.3345 47.5822 12.9753 47.3193 12.7117C47.0564 12.448 46.7028 12.3071 46.3357 12.3117L38.8879 12.4162C39.731 10.8116 40.9005 9.20237 42.3602 7.73864C47.0428 3.04743 53.2214 1.32004 55.8641 3.97476C59.0055 7.12497 56.8931 12.7253 49.8896 19.7394C49.3683 20.2713 49.3683 21.1304 49.8896 21.6623C50.4245 22.1987 51.2857 22.1987 51.8116 21.6623C62.9221 10.5297 60.3246 4.59753 57.7907 2.05191ZM41.2405 25.6989C39.2958 27.6445 36.1544 27.6445 34.2098 25.6989C32.2651 23.7488 32.2651 20.5895 34.2098 18.6439C34.3503 18.503 34.5135 18.3939 34.6721 18.2711C34.7583 20.2122 35.4156 21.9305 36.6893 23.2124C37.9269 24.4534 39.6268 25.1489 41.6168 25.2352C41.4944 25.3943 41.381 25.5534 41.2405 25.6989ZM41.2405 18.6439C42.3058 19.7031 42.7591 21.1213 42.6684 22.5123C41.3402 22.6078 39.7401 22.4305 38.6068 21.2895C37.6458 20.3258 37.265 18.8848 37.3965 17.2165C38.7745 17.1256 40.1843 17.5847 41.2405 18.6439Z",
]


const page3text = ({position, width, top, userClass}) =>{

    const [textAreaX, setTextAreaX] = useState(new Animated.Value(500));

    //animazione in entrata
    useEffect(() => {
        Animated.timing(textAreaX, {
            toValue: 0,
            duration: 500,
            useNativeDriver:false,
        }).start();
    }, []);

    let [fontsLoaded] = useFonts({
        Antic_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
        
    } else {
    return(
        <Animated.View style={{width: width, justifyContent:'center', alignItems:'center', position:position, top:top, transform:[{translateX:textAreaX}]}}>
          <View style={{width:60, height:60, justifyContent:'center', alignItems:'center', marginBottom:45}}>
            <Svg width={60} height={60} viewBox={[0,0,60,60].join(" ")}>
                {path.map((d, key) => <Path d={d}  fill="#FFFFFF" strokeWidth={0.2} key={key}/>)}
            </Svg>
          </View>

            <View style={{width:250, height: 50, position:'relative', marginBottom:20}}>
                <TextInput style={{width:250, height:45, fontSize:25, color:'white', fontFamily:'Antic_400Regular'}} placeholder="N° tavolo" onChangeText={(text) => userClass.setnTavolo(text)} placeholderTextColor='#FFFFFF'/>
                <View style={{width:250, height:3, position:'absolute', bottom:0, backgroundColor:'white'}}></View>
            </View>
            <View style={{width:250, height: 50, position:'relative', marginBottom:20}}>
                <TextInput style={{width:250, height:45, fontSize:25, color:'white', fontFamily:'Antic_400Regular'}} placeholder="Nome del tavolo" onChangeText={(text) => userClass.setnomeTavolo(text)} placeholderTextColor='#FFFFFF'/>
                <View style={{width:250, height:3, position:'absolute', bottom:0, backgroundColor:'white'}}></View>
            </View>
            <View style={{width:250, height: 50, position:'relative'}}>
                <TextInput style={{width:250, height:45, fontSize:25, color:'white', fontFamily:'Antic_400Regular'}} placeholder="Nome utente" onChangeText={(text) => {userClass.setnomeUtente(text)}} placeholderTextColor='#FFFFFF'/>
                <View style={{width:250, height:3, position:'absolute', bottom:0, backgroundColor:'white'}}></View>
            </View>

        </Animated.View>
    );
    }
}

export default page3text;