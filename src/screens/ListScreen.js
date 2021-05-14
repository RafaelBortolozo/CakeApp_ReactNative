import React, { useState } from "react";
import { StyleSheet, FlatList, View, ScrollView } from "react-native";
import { Button, Divider} from "react-native-paper"
import OrderItem from "../components/OrderItem";
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

export default function ListScreen(props){
    
    let [orders, setOrders]= useState([])

    getOrders()

    const removeOrder= (id) => {
        db.collection('orders').doc(id).delete()
        getOrders()
    }

    async function getOrders(){
        const orderRef = db.collection('orders')
        const snapshot= await orderRef.get()
    
        let orders = snapshot.docs.map(doc => {
            return order = {id: doc.id, ...doc.data()}
        })

        setOrders(orders)
    }

    return (
        <View style={styles.container}>
            <View style={styles.view}>

                <Button style={styles.addBtn} 
                        icon="plus" 
                        mode="contained"
                        onPress={() => props.navigation.navigate('Create')}>
                        ADD
                </Button>

                <FlatList style={styles.ordersList}
                    data={orders}     
                    keyExtractor={(order) => order.id}
                    renderItem={(element) => {
                        return (
                            <View>
                                <OrderItem order={element.item} removeOrder={removeOrder}/>
                                <Divider />
                            </View>
                        )
                    }}
                />
            </View> 
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f8edeb',
        flex: 1
    },
    view: {
        width: '100%',
        marginBottom: 50
    },
    descriptionInput:{
        marginTop: 15
    },
    ordersList: {
        marginTop: 10,
        backgroundColor: '#fae1dd'
    },
    addBtn: {
        marginLeft: 250,
        marginRight: 15,
        marginTop: 10,
        backgroundColor: '#f4978e'
    }
    
})
