import * as React from 'react';
import { Text, View, StyleSheet, Image,Button ,TouchableOpacity,TouchableHighlight} from 'react-native';

import Header from './Header';
import About_us from "./About_us"
import Vision from "./Vision"

// import BUTTON_ME from './BUTTON_ME';
export default function Settings({ navigation }) {


  return (
    <>
    <View style={styles.container}>

    <TouchableOpacity onPress={()=>{navigation.navigate('Profile_info')}}>
        <Text>Profile info</Text>
    </TouchableOpacity>

   


    <TouchableOpacity onPress={""}>
        <Text>Settings</Text>
    </TouchableOpacity>


    <TouchableOpacity onPress={""}>
        <Text>Log out</Text>
    </TouchableOpacity>
        
    </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  Button_end:{
    display:'flex',
    flexDirection:"row",
    alignItems:"flex-end",
    justifyContent:"space-around",
    

    flex:1,
  },
  home_botton_bar:{
    backgroundColor:"green",
    paddingLeft:55,
    paddingRight:55,
    fontSize:25,
    color:"red",
    fontWeight:"bold",
    borderWidth: 2,

    
  },
  icon_buuton:{
    backgroundColor:"blue",
  }
 

});
