import react,{useState} from 'react';
import { Text, View, StyleSheet, Image,Button ,TextInput,SafeAreaView,TouchableOpacity} from 'react-native';





export default function Logup2({navigation}) {
  const [insurance_name, onChangeinsurance_name] = useState("");
  const [insurance_plan, onChangeinsurance_plan] = useState("");

  const [gender, onChangegender] = useState('');

  const [address, onChangeaddress] = useState('');
  const [email, onChangeemail] = useState('');

  const [select, onChangeselect] = useState('');
  const [DOB, onChangeDOB] = useState('');
  const [SSN, onChangeSSN] = useState('');

  const [emergency_number1, onChangeemergency_number1] = useState('');
  const [emergency_number2, onChangeemergency_number2] = useState('');
  

  
  const [RePassword, onChangeRePassword] = useState('');


  return (
    <> 
   
      <TouchableOpacity  style={styles.containerlogo}   onPress={() => navigation.navigate('Home')}>
          <Text  style={styles.logo}>Logo</Text>
      </TouchableOpacity>

      <View style={styles.logupVIEW} >
      <Text  style={styles.logupTEXT}>log up</Text>
      </View>


      <View style={styles.container}>

        
      <Text style={styles.text_name}>insurance</Text>

      <View style={styles.nameview}>

      <TextInput
        style={styles.NameF}
        onChangeText={onChangeinsurance_name}
        value={insurance_name}
        placeholder="  Insurance name"
      />

      <TextInput
        style={styles.NameL}
        onChangeText={onChangeinsurance_plan}
        value={insurance_plan}
        placeholder="  Insurance plan"
      />
      </View>

      <Text style={styles.text}>Address</Text>

<TextInput
        style={styles.Address}
        onChangeText={onChangeaddress}
        value={address}
        placeholder="  Address"
      />

<Text style={styles.text}>SSN</Text>

<TextInput
        style={styles.Address}
        onChangeText={onChangeSSN}
        value={SSN}
        placeholder="  SSN"
      />







<Text style={styles.text}>gender</Text>

<TextInput
        style={styles.USERNAME}
        onChangeText={onChangegender}
        value={gender}
        placeholder="  Male / Famle"
      />

<Text style={styles.text}>Date of birth</Text>

<View style={styles.DOBview}>
<TextInput
        style={styles.DOBBOX}
        onChangeText={onChangeemail}
        value={email}
        placeholder="  day"
      />
<TextInput
        style={styles.DOBBOX}
        onChangeText={onChangeemail}
        value={email}
        placeholder="  Month"
      />

<TextInput
        style={styles.DOBBOX}
        onChangeText={onChangeemail}
        value={email}
        placeholder="  Year"
      />

</View>




<Text style={styles.text}>Type</Text>

<TextInput
        style={styles.select}
        onChangeText={onChangeselect}
        value={select}
        placeholder="  patient/provider"
      />




      






          <View style={styles.Button}>

          <TouchableOpacity  style={styles.Buttonn} onPress={() => navigation.navigate('logup2')}  >
            <Text  style={styles.Buttonn}>Next</Text>
          </TouchableOpacity>


          

   

          </View>
      </View>

    

    </>
  );
}

const styles = StyleSheet.create({
  container: {
  
    display:'flex',
  

  },
  text:{
    display:'flex',
    alignItems:"center",
    justifyContent: 'center',
    marginLeft:10,
    marginBottom:-6
  },
  text_name:{
    margin:2
  },

  nameview:{
      display:'flex',
      flexDirection:"row",

  },
  NameF:{
    borderWidth: 1,
    borderRadius:20,
    width:"30%",
    marginLeft:15

  },
  NameL:{
    borderWidth: 1,
    borderRadius:20,
    width:"40%",
    marginLeft:15

  },
  

  USERNAME: {
    height:"8%",
    margin: 0,
    borderWidth: 1,
    padding: 5,
    width:"80%",
    marginLeft:15,
    marginTop:12,
    marginBottom:10,
    borderRadius:20
 
  },

  DOBview:{
    display:"flex",
    flexDirection:"row",
    width:"80%",
    marginLeft:15,


  },

  DOBBOX:{
    marginTop: 7,
    width:"25%",
    borderWidth: 1,
    borderRadius:20,



  },
  Address:{
   
    width:"80%",
    height:"8%",
    marginTop: 7,

    marginLeft:15,
    borderWidth: 1,
    borderRadius:20,
  },
  select:{
   
    width:"80%",
    height:"8%",
    marginLeft:15,
    marginTop:8,
    borderWidth: 1,
    borderRadius:20,
  },

  Password: {
    height:"8%",
    margin: 0,
    borderWidth: 1,
    padding: 5,
    width:"80%",
    marginLeft:15,
    marginTop:5,
    marginBottom:7,
    marginTop:12,

    borderRadius:20
    
  },

  nummber:{
    borderWidth: 1,
    borderRadius:20,
    width:"80%",
    height:"8%",
    marginLeft:15,
    marginTop:12,

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
    marginTop:0,
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
    justifyContent:"flex-end",
    marginTop:"2%",
    marginLeft:"-5%",

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
