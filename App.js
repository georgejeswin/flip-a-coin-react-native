import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [coin,setCoin]=useState('head');
  const handlePress=()=>{
    const random=Math.floor(Math.random()*2) +1;
    if(random===1){
      setCoin('head');
    }else{
      setCoin('tail');
    }
  }
  return (
    <View style={styles.container}>
      {coin==='head'?(
         <Image source={require('./assets/head.png')} style={{
          width:310,
          height:310
        }} />
      ):(
        <Image source={require('./assets/tail.png')} style={{
          width:310,
          height:310
        }} />
      )}
       
        
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={{
          fontSize:17,
          fontWeight:'bold'
        }}>Flip Coin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#1a0f00'
  },
  button:{
    backgroundColor:'#e68a00',
    paddingHorizontal:24,
    paddingVertical:22,
    borderRadius:10,
    marginTop:30
  }
});
