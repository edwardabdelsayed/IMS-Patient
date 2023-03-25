import  react,{useState,useEffect,useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Crypto from 'expo-crypto';
import * as FileSystem from 'expo-file-system';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as SQLite from 'expo-sqlite';
import * as SecureStore from 'expo-secure-store';
import useSecureStore from './com/useSecureStore';



import { createStackNavigator, TransitionPresets} from '@react-navigation/stack';
const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();


import Home         from './com/Home';
import Scheduel     from './com/Scheduel';
import Enter        from './com/Enter';
import Notifcation  from './com/Notifcaton';

import Home_par from './com/Home_par';

import Login from './com/Login';
import Logup from './com/logup';
import Logup2 from './com/logup2';

import About_us from './com/About_us';
import Vision from './com/Vision';

import Settings from "./com/Settings"
import Profile_info from "./com/Profile_info"





export default function App() {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const [secureValue, setSecureValue, deleteSecureValue] = useSecureStore('myKey', null);



  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
 return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
 

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  
  
async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);


    
    


  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
 

 
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,  //that make us swap back
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS, //shape transction from page to other
      }}
      
      >
        <Stack.Screen name="Home"         component={Home}        options={{ title: 'Home' }} />
        <Stack.Screen name="Scheduel"     component={Scheduel}    options={{ title: 'Scheduel' }} />
        <Stack.Screen name="Enter"        component={Enter}       options={{ title: 'Enter' }} />
        <Stack.Screen name="Notifcation"  component={Notifcation} options={{ title: 'Notifcation' }} />
        <Stack.Screen name="Login"        component={Login}       options={{ title: 'Login' }} />
        <Stack.Screen name="Logup"        initialParams={{ itemId: expoPushToken }} component={Logup}       options={{ title: 'Logup' }} />
        <Stack.Screen name="Logup2"       component={Logup2}      options={{ title: 'Logup2' }} />
        <Stack.Screen name="About_us"     component={About_us}    options={{ title: 'About_us' }} />
        <Stack.Screen name="Vision"       component={Vision}      options={{ title: 'Vision' }} />   
        <Stack.Screen name="Settings"     component={Settings}    options={{ title: 'Settings' }} />   
        <Stack.Screen name="Profile_info" component={Profile_info}  options={{ title: 'Profile_info' }} />   
        

        
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
