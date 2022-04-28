import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, Animated} from 'react-native';
import Svg, { Path } from 'react-native-svg'; //expo install react-native-svg
import AppLoading from 'expo-app-loading';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import { useState , useEffect} from 'react';
import {
    useFonts,
    Antic_400Regular,
} from '@expo-google-fonts/antic';

const {width} = Dimensions.get("screen");
const {height} = Dimensions.get("screen");

const paths = [
"M21.2488 9.53521C22.1402 8.31201 22.1355 6.67952 21.2371 5.45125L20.2036 3.64545L19.1807 5.44503C18.2894 6.66823 18.294 8.30072 19.1921 9.52939L19.6453 10.3206L19.6449 10.321L19.7257 38.3697C19.7266 38.6767 19.9769 38.9256 20.2857 38.9264C20.4397 38.9269 20.5793 38.8652 20.6802 38.765C20.781 38.6648 20.843 38.526 20.8425 38.3729L20.7624 10.3913L21.2488 9.53521ZM20.1088 8.89988C19.4781 8.05516 19.4745 6.92168 20.1008 6.08092L20.21 5.8967L20.3199 6.08114C20.9507 6.92587 20.9543 8.05934 20.328 8.90011L20.2188 9.08433L20.1088 8.89988Z",
"M19.3356 12.7413L18.7754 10.7429C18.5318 9.24639 17.3674 8.08803 15.8621 7.84663L13.8511 7.28893L14.4121 9.28812C14.6549 10.7847 15.8197 11.9426 17.3255 12.1844L19.3356 12.7413ZM15.511 9.09257L15.4571 8.88473L15.6658 8.93871C16.71 9.09597 17.5183 9.89957 17.6769 10.9381L17.7308 11.1451L17.5225 11.0916C16.4771 10.9339 15.6688 10.1303 15.511 9.09257Z",
"M21.6351 10.7514L21.0859 12.7471L23.0933 12.2012C23.8457 12.0847 24.511 11.7384 25.0178 11.2345C25.5246 10.7307 25.873 10.0693 25.9901 9.32133L26.5397 7.32529L24.5319 7.87161C23.0279 8.1037 21.8697 9.25509 21.6351 10.7514ZM24.8901 9.11956C24.7378 10.1568 23.9341 10.9558 22.8908 11.1072L22.6824 11.16L22.7355 10.9528C22.8877 9.91403 23.6911 9.11538 24.7348 8.96521L24.9432 8.91241L24.8901 9.11956Z" ,
"M19.3502 17.7389L18.7893 15.7397C18.546 14.2428 17.3821 13.0856 15.8763 12.8438L13.8654 12.2861L14.4264 14.2853C14.67 15.7818 15.8339 16.939 17.3393 17.1812L19.3502 17.7389ZM15.5252 14.0898L15.4709 13.8823L15.68 13.9359C16.7242 14.0931 17.5326 14.8968 17.6904 15.9345L17.7443 16.1423L17.5356 16.0883C16.4918 15.9315 15.6834 15.1279 15.5252 14.0898Z" ,
"M21.6494 15.7479L21.1002 17.7435L23.1076 17.1976C23.86 17.0812 24.5253 16.7348 25.0325 16.2305C25.5393 15.7267 25.8877 15.0653 26.0052 14.317L26.5539 12.3217L24.547 12.8672C23.0422 13.1017 21.8844 14.2527 21.6494 15.7479ZM24.9044 14.116C24.7522 15.1548 23.948 15.9526 22.9047 16.104L22.6963 16.1568L22.7494 15.9496C22.9024 14.9124 23.7058 14.113 24.7491 13.9616L24.9575 13.9088L24.9044 14.116Z" ,
"M19.3647 22.7361L18.8037 20.737C18.5605 19.2408 17.3961 18.0832 15.8903 17.8407L13.8802 17.2837L14.4404 19.2821C14.6836 20.7791 15.8484 21.937 17.3537 22.1784L19.3647 22.7361ZM15.5389 19.0862L15.485 18.8791L15.6933 18.9327C16.7383 19.0908 17.5466 19.8944 17.7044 20.9321L17.7587 21.1396L17.5496 21.086C16.5058 20.9291 15.6975 20.1255 15.5389 19.0862Z" ,
"M21.6636 20.7451L21.1145 22.7407L23.1219 22.1948C23.8739 22.078 24.5395 21.732 25.0463 21.2281C25.5531 20.7243 25.9011 20.0625 26.0186 19.315L26.5678 17.3193L24.5604 17.8652C23.0568 18.0993 21.899 19.2503 21.6636 20.7451ZM24.9186 19.1132C24.7664 20.1504 23.9634 20.9495 22.9189 21.1012L22.7105 21.154L22.7636 20.9468C22.9163 19.9092 23.72 19.1102 24.7634 18.9588L24.9717 18.906L24.9186 19.1132Z" ,
"M19.3782 27.7325L18.818 25.7341C18.5748 24.2371 17.4104 23.0796 15.9047 22.8378L13.8945 22.2809L14.4547 24.2793C14.6983 25.7758 15.8627 26.9334 17.3681 27.1756L19.3782 27.7325ZM15.5536 24.0837L15.4997 23.8767L15.708 23.9302C16.753 24.0883 17.561 24.8915 17.7195 25.93L17.7734 26.1371L17.5652 26.0835C16.5201 25.9254 15.7122 25.1222 15.5536 24.0837Z" ,
"M21.6776 25.7426L21.1285 27.7383L23.1359 27.1923C23.8883 27.0759 24.5535 26.7295 25.0603 26.2257C25.5671 25.7218 25.9155 25.0605 26.0327 24.3125L26.5818 22.3168L24.5744 22.8628C23.0704 23.0956 21.9127 24.2466 21.6776 25.7426ZM24.9334 24.1107C24.7808 25.1483 23.9771 25.9474 22.9337 26.0987L22.7253 26.1515L22.7785 25.9444C22.9303 24.906 23.734 24.1069 24.7782 23.9564L24.9865 23.9036L24.9334 24.1107Z" ,
"M19.3932 32.7305L18.8322 30.7313C18.589 29.2344 17.425 28.0772 15.9192 27.8354L13.9079 27.2773L14.4689 29.2765C14.7121 30.7734 15.8761 31.9306 17.3818 32.1724L19.3932 32.7305ZM15.5678 29.0818L15.5139 28.8739L15.7229 28.9275C16.7672 29.0848 17.5755 29.8884 17.7333 30.9261L17.7872 31.1339L17.5781 31.0803C16.5339 30.9231 15.7256 30.1195 15.5678 29.0818Z" ,
"M21.6924 30.7394L21.1432 32.7351L23.1506 32.1892C23.903 32.0727 24.5682 31.7264 25.075 31.2225C25.5823 30.7183 25.9303 30.0573 26.0478 29.3089L26.5969 27.3133L24.5895 27.8592C23.0856 28.0929 21.9278 29.2439 21.6924 30.7394ZM24.9473 29.1076C24.7955 30.146 23.9918 30.945 22.9476 31.0956L22.7393 31.1484L22.7924 30.9412C22.945 29.9036 23.7484 29.1049 24.7921 28.9532L25.0005 28.9004L24.9473 29.1076Z" ,
]

const Item = ({nameProduct, url, userClass}) => {

    
    function state1_state2(){
        
        setStato(2);
        setcheck(true);
        Animated.timing(circleW,{
            toValue:27,
            duration: 200,
            useNativeDriver: false,
        }).start(circleW.resetAnimation());
        Animated.timing(circleH,{
            toValue:27,
            duration: 200,
            useNativeDriver: false,
        }).start(circleH.resetAnimation());
    }
    function state2_state3(){
        userClass.addPiatto(nameProduct, nOrdini);    //inserisce un piatto con pz 1 in user
        setStato(3);
        Animated.timing(ItemsWI,{
            toValue:56,
            duration: 200,
            useNativeDriver: false,
        }).start(ItemsWI.resetAnimation());
        Animated.timing(ItemsW,{
            toValue:57,
            duration: 200,
            useNativeDriver: false,
        }).start(ItemsW.resetAnimation());
    }
    function incValue(){
        setnOrdini(nOrdini + 1);                      
        userClass.incPzPiatto(nameProduct);           //ogni volta che clicco + aggiungo un piatto a user
    }
    function decValue(){
        if(nOrdini == 1){                             //elimino il piatto perchè nOrdini va a 0
            userClass.deletePiatto(nameProduct)
            setStato(1);
            setcheck(false);
        }else{
            setnOrdini(nOrdini - 1);                  
            userClass.decPzPiatto(nameProduct)       //decremento il counter del pz del piatto specifico di 1
        }
    }
    const [stato, setStato] = useState(1);
    
    const [check, setcheck] = useState(false);
    const [nOrdini, setnOrdini] = useState(userClass.getPz(nameProduct));

    //animations
    //animazione da stato 1 a stato 2
    const [circleW] = useState(new Animated.Value(0));
    const [circleH] = useState(new Animated.Value(0));
    //animazione da da stato 2 a stato 3
    const [ItemsWI] = useState(new Animated.Value(0));
    const [ItemsW] = useState(new Animated.Value(0));

    
    
    let [fontsLoaded] = useFonts({
        Antic_400Regular,
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
        
      } else {
    return(
        
        <TouchableOpacity disabled={check} style={{width:170, height:180, margin:8}} onPress={ () => state1_state2()}>
        <View style={{width:170, height:180, borderRadius:15, borderWidth:0.5, borderColor:'white', position:'relative'}} >
            <Image style={{width:'100%', height:'100%', resizeMode:'cover', borderRadius:15}} source={url}/>
            <View style={{width:40, height:40,borderWidth:3,borderRadius:45,borderColor:'white', position:'absolute', top:5, left:5, justifyContent:'center', alignItems:'center'}}>
                <Svg width={40} height={40} viewBox={[0,0,40,40].join(" ")}>
                    {paths.map((d, key) => <Path d={d}  fill="white" strokeWidth={0.2} key={key}/>)}
                </Svg>
            </View>
            {/* wrapper bianco in basso */}
            <View style={{width:170, height:38, backgroundColor:'white', position:'absolute', bottom:-1, left:-1, borderBottomLeftRadius:15,borderBottomRightRadius:15, justifyContent:'center', alignItems:'center'}}>
                {/* solo nome prodotto */}
                {stato == 1 ? (<Text style={{fontFamily:'Antic_400Regular', opacity:1, fontSize:18}}>{nameProduct}</Text>):(null)}
                
                {/* bottone aggiungi */}
                {stato == 2 ? (<Animated.View style={{width:circleW, height:circleH, backgroundColor:'#2CB43A', borderRadius:45, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity onPress={() => {
                                                    state2_state3() 
                                                    
                                                }}><Ionicons name="add" size={24} color="white" style={{marginLeft:1}}/></TouchableOpacity>
                </Animated.View>):(null)}
                
                {/* modalita aggiungi prodotto */}
                {stato == 3 ? (<View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                    <Animated.View style={{width:ItemsW, height:38, borderBottomLeftRadius:15, backgroundColor:'#D62A2A', opacity:0.5, justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity onPress={()=> decValue()}><AntDesign name="minus" size={24} color="white"/></TouchableOpacity>
                    </Animated.View> 
                    <Animated.View style={{width:ItemsWI, height:38, backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontFamily:'Antic_400Regular', fontSize:25, color:'white'}}>{nOrdini}</Text>
                    </Animated.View>
                    <Animated.View style={{width:ItemsW, height:38, backgroundColor:'#2CB43A',borderBottomRightRadius:15, opacity:0.4, justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity onPress={() => incValue()}><Ionicons name="add" size={24} color="white" style={{marginLeft:1}}/></TouchableOpacity>
                    </Animated.View>
                </View>):(null)} 
            </View>
        </View>
        </TouchableOpacity>
    );
    }
}

export default Item;