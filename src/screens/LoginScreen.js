import React, { useState } from "react";
import { Text, StyleSheet, View} from "react-native";
import { TextInput, Button } from "react-native-paper"

export default function LoginScreen(props){
  
  let[email, setEmail]= useState('');
  let[password, setPassword]= useState('')
  
  return (
    <View style= {styles.container}>
      
      <View style={{alignItems: "center"}}>
        <Text style= {styles.title}>LOGIN</Text>
      </View>
      
      <TextInput 
        style={styles.emailInput}
        selectionColor='black'
        placeholder="Email"
        value={email}
        onChangeText={newValue => setEmail(newValue)}         
      />

      <TextInput 
        style={styles.passwordInput}
        selectionColor='black'
        secureTextEntry={true}
        placeholder="Password"
        value={password}
        onChangeText={newValue => setPassword(newValue)}         
      />
      
      <Button style={styles.button} mode='contained' onPress={() => props.navigation.navigate('List')}>
        SIGN IN
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8edeb'
  },
  title: {
    fontSize: 30,
    marginTop: 50, 
    marginBottom: 50,
  },
  emailInput: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fcd5ce'
  },
  passwordInput: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fcd5ce'
  },
  button: {
    marginTop: 15,
    marginLeft: 140,
    marginRight: 140,
    backgroundColor: '#f4978e'
  }
})

