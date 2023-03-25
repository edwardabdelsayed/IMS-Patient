import * as React from 'react';
import { Text, View, StyleSheet, Image,Button ,TouchableOpacity,TouchableHighlight} from 'react-native';

import Header from './Header';
import About_us from "./About_us"
import Vision from "./Vision"

import useSecureStore from './useSecureStore';


// import BUTTON_ME from './BUTTON_ME';


export default function Home({ navigation }) {

  const [login,setlogin]=React.useState(" ")

  const [secureValue, setSecureValue, deleteSecureValue] = useSecureStore('userid',secureValue);



  return (
    <>
    <Header/>
    <View style={styles.container}>
      <Text>home</Text>


      <Button title='go to setteings' onPress={()=> {  navigation.navigate("Settings") } } />


      <Button title='delet' onPress={async ()=>{
        
      //  var rrt = await SecureStore.deleteItemAsync("userid").then((inf)=>{setlogin(inf)})
      deleteSecureValue("userid")
      console.log(secureValue);
        }} />

    </View>

    <View style={styles.Button_end}>
    <TouchableOpacity style={styles.icon_buuton}  onPress={() => navigation.navigate('About_us')}>
          <Text  style={styles.home_botton_bar} >About_us</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.icon_buuton}   onPress={() => navigation.navigate('Vision')}>
          <Text style={styles.home_botton_bar} >Vision</Text>
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
