import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, Animated, TouchableWithoutFeedback} from 'react-native';
import Svg, { Path } from 'react-native-svg'; //expo install react-native-svg
import AppLoading from 'expo-app-loading';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import { useState , useEffect} from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import {
    useFonts,
    Antic_400Regular,
} from '@expo-google-fonts/antic';


const DeleteItem = () =>{

    const [state, setState] = useState(2);
    const [statoFlex, setstatoFlex] = useState("row"); //setState('center');
    const [statoFlexAlign, setstatoFlexAlign] = useState("center");
    const [cambioTocco, setcambioTocco] = useState(false);
    const [marginCounter, setmarginCounter] = useState(20);
    const [marginCounterDiv, setmarginCounterDiv] = useState(0);

    function setTouchableOpacity (){
        setcambioTocco(!cambioTocco);
        if(cambioTocco == true){
            console.log("true")
            setstatoFlex("row");
            setstatoFlexAlign("center");
            setmarginCounter(20);
            setState(2);
            setmarginCounterDiv(0)
        }
        if(cambioTocco == false){
            console.log("False")
            setstatoFlex("column");
            setstatoFlexAlign("space-evenly");
            setmarginCounter(0);
            setState(1);
            setmarginCounterDiv(70)

            Animated.timing(translateRight,{
                toValue:0,
                duration: 200,
                useNativeDriver: false,
            }).start(translateRight.resetAnimation());
            Animated.timing(opacityRight,{
                toValue:0.5,
                duration: 400,
                useNativeDriver: false,
            }).start(opacityRight.resetAnimation());
            
        }
    }

    //animations
    const [translateRight] = useState(new Animated.Value(30));
    const [opacityRight] = useState(new Animated.Value(0));
    
    const [deleteItem, setdeleteItem] = useState(true);
   


    
    return(
        
        <View style={{height:80, width:352, backgroundColor:'white', margin:5, borderRadius:15, display:'flex', flexDirection:'row', justifyContent:statoFlexAlign, position:'relative'}}>
            
            
                <TouchableWithoutFeedback onPress={ () => setTouchableOpacity()} style={{backgroundColor:'yellow', justifyContent:'center', alignItems:'center'}}>
                    <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                        <Text style={{fontSize:50, marginRight:20}}>2</Text>
                        <Text style={{fontSize:20}}>Pane cinese</Text>
                    </View>
                </TouchableWithoutFeedback>
            {state == 1 ? (<Animated.View style={{height:80, width:50, backgroundColor:'#D62A2A', borderTopRightRadius:15,borderBottomRightRadius:15,  justifyContent:'center', alignItems:'center', transform:[{translateX:translateRight}], opacity:opacityRight, position:'absolute', right:0}}><FontAwesome5 onPress={()=>setdeleteItem(!deleteItem)} name="trash-alt" size={26} color="white" /></Animated.View>):(null)}
        </View>
        
    );
}
export default DeleteItem;