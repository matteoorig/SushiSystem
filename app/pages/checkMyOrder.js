import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

import paneCinese from '../menu/paneCinese.png';
import involtiniDiGamberi from '../menu/involtiniDiGamberi.png';


import Item from '../components/item';
import DeleteItem from '../components/deleteItem';
import Header from '../components/headerHome';


const data = [
{nome:"Pane cinese", image:paneCinese},
{nome:"Involtini di gamberi", image:involtiniDiGamberi},
{nome:"Pane cinese", image:paneCinese},
{nome:"Involtini di gamberi", image:involtiniDiGamberi}
]

//flatlist menù
/*
const rendItem = ({item, index}) =>{
  return(
      <Item key={index} nameProduct={item.nome} url={item.image}/>
  );
}
export default function App() {

  
  return (
    <ImageBackground style={{height:'100%', position:'relative'}} source={require('./img/sushiBack.jpg')}>
    <View style={{width:'100%', height:'100%',position:'absolute', backgroundColor:'black', opacity:0.8}}></View>
    <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', paddingTop:40}}>
      <Header/>
      <FlatList data={data} renderItem={rendItem} keyExtractor={(item, index) => index.toString()} numColumns={2}/>
    </View>
    </ImageBackground>
  );
}
*/


//flatlist elementi menù selezionati
/*

export default function App() {

  return (
    <ImageBackground style={{height:'100%', position:'relative'}} source={require('./img/sushiBack.jpg')}>
    <View style={{width:'100%', height:'100%',position:'absolute', backgroundColor:'black', opacity:0.8}}></View>
    {/*<View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', paddingTop:40}}>
      <Header/>
      <FlatList data={data} renderItem={rendItem} keyExtractor={(item, index) => index.toString()} numColumns={1}/>
    </View>
    
    </ImageBackground>
  );
}
*/
const rendItem = ({item, index}) =>{
    return(
        <DeleteItem key={index} nameProduct={item.nome}/>
    );
  }
const Home = ({props}) =>{
    return(
        
        <ImageBackground style={{height:'100%', position:'relative'}} source={require('../img/sushiBack.jpg')}>
            <View style={{width:'100%', height:'100%',position:'absolute', backgroundColor:'black', opacity:0.8}}></View>
            <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center', paddingTop:40}}>
        <Header/>
        <FlatList data={data} renderItem={rendItem} keyExtractor={(item, index) => index.toString()} numColumns={1}/>
    </View>
    
    </ImageBackground>
    
        )
}

export default Home;