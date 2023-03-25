import * as React from 'react';
import { Text, View, StyleSheet, Image,Button ,TextInput,SafeAreaView,TouchableOpacity} from 'react-native';

import * as SecureStore from 'expo-secure-store';
import useSecureStore from './useSecureStore';




export default function Login({navigation}) {

  const [email, onChangeemail] = React.useState('');
  const [Password, onChangePassword] = React.useState('');

  const [ERR, SETERR] = React.useState('');

  const [secureValue, setSecureValue, deleteSecureValue] = useSecureStore('userid', null);


  console.log(secureValue);


  const sendRequest = async () => {
    try {
      const response = await fetch('http://192.168.1.4:8000/LOGIN/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          Password: Password,
        }),
      });
  
      const result = await response.json();

      if (result.status == "success") {

        setSecureValue(JSON.stringify(result))
        

        console.log(secureValue);
        // await SecureStore.setItemAsync("userid", JSON.stringify(result.result[0]) )


     await navigation.navigate('Home');
      }
      
    } catch (error) {
      console.error('Error:', error);
      SETERR(error)
    }
  };



  return (
    <> 
   
   <TouchableOpacity  style={styles.containerlogo}   onPress={() => navigation.navigate('Home')}>
       <Text  style={styles.logo}>Logo</Text>
   </TouchableOpacity>

      <View style={styles.logupVIEW} >
      <Text  style={styles.logupTEXT}>log in</Text>
      </View>

      <View style={styles.container}>
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.email}
        onChangeText={onChangeemail}
        value={email}
        placeholder="example@gmail.com"
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.Password}
        onChangeText={onChangePassword}
        Type="password"
        value={Password}
        secureTextEntry={true}
        placeholder="Password"
      />

        <View>
          <Text></Text>
        </View>
          <View style={styles.Button}>

          <TouchableOpacity  style={styles.Buttonn} onPress={() => navigation.navigate('Logup')}  >
            <Text  style={styles.Buttonn}>log up</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.Buttonn} onPress={() => {
            
            navigation.navigate('Home');sendRequest()}} >
            <Text  style={styles.Buttonn}>submit</Text>
          </TouchableOpacity>


   

          </View>
      </View>

    

    </>
  );
}

const styles = StyleSheet.create({
  container: {
  
    display:'flex',
    flex:0.78,
    alignItems: "flex-start",
    alignContent: "center",


    justifyContent: 'center',

  },
  text:{
    display:'flex',
    alignItems:"center",
    justifyContent: 'center',
    marginLeft:10,


  },
  

  email: {
    height: 40,
    margin: 0,
    borderWidth: 1,
    padding: 5,
    width:"80%",
    marginLeft:30,
    marginTop:5,
    marginBottom:22,
    borderRadius:20
 
  },

  Password: {
    height: 40,
    margin: 0,
    borderWidth: 1,
    padding: 5,
    width:"80%",
    marginLeft:30,
    marginTop:5,
    marginBottom:7,
    borderRadius:20
  },

  containerlogo:{
    marginTop:28,
    margin:10,
  },
  logo: { 
    color:"red",
    fontSize:30,
    fontWeight:'bold',
    
  },

  logupVIEW:{
    marginTop:20,
    display:"flex",
    alignItems:"flex-start",
  },
  logupTEXT:{
    fontSize:20,
    fontWeight:"bold",
    color:"blue",
    marginLeft:10,
    margin:2,

  },
  Button:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    marginTop:"2%",
    width:"100%",

  },
  Buttonn:{
    borderRadius:20,
    backgroundColor:"green",
    fontSize:20,
    fontWeight:"bold",
    margin:5,
    paddingRight:8,
    paddingLeft:8,
    
  }


});
