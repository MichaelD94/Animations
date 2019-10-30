import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import animation from "./assets/animation/city.json";
import animation1 from "./assets/animation/bar.json";
import animation2 from "./assets/animation/like.json";
import LottieView from "lottie-react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.text} >Teste animações react native</Text>     
      <LottieView source={animation} autoPlay style={StyleSheet.create({height:200, width: 200})}/>      
      <LottieView source={animation1} autoPlay style={StyleSheet.create({height:200, width: 200})}/>      
      <LottieView source={animation2} autoPlay style={StyleSheet.create({height:200, width: 200})}/>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 22,
    fontWeight: "bold"
  },
  animation:{
    width: 400,
    height: 400
  }
});
