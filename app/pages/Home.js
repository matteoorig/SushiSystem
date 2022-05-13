import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import paneCinese from '../menu/paneCinese.png';
import involtiniDiGamberi from '../menu/involtiniDiGamberi.png';
import asticeRoll from '../menu/AsticeRoll.png';
import sashimi from '../menu/Sashimi.png';
import salmonRoll from '../menu/SalmonRoll.png';
import salmoneFlambe from '../menu/SalmoneFlambe.png';
import sushiMisto from '../menu/SushiMisto.png';
import zucchine from '../menu/GunkanZucchinaEbi.png';


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
{nome:"Gunkan zucchine ebi", image:zucchine}
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

                            <View style={{margin: 2, width:"90%", height:80, flexDirection:"row", justifyContent:"space-around", alignItems:"center", borderColor:"white", borderWidth:2}}></View>

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