import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


const Tabs = ({height}) =>{
    return(
        
        <View style={{height:height, width:"100%", position:"absolute", bottom:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>

                <View style={{height:"100%",width:"35%", justifyContent:'flex-start', alignItems:'center', paddingTop:1}}>
                    <MaterialIcons name="menu-book" size={30} color="white" />
                </View>
                <View style={{height:"100%",width:"35%", justifyContent:'flex-start', alignItems:'center', paddingTop:3}}>
                    <Octicons name="list-unordered" size={30} color="white" />
                </View>
                <View style={{height:"100%",width:"35%", justifyContent:'flex-start', alignItems:'center'}}>
                    <MaterialCommunityIcons name="table-furniture" size={35} color="white" />
                </View>
            

        </View>
    
        )
}

export default Tabs;