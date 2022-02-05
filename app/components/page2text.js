import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'; //expo install expo-app-loading
import {
    useFonts,
    Antic_400Regular
} from '@expo-google-fonts/antic';
import { Animated } from 'react-native-web';

const page2text = ({position, width, top, transform}) =>{

    const [anim, setAnim] = useState(new Animated.Value(0));
    let [fontsLoaded] = useFonts({
        Antic_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
        
    } else {
    return(
        <View style={{width: width, justifyContent:'center', alignItems:'center', position:position, top:top, transform:[{translateX:starter}]}}>
          <View style={{width:60, height:60, borderRadius:45, borderColor:'white', borderWidth:3, justifyContent:'center', alignItems:'center', marginBottom:45}}>
                    <Text style={{fontSize:40, color:'white', fontFamily:'Cabin_400Regular'}}>!</Text>
                </View>
                <Text style={{fontFamily:'Antic_400Regular', fontSize:24, color:'white', marginBottom:5}}>Ricordati di collegarti</Text>
                <Text style={{fontFamily:'Antic_400Regular', fontSize:24, color:'white', marginBottom:60}}>alla rete del ristorante</Text>
                <Text style={{fontFamily:'Antic_400Regular', fontSize:18, color:'white',marginBottom:5}}>nome</Text>
                <Text style={{fontFamily:'Antic_400Regular', fontSize:24, color:'white', marginBottom:20}}>MARTINROUTERKING</Text>
                <Text style={{fontFamily:'Antic_400Regular', fontSize:18, color:'white', marginBottom:5}}>password</Text>
                <Text style={{fontFamily:'Antic_400Regular', fontSize:24, color:'white'}}>123456789</Text>

        </View>
    );
    }
}

export default page2text;