import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  TouchableHighlight, 
  TouchableOpacity, 
  TouchableNativeFeedback, 
  Button, 
  Alert, 
  Platform, 
  StatusBar, 
  Dimensions,
  borderStyle,
  ImageBackground,
  configureFonts, 
  DefaultTheme, 
  Provider
} from 'react-native';
import Login from '/Users/aryannair/donewithit/MyFirstApp/Login.js';

const DATA = {
    timer: 1234567,
    laps: [1245, 2523, 214532, 325352], 
}
//Doesn't work 

function Timer(interval){
return <Text style = {styles.timer}>[interval]</Text>}
class Stopwatch extends Component {
render(){
  return (
    <SafeAreaView style={styles.container}>
        <Timer interval = {DATA.timer}/>
      <View style={styles.top}>

      <ImageBackground
        style={{width:"100%", height:175, position: 'absolute', top:0}}
        source={require('/Users/aryannair/donewithit/MyFirstApp/blue-gradient.jpg')}
      />
      <TouchableOpacity>
      <Image
      style={{width:80, height:80, position:'absolute', top:15, left:-200 }}
      source={require('/Users/aryannair/donewithit/MyFirstApp/arrow.png')}

      />
      </TouchableOpacity>

      <Text style={styles.topText}>Fit Quest</Text>
      <Text style={styles.midText}>Winter Edition</Text>

      </View>

      <View style={styles.circle}/>

    <View
    style={{top:390, flexDirection:'row', justifyContent:'space-evenly'}}>
      <Button 
      title='Start'/>
      <Button 
      title='Stop'/>
      <Button 
      title='Clear'/>
      <Button 
      title='Lap'/>
    </View>  
    <View
    style={{top:430, flexDirection:'row', justifyContent:'space-evenly'}}>
    <Button 
      style={{width:180, height:30}}
      title='Calculate'/>
    </View>

    </SafeAreaView>
  );
}}


const containerStyle = {backgroundColor:"orange"};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0
  },

  top: {
    flex:0.24,
    borderWidth: 3,
    justifyContent:'center',
    alignItems:'center'
  },

    topText: {
      fontSize: 35,
      color:'white',
    },

    midText: {
      color:'white',
      fontSize: 30,
    },

    circle: {
      position: 'absolute',
      top: 250,
      left: 18,
      width: 380,
      height: 300,
      borderRadius: 300/2,
      backgroundColor: 'black',
      borderWidth: 10,
      borderColor: "white"
   },

   timer: {
       color: 'white',
       fontSize: 60,
       fontWeight: 200,
       paddingTop: 250
   }

});
 
export default Stopwatch; 
