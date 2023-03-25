import  react,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, Image,Button ,TextInput,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';

import * as Crypto from 'expo-crypto';

import * as SQLite from 'expo-sqlite';



export default function Logup({navigation,route}) {
  const [first_name, onChangefirst_name] = useState("");
  const [last_name, onChangelast_name] = useState("");

 
  const [email, onChangeemail] = useState('');
  const [nummber, onChangenummber] = useState('');

  const [Password, onChangePassword] = useState('');
  const [RePassword, onChangeRePassword] = useState('');

  const [gender, onChangegender] = useState('');

  const [select, onChangeselect] = useState('');
  const [SSN, onChangeSSN] = useState('');
  const [DOB_day, onChangeDOB_day] = useState('');
  const [DOB_month, onChangeDOB_month] = useState('');
  const [DOB_year, onChangeDOB_year] = useState('');

  
  const { itemId } = route.params;


   


//////////////////////////////////////////////Validatin//////////////////////////////////////////////////////////////////////
const [error, seterror] = useState({fire:false,details:""});




//same password//

useEffect(()=>{
  if (Password != RePassword) {
    seterror({fire:true , details:"Password Not The Same"})
    
  }

  if (Password == RePassword) {
    seterror({fire:false , details:""})
    
  }
},[Password,RePassword])

  


  /////////////////sendRequest/////////////////////



  const sendRequest = async () => {

    try {
      const response = await fetch('http://192.168.1.4:8000/LOGUP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            first_name:first_name,
            last_name:last_name,
            email:email,
            nummber:nummber,
            Password:Password,
            gender:gender,
            select:select,
            SSN:SSN,
            DOB_day:DOB_day,
            DOB_month:DOB_month,
            DOB_year:DOB_year,
            pushNotifcation:itemId
          }
        ),
      });
  
      const result = await response.json();

      if (result.status =="success") {

        await  navigation.navigate('Login')
        console.log(result);

      }else{

      }


    
    } catch (error) {
      console.error('Error:', error);
    }
  };

////////////////////////////////////////////




  return (

    <>

      <TouchableOpacity  style={styles.containerlogo}   onPress={() => navigation.navigate('Home')}>
          <Text  style={styles.logo}>Logo</Text>
      </TouchableOpacity>

      <View style={styles.logupVIEW} >
      <Text  style={styles.logupTEXT}>log up</Text>
      </View>


      <ScrollView style={{display:"flex",height:"100%",flex:1}}> 

        
      <Text style={styles.text_name}>Name</Text>

      <View style={styles.nameview}>

      <TextInput
        style={styles.NameF}
        onChangeText={onChangefirst_name}
        value={first_name}
        placeholder="  first name"
      />

      <TextInput
        style={styles.NameL}
        onChangeText={onChangelast_name}
        value={last_name}
        placeholder="  last name"
      />
      </View>


<Text style={styles.text_email}>E-mail</Text>

<TextInput
        style={styles.email}
        onChangeText={onChangeemail}
        value={email}
        placeholder="  example@gmail.com"
      />


      <Text style={styles.text_Password}>Password</Text>
      <TextInput
        style={styles.Password}
        onChangeText={onChangePassword}
        Type="password"
        value={Password}
        secureTextEntry={true}
        placeholder="Password"
      />

      <TextInput
        style={styles.Repassword}
        onChangeText={onChangeRePassword}
        Type="password"
        value={RePassword}
        secureTextEntry={true}
        placeholder="Repassword"
      />


<Text style={styles.text_Number}>Number</Text>

<TextInput
        style={styles.nummber}
        onChangeText={onChangenummber}
        Type="number"
        value={nummber}
        placeholder="  Number"
      />


<Text style={styles.text_SSN}>SSN</Text>

<TextInput
  style={styles.SSN}
  onChangeText={onChangeSSN}
  value={SSN}
  placeholder="  SSN"
/>




<Text style={styles.text_gender}>gender</Text>

<TextInput
  style={styles.gender}
  onChangeText={onChangegender}
  value={gender}
  placeholder="  Male / Famle"
/>

<Text style={styles.text_DOB}>Date of birth</Text>

<View style={styles.DOBview}>

<TextInput
  style={styles.DOBBOX_Year}
  onChangeText={onChangeDOB_year}
  keyboardType={"numeric"}
  value={DOB_year}
  text_Number="true"
  placeholder="  Year"
/>


<TextInput
  style={styles.DOBBOX_Month}
  onChangeText={onChangeDOB_month}
  keyboardType={"numeric"}
  value={DOB_month}
  placeholder="  Month"
/>

<TextInput
  style={styles.DOBBOX_day}
  onChangeText={onChangeDOB_day}
  keyboardType={"numeric"}
  value={DOB_day}
  placeholder="  day"
/>
</View>



<Text style={styles.text_Type}>Type</Text>

<TextInput
  style={styles.Type}
  onChangeText={onChangeselect}
  value={select}
  placeholder="  patient/provider"
/>





</ScrollView>




    {error.fire&&  <Text  style={{color:"red",fontSize:22,}}>{error.details}</Text>}


      <TouchableOpacity  style={styles.Buttonview} onPress={() => {
            
            if (Password == RePassword) { sendRequest() }
            
          }}  >
            <Text  style={styles.Buttonn}>Next</Text>
      </TouchableOpacity>




  
</>

  );
}

const styles = StyleSheet.create({

  containerlogo:{
    marginTop:28,
    margin:10,
  },
  logo: { 
    color:"red",
    fontSize:40,
    fontWeight:'bold',
    
  },


  logupVIEW:{
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

  container: {

  },
  text_name:{
    marginLeft:10,
    marginTop:7,
    flex:1
    },

  nameview:{
    display:'flex',
    flexDirection:"row",
    height:40,
    flex:1

},

NameF:{
  borderWidth: 1,
  borderRadius:20,
  width:"30%",
  padding:0,
  marginLeft:40,
  flex:1


},
NameL:{
  borderWidth: 1,
  borderRadius:20,
  width:"40%",
  marginLeft:20,
  marginRight:50,
  padding:0,
  flex:1



},



text_email:{

  marginLeft:10,
  marginBottom:-6
},
  email:{
    borderWidth: 1,
    borderRadius:20,
    width:"80%",
    height:40,
    padding:0,
    marginTop:12,
    marginBottom:10,
    marginLeft:40,
    flex:1


  },


  text_Password:{
 
    marginLeft:10,
    marginBottom:-6,
  },

  Password: {
    height:40,
    margin: 0,
    borderWidth: 1,
    padding: 5,
    width:"80%",
    marginLeft:40,
    marginTop:5,
    marginBottom:7,
    marginTop:12,
    flex:1,

    borderRadius:20
    
  },  
  Repassword: {
    height:40,
    margin: 0,
    borderWidth: 1,
    padding: 5,
    width:"80%",
    marginLeft:40,
    marginTop:5,
    marginBottom:7,
    marginTop:0,
    borderRadius:20,
    flex:1

    
  },

  text_Number:{

    marginLeft:10,
    marginBottom:-6,
    flex:1

  },
  nummber:{
    borderWidth: 1,
    borderRadius:20,
    width:"80%",
    height:40,
    padding:0,
    marginLeft:40,
    marginTop:12,
    marginBottom:10,
    flex:1


  },






  text_SSN:{

    marginLeft:10,
    marginTop:7,
    flex:1


  },

  SSN:{
    borderWidth: 1,
    height:40,
    borderRadius:20,
    width:"80%",
    marginLeft:40,
    padding:0,
    flex:1,

  },

  text_gender:{

    marginLeft:10,
    marginTop:7,
    flex:1

  },

  gender:{
    borderWidth: 1,
    height:40,
    borderRadius:20,
    width:"80%",
    marginLeft:40,
    padding:0,
    flex:1

  },


  text_DOB:{

    marginLeft:10,
    marginTop:7,
  },

  DOBview:{
    display:"flex",
    flexDirection:"row",
    width:"80%",
    marginLeft:7,
    height:40,
    flex:1

  },

  DOBBOX_Year:{
    marginTop: 7,
    width:"0%",
    borderWidth: 1,
    borderRadius:20,
    marginLeft:35,
    padding:0,
    flex:1

  },
  DOBBOX_Month:{
    marginTop: 7,
    width:"10%",
    borderWidth: 1,
    borderRadius:20,
    padding:0,
    flex:1

  },
  DOBBOX_day:{
    marginTop: 7,
    width:"10%",
    borderWidth: 1,
    borderRadius:20,
    padding:0,
    flex:1

  },

  text_Type:{

    marginLeft:10,
    marginTop:7,
    flex:1

  },

  Type:{
   
    width:"80%",
    height:40,
    marginLeft:40,
    marginTop:8,
    borderWidth: 1,
    borderRadius:20,
    flex:1

  },



  Buttonview:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    marginLeft:"0%",

    width:"100%",
    paddingLeft:8,
    paddingBottom:0,
    paddingTop:12,
    paddingLeft:20,
    paddingRight:20,
    marginBottom:12,

  },
  Buttonn:{

    borderRadius:20,
    backgroundColor:"green",
    fontSize:20,
    fontWeight:"bold",
    margin:5,
    paddingTop:4,
    paddingBottom:2,
    paddingLeft:20,
    paddingRight:20,

    height:"100%"

    
  }


});
