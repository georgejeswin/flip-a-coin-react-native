import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{}} style={styles.button}>
        <Text>Flip a Coin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'#f1c40f',
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:10,
  }
});
