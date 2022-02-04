import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'; //expo install expo-app-loading
import {
    useFonts,
    Lora_400Regular
} from '@expo-google-fonts/lora'; //expo install @expo-google-fonts/lora
import {
    Antic_400Regular
} from '@expo-google-fonts/antic';

const page1text = ({height, width}) =>{
    let [fontsLoaded] = useFonts({
        Lora_400Regular,
        Antic_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
        
    } else {
    return(
        <View style={{width: width, height: height, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white', marginBottom:25, fontSize:30, fontFamily:'Lora_400Regular'}}>All You can Eat</Text>
            <View style={{width:352, height:2, backgroundColor:'#9C8B8B', marginBottom:2,color:'white'}}></View>
            <View style={{width:352, height:3, backgroundColor:'white',color:'white', marginBottom:25}}></View>
            <Text style={{color:'white', marginBottom:10, fontSize:26, fontFamily:'Antic_400Regular'}}>A pranzo</Text>
            <Text style={{color:'white', marginBottom:25, fontSize:26, fontFamily:'Antic_400Regular'}}>da Lunedì al venerdì</Text>
            <View style={{width:150, height:80,position:'relative', marginBottom:25}}>
                <Text style={{fontSize:36, position:'absolute', right:40, color:'white'}}>,90</Text>
                <Text style={{fontSize:48, position:'absolute', top:20, marginRight:5, color:'white'}}>24</Text>
                <Text style={{fontSize:70, color:'white', position:'absolute', right:0}}>€</Text>
            </View>
            <Text style={{color:'white', marginBottom:10, fontSize:22, fontFamily:'Antic_400Regular'}}>BEVANDE E DOLCI ESCLUSE</Text>
            <Text style={{color:'white', fontSize:22, fontFamily:'Antic_400Regular'}}>I bambini &lt; 140cm pagano 10,00 €</Text>
            

        </View>
    );
    }
}

export default page1text;