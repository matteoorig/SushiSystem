import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import paneCinese from '../menu/paneCinese.png';
import involtiniDiGamberi from '../menu/involtiniDiGamberi.png';
import asticeRoll from '../menu/AsticeRoll.png';
import sashimi from '../menu/Sashimi.png';
import salmonRoll from '../menu/SalmonRoll.png';
import salmoneFlambe from '../menu/SalmoneFlambe.png';
import sushiMisto from '../menu/SushiMisto.png';
import zucchine from '../menu/GunkanZucchinaEbi.png';
import naturale from '../menu/naturale.png';
import frizzante from '../menu/frizzante.png';


import { useState } from "react";
import Item from '../components/item';
import DeleteItem from '../components/deleteItem';
import Header from '../components/headerHome';
import Tabs from '../components/tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

const path = [ // w => 29 | height => 29
"M14.4971 15.4852C18.7515 15.4852 22.2722 12.0947 22.2722 7.77515C22.2722 3.45562 18.7515 0 14.4971 0C10.2426 0 6.72192 3.39053 6.72192 7.71006C6.72192 12.0296 10.2426 15.4852 14.4971 15.4852ZM14.4971 2.40828C17.4557 2.40828 19.8639 4.81657 19.8639 7.71598C19.8639 10.6154 17.4557 13.0178 14.4971 13.0178C11.5385 13.0178 9.13021 10.6095 9.13021 7.71006C9.13021 4.81065 11.5385 2.40828 14.4971 2.40828Z",
"M19.7396 16.2248C19.2485 16.1006 18.7515 16.2248 18.4438 16.5976L14.497 21.1006L10.5503 16.5976C10.2426 16.2248 9.68639 16.1065 9.25444 16.2248C3.63905 18.0769 0 22.639 0 27.7574C0 28.4378 0.556213 28.9941 1.23669 28.9941H27.7633C28.4438 28.9941 29 28.4378 29 27.7574C28.9941 22.639 25.355 18.0769 19.7396 16.2248ZM2.52663 26.5858C3.02367 23.1952 5.49112 20.2958 9.31361 18.8165L13.6331 23.7514C14.0651 24.3077 14.9882 24.3077 15.4201 23.7514L19.7396 18.8165C23.503 20.2958 26.0355 23.2544 26.5266 26.5858H2.52663V26.5858Z",
]

const pathOrdine = [
"M26.4643 9.625C26.4643 7.80164 25.7306 6.05295 24.4245 4.76364C23.1184 3.47433 21.347 2.75 19.5 2.75C17.653 2.75 15.8816 3.47433 14.5755 4.76364C13.2695 6.05295 12.5357 7.80164 12.5357 9.625V11H26.4643V9.625ZM29.25 9.625V11H39V38.5C39 39.9587 38.413 41.3576 37.3682 42.3891C36.3233 43.4205 34.9062 44 33.4286 44H5.57143C4.09379 44 2.67668 43.4205 1.63183 42.3891C0.586988 41.3576 0 39.9587 0 38.5V11H9.75V9.625C9.75 7.07229 10.7772 4.62413 12.6057 2.8191C14.4342 1.01406 16.9141 0 19.5 0C22.0859 0 24.5658 1.01406 26.3943 2.8191C28.2228 4.62413 29.25 7.07229 29.25 9.625ZM27.4504 24.3485C27.712 24.0903 27.8589 23.7401 27.8589 23.375C27.8589 23.0099 27.712 22.6597 27.4504 22.4015C27.1889 22.1433 26.8342 21.9983 26.4643 21.9983C26.0944 21.9983 25.7397 22.1433 25.4781 22.4015L18.1071 29.6807L14.9147 26.5265C14.7852 26.3987 14.6315 26.2972 14.4623 26.2281C14.2931 26.1589 14.1117 26.1233 13.9286 26.1233C13.7454 26.1233 13.5641 26.1589 13.3949 26.2281C13.2257 26.2972 13.0719 26.3987 12.9424 26.5265C12.8129 26.6543 12.7102 26.8061 12.6401 26.9731C12.57 27.1402 12.534 27.3192 12.534 27.5C12.534 27.6808 12.57 27.8598 12.6401 28.0269C12.7102 28.1939 12.8129 28.3457 12.9424 28.4735L17.121 32.5985C17.2504 32.7265 17.4041 32.8281 17.5733 32.8975C17.7425 32.9668 17.9239 33.0025 18.1071 33.0025C18.2904 33.0025 18.4718 32.9668 18.641 32.8975C18.8102 32.8281 18.9639 32.7265 19.0933 32.5985L27.4504 24.3485Z",
]

  
var U = null;

function setClass(c){
  U = c;
}


const data = [
{nome:"Pane cinese", image:paneCinese},
{nome:"Involtini di gamberi", image:involtiniDiGamberi},
{nome:"Astice roll", image:asticeRoll},
{nome:"Salmon roll", image:salmonRoll},
{nome:"Sashimi", image:sashimi},
{nome:"Salmone flambè", image:salmoneFlambe},
{nome:"Sushi misto", image:sushiMisto},
{nome:"Acqua naturale", image:naturale},
{nome:"Acqua frizzante", image:frizzante}
]




const Home = (props) =>{
  //mi faccio passare la classe user e la metto globale
  setClass(props.route.params.CUser)

  const rendItem = ({item, index}) =>{
      return(
          <Item key={index} nameProduct={item.nome} url={item.image} userClass={U}/>
      );
  }


  const rendItemDelete = ({item, index}) =>{
    return(
        <DeleteItem key={index} nameProduct={item.nome} name={item.nome} userClass={U}/>
    );
  }

  
  // MENU => 1 | ORDER => 2 | OPTIONS => 3
  const [state, setState] = useState(1);
  const [ordine, setordine] = useState("CONFERMA ORDINE")


    return (

        <ImageBackground style={{height:'100%', position:'relative'}} source={require('../img/sushiBack.jpg')}>
        <View style={{width:'100%', height:'100%',position:'absolute', backgroundColor:'black', opacity:0.8}}></View>
        <View style={{width:'100%', height:'90%', justifyContent:'center', alignItems:'center', paddingTop:40}}>
          <Header/>
          {state == 1 ? (<FlatList  data={data} renderItem={rendItem} keyExtractor={(item, index) => index.toString()} numColumns={2}/>): (null)}
          {state == 2 ? (<FlatList data={U.ordine} renderItem={rendItemDelete} keyExtractor={(item, index) => index.toString()} numColumns={1}/>): (null)}
          {state == 3 ? (<View style={{width:"100%", height:"90%"}}>
                          <View style={{width: "100%", height:100, justifyContent: "center", alignItems: "center", flexDirection:"row"}}>
                            <Svg width={50} height={50} viewBox={[0,0,40,40].join(" ")}>
                              {path.map((d, key) => <Path d={d}  fill="white" strokeWidth={0.2} key={key}/>)}
                            </Svg>
                            <Text style={{fontFamily:'Antic_400Regular', fontSize:28, color: "white"}}>{U.nomeUtente}</Text>
                          </View>

                          <View style={{width: "100%", height:400, justifyContent: "flex-start", alignItems: "center"}}>

                            <View style={{margin: 2, width:"90%", height:100, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                              <Text style={{fontFamily:'Antic_400Regular', fontSize:22, color: "white"}}>Il tuo tavolo: </Text>
                              <Text style={{fontFamily:'Antic_400Regular', fontSize:28, color: "white"}}>{U.nTavolo}</Text>
                            </View>
                            <View style={{margin: 2, width:"90%", height:100, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                              <Text style={{fontFamily:'Antic_400Regular', fontSize:22, color: "white"}}>Nome tavolo: </Text>
                              <Text style={{fontFamily:'Antic_400Regular', fontSize:28, color: "white"}}>{U.nomeTavolo}</Text>
                            </View>

                            <Pressable onPress={()=>{
                              setordine("ORDINATO") 
                              U.inviaOrdine("http://172.20.10.4:8890/SushiSystem/ordinazione")}} style={{margin: 2, width:"90%", height:80, flexDirection:"row", justifyContent:"space-around", alignItems:"center", borderColor:"white", borderWidth:2}}>
                                <Svg width={39} height={44} viewBox={[0,0,40,40].join(" ")}>
                                  {pathOrdine.map((d, key) => <Path d={d}  fill="white" strokeWidth={0.2} key={key}/>)}
                                </Svg>
                                <Text style={{fontFamily:'Antic_400Regular', fontSize:22, color: "white"}}>{ordine}</Text>
                            </Pressable>
                              
                          </View>

                         </View>): (null)}
        </View>
        <View style={{height:"9%", width:"100%", position:"absolute", bottom:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>

                <View style={{height:"100%",width:"35%", justifyContent:'flex-start', alignItems:'center', paddingTop:1}}>
                    <MaterialIcons name="menu-book" size={30} color="white"  onPress={() => setState(1)}/>
                </View>
                <View style={{height:"100%",width:"35%", justifyContent:'flex-start', alignItems:'center', paddingTop:3}}>
                    <Octicons name="list-unordered" size={30} color="white"  onPress={() => setState(2)}/>
                </View>
                <View style={{height:"100%",width:"35%", justifyContent:'flex-start', alignItems:'center'}}>
                    <MaterialCommunityIcons name="table-furniture" size={35} color="white" onPress={() => setState(3)} />
                </View>
            

        </View>
        
        </ImageBackground>

        )
}

export default Home;