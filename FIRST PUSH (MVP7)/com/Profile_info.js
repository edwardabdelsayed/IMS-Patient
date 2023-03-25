import * as React from 'react';
import { Text, View, StyleSheet, Image,Button ,TouchableOpacity,TouchableHighlight} from 'react-native';

import Header from './Header';
import About_us from "./About_us"
import Vision from "./Vision"

// import BUTTON_ME from './BUTTON_ME';
export default function Profile_info({ navigation }) {

  const [results,setresults]=React.useState("")

  React.useEffect(()=>{

    const sendRequest = async () => {
      try {
        const response = await fetch('http://192.168.1.4:8000/Profile_info/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id:"84"
          }),
        });
    
        const result = await response.json();
  
        if (result.status == "success") {
  
          setresults(result.result[0])
  
          console.log(result.result[0]);
          // await SecureStore.setItemAsync("userid", JSON.stringify(result.result[0]) )
  
        }
        
      } catch (error) {
        console.error('Error:', error);
        
      }
    };
    sendRequest()
    
  },[])

  return (
    <>
    <Header/>
    <View style={styles.container}>

    <Text>ID:{results.id}</Text>
    <Text>NAME:{results.name}</Text>
    <Text>MRN:{results.MRN}</Text>
    <Text>SSN:{results.SSN}</Text>
    <Text>E-MAIL:{results.email}</Text>
    <Text>NUMBER:{results.number}</Text>
    <Text>EMG-NUM1:{results.emergency_number1}</Text>
    <Text>EMG-NUM2:{results.emergency_number2}</Text>
    <Text>GENDER:{results.gender}</Text>
    <Text>PASSWORD:{results.password}</Text>
    <Text>INSURANCE_ID:{results.insurance_companie_id}</Text>
    <Text>Image:{results.image_path}</Text>
    <Text>PUSH_NOTIFICATION_ID:{results.push_notification_id}</Text>
    <Text>NOTES:{results.notes}</Text>
    <Text>FAST_REVIEW:{results.fast_review}</Text>

   




        
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
