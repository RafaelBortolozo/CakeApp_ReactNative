import React, { useState } from "react";
import { Text, StyleSheet, View} from "react-native";
import { TextInput, Button } from "react-native-paper"
import SnackBar from 'react-native-snackbar-component'

export default function LoginScreen(props){

  let[email, setEmail]= useState('');
  let[password, setPassword]= useState('')
  let[snackbar, setSnackbar]= useState(false)

  const handleLogin = () => {
    const senhaFake = '123456';
    const emailsPermitidos = ['rafael@gmail.com']

    if (password === senhaFake && emailsPermitidos.some(emailPermitido => emailPermitido === email)){
      props.navigation.navigate('List');
    }else {
      setSnackbar(true)
    }
  }
  
  return (
    <>
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
        
        <Button style={styles.button} mode='contained' onPress={handleLogin}> 
          SIGN IN
        </Button>

      </View>
      <SnackBar visible={snackbar} textMessage="Your email or password is incorrect" actionHandler={() =>{setSnackbar(false)}} actionText="Ok"/>
    </>
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

