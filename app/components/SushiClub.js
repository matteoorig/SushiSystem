import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'; //expo install expo-app-loading
import {
    useFonts,
    Lora_400Regular
} from '@expo-google-fonts/lora'; //expo install @expo-google-fonts/lora

const SushiClub = ()=>{
    let [fontsLoaded] = useFonts({
        Lora_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
        
      } else {
    return(
        <View style={{width:'100%', height:100, flexDirection:'column', justifyContent:'flex-end', justifyContent:'center'}}>
            <View style={{backgroundColor:'white', height:3, width:'100%', marginBottom:2}}/>
            <View style={{backgroundColor:'#9C8B8B', height:2, width:'100%', marginBottom:1}}/>
                <View style={{height:50, width:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:45,fontFamily:'Lora_400Regular', letterSpacing:7, color:'white'}}>SUSHI CLUB</Text>
                </View>
            <View style={{backgroundColor:'#9C8B8B', height:2, width:'100%', marginTop:7}}/>
            <View style={{backgroundColor:'white', height:3, width:'100%', marginTop:2}}/>
        </View>
    );
}
}

export default SushiClub;