import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';

import { Text, View, StyleSheet,Animated, Image,Button,TouchableOpacity,TouchableHighlight } from 'react-native';
import * as SecureStore from 'expo-secure-store';


import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"



export default function Header() {
  
  const navigation = useNavigation();

   SecureStore.getItemAsync("userid") 

   var check_login=async()=>{

    if (    await SecureStore.getItemAsync("userid") == "null"    ) {
      

      console.log( await SecureStore.getItemAsync("userid"));
      return(false)
    }

    if (    await SecureStore.getItemAsync("userid") != null    ) {
      
      return(true)
    }


   }


  return (
    <>
    
    <View style={styles.first}>
    
      <TouchableOpacity    onPress={() => navigation.navigate('Home')}>
       <Text  style={styles.logo}>Logo</Text>
      </TouchableOpacity>

      
      
      <TouchableOpacity    onPress={() => navigation.navigate('Login')}>
        <Text name='Login' style={styles.icon_login}>Login</Text>
      </TouchableOpacity>
      
     
     
      

      </View>



      <View style={styles.TOW} >

   

        <TouchableOpacity style={styles.icon_buuton_home}   onPress={() => navigation.navigate('Home')}>
          <Entypo name='home' style={styles.icon}/>
          </TouchableOpacity>
          

          <TouchableOpacity style={styles.icon_buuton}   onPress={() => navigation.navigate('Scheduel')}>
          <Fontisto name='date' style={styles.icon} />
          </TouchableOpacity>


          <TouchableOpacity style={styles.icon_buuton}   onPress={() => navigation.navigate('Enter')}>
          <Entypo name='pencil' style={styles.icon} />
          </TouchableOpacity>


          <TouchableOpacity style={styles.icon_buuton_notyfy}  >
          <MaterialIcons name='notifications' style={styles.icon} onPress={() => navigation.navigate('Notifcation')} />
          </TouchableOpacity>


    
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  first: {

    backgroundColor:"green",
    paddingTop:30,

   // display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,


  },

  logo: { 
    color:"red",
    fontSize:30,
    fontWeight:'bold'
  },
  LOGIN:{      
    color:"red",
    fontSize:25,
    fontWeight:'bold'
  },
  TOW:{
    display:'flex',
    //flex:1,
    border:25,
    justifyContent:"space-between",
    flexDirection:"row",
    backgroundColor:"white",
    alignItems:'center',
    height:50,


  },
  icon_login:{
    fontSize:30,
    fontWeight:'bold',
    color:"red"
  },
  
  icon_buuton:{
    backgroundColor:"white",
    fontSize:150,
  },
  icon_buuton_home:{
    backgroundColor:"white",
    fontSize:150,
    position:"relative",
    left:18,
  },
  icon_buuton_notyfy:{
    backgroundColor:"white",
    fontSize:150,
    position:"relative",
    right:18,
    


    backgroundColor:"white",

  
  },
  icon:{
    color:"red",
    fontSize:30,
  }


});
