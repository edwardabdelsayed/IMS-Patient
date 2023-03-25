import { Button, Dimensions, StyleSheet, View ,TouchableOpacity,Text } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';



export default function BUTTON_ME() {
  

  const gesture = Gesture.Tap()
    .onStart(()=>{
      console.log("yes");
    })
    

  
  

    

  return (
      <GestureHandlerRootView >
        <GestureDetector gesture={gesture}>
          <Text>SDFSDF</Text>
        </GestureDetector>
      </GestureHandlerRootView>
  );
}


;