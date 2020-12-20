import React, {Component, useState} from 'react';
import { StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  TouchableOpacity,  
  Button, 
  Alert, 
  Platform, 
  StatusBar, 
  borderStyle,
  ImageBackground,
  configureFonts, 
  DefaultTheme, 
  Provider,
  TextInput
} from 'react-native';

export default class Login extends Component {
    render(){
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground
    style={{width:"100%", height:'100%', position: 'absolute', top:190}}
    source={require('/Users/aryannair/donewithit/MyFirstApp/fitness.jpg')}/>
      <View style={styles.top}>
      <ImageBackground
        style={{width:"100%", height:175, position: 'absolute', top:0}}
        source={require('/Users/aryannair/donewithit/MyFirstApp/blue-gradient.jpg')}
      />
    <Text style = {styles.headtext}>Login page</Text>
      </View>

    <View style={styles.spacing}>
        <TextInput 
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='white'
        title='password'></TextInput>

        <TextInput 
        style={styles.inputs}
        placeholder='Username'
        placeholderTextColor='white'
        title='username'></TextInput>

        <Button title='Log in'/>
        <Button title='New User? Sign up'></Button>
    </View>
    </SafeAreaView>
  )}
}

const containerStyle = {backgroundColor:"orange"};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0
  },

  top: {
    flex:0.217,
    borderWidth: 3,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'dodgerblue'
  },

    topText: {
      fontFamily: 'arial',
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 40,
      color:'white',
      position: 'absolute',
      top: 25, 
      left: 50, 
    },

    midText: {
      fontFamily: 'arial',
      fontWeight: 'bold',
      fontStyle: 'italic',
      color:'white',
      fontSize: 40,
      position: 'absolute',
      top: 75, 
      left: 90, 
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

   spacing: {
    alignContent:'space-around',
    position:'absolute',
    top:500,
    left: 45,
    width: '80%',
    height: '50%'
   },

   headtext: {
    fontSize: 35,
    color:'white',

   },

   input: { 
       width: 320,
       height:45,
       borderRadius:25,
       fontSize:16,
       paddingLeft:40,
       backgroundColor:'grey',
       marginHorizontal:5,
       top:-20
   },

   inputs: { 
    width: 320,
    height:45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:40,
    backgroundColor:'grey',
    marginHorizontal:5,
    top:-150
},

});
