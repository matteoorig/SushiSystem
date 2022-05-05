import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

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


const rendItem = ({item, index}) =>{
    return(
        <Item key={index} nameProduct={item.nome} url={item.image}/>
    );
}
const rendItemDelete = ({item, index}) =>{
  return(
      <DeleteItem key={index} nameProduct={item.nome} name={item.nome}/>
  );
}



const Home = (props) =>{
  //mi faccio passare la classe user e la metto globale
  setClass(props.route.params.CUser)

  const rendItem = ({item, index}) =>{

    console.log(index)
      return(
          <Item key={index} indice={index} nameProduct={item.nome} url={item.image} userClass={U}/>
      );
  }
  const rendItemDelete = ({item, index}) =>{
    return(
        <DeleteItem key={index} nameProduct={item.nome} name={item.nome}/>
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
          {state == 2 ? (<FlatList data={data} renderItem={rendItemDelete} keyExtractor={(item, index) => index.toString()} numColumns={1}/>): (null)}
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