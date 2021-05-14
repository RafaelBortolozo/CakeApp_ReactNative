import React, { useState } from "react"
import { View, KeyboardAvoidingView, ScrollView, StyleSheet} from "react-native"
import { TextInput, Button } from "react-native-paper"
import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyADiNyKx9-AoqSrEOVxoonCLEjavIrGa6k",
    authDomain: "pedidosbolos-4bc11.firebaseapp.com",
    projectId: "pedidosbolos-4bc11",
    storageBucket: "pedidosbolos-4bc11.appspot.com",
    messagingSenderId: "146294902907",
    appId: "1:146294902907:web:10ee903242f1235d3252de",
    measurementId: "G-ZHHGTF6XMJ"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()

export default function CreateScreen(props){

  let[order, setOrder]= useState({});

  async function createOrder(){
    const res = await db.collection("orders").add(order)
    return {id: res.id,...order}
  }

  return(
    <KeyboardAvoidingView>
        <ScrollView>
          <View>
            <TextInput 
              style={styles.input}
              selectionColor='black'
              placeholder="Name"
              value={order.name}
              onChangeText={newValue => setOrder({...order, name: newValue})}         
            />

            <TextInput 
              style={styles.input}
              selectionColor='black'
              placeholder="Date delivery"
              value={order.date_delivery}
              onChangeText={newValue => setOrder({...order, date_delivery: newValue})}         
            />

            <TextInput 
              style={styles.input}
              selectionColor='black'
              placeholder="Size"
              value={order.size}
              onChangeText={newValue => setOrder({...order, size: newValue})}         
            />

            <TextInput 
              style={styles.input}
              selectionColor='black'
              placeholder="Filling 1"
              value={order.filling_1}
              onChangeText={newValue => setOrder({...order, filling_1: newValue})}         
            />

            <TextInput 
              style={styles.input}
              selectionColor='black'
              placeholder="Filling 2"
              value={order.filling_2}
              onChangeText={newValue => setOrder({...order, filling_2: newValue})}         
            />

            <TextInput 
              style={styles.input}
              selectionColor='black'
              placeholder="Filling 3"
              value={order.filling_3}
              onChangeText={newValue => setOrder({...order, filling_3: newValue})}         
            />

            <TextInput 
              style={styles.input}
              selectionColor='black'
              placeholder="Comments"
              value={order.comments}
              onChangeText={newValue => setOrder({...order, comments: newValue})}         
            />
            
            <Button style={styles.button} 
                    mode='contained' 
                    onPress={() => {
                      createOrder()
                      props.navigation.navigate('List');
                    }}>
              CREATE
            </Button>
          </View>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles= StyleSheet.create({
  container: {
    backgroundColor: '#f8edeb',
    flex: 1
  },
  input: {
    marginTop: 13,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fcd5ce'
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 140,
    marginRight: 140,
    backgroundColor: '#f4978e'
  }
})