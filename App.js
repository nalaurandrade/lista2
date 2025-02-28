import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ContadorDeLikes() {
  const[likes,setlikes] = useState(0);
  const[deslikes,setdeslikes] = useState(0);  

  function incrementar(){
    setlikes(likes + 1);
    setdeslikes(deslikes + 1);  
  }
  return (
    <View style={styles.container}>
      <Text>Total de Likes:{likes}</Text>
      <TouchableOpacity onPress={() => setlikes(likes+1)}>
        <Text>Deixe seu Like</Text>
      </TouchableOpacity> 
  
      <Text>Total de deslikes:{deslikes}</Text>
      <TouchableOpacity onPress={() => setdeslikes(deslikes+1)}>
        <Text>Deixe seu Deslike</Text>
      </TouchableOpacity>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb6c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
