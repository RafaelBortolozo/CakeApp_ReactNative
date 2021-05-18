import React, { useState } from "react"
import { View, KeyboardAvoidingView, ScrollView, StyleSheet} from "react-native"
import { TextInput, Button } from "react-native-paper"
import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyDP1Z03-bh1NYdkMyyavsv4YSuZkdTXGH4",
  authDomain: "pedidosbolos-9d33a.firebaseapp.com",
  projectId: "pedidosbolos-9d33a",
  storageBucket: "pedidosbolos-9d33a.appspot.com",
  messagingSenderId: "390004766574",
  appId: "1:390004766574:web:c197e351f1a4d3b4a8b37f",
  measurementId: "G-23E9KMWRN9"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()


export default function EditScreen(props){
  const navigation = props?.navigation;
  const itemToUpdate = props.navigation?.state?.params;

  let[order, setOrder]= useState(itemToUpdate);
  
  function editOrder(){
    db.collection("orders").doc(order.id).update(order).then(res => {
      navigation.navigate('List', {
        updated: true,
      })
      }).catch(err => {
        console.log(err)
      })
  }

  return(
    <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.container}>
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
                    onPress={editOrder}>
              EDIT
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