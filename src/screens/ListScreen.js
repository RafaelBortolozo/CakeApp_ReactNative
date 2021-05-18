import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View} from "react-native";
import { Button, Divider} from "react-native-paper"
import OrderItem from "../components/OrderItem";
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

export default function ListScreen(props){

    let [orders, setOrders]= useState([])
    useEffect(() => {
        async function getOrders(){
            const orderRef = db.collection('orders')
            const snapshot= await orderRef.get()
        
            let orders = snapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })

            setOrders(orders)
        }
        getOrders()
    }, [props.navigation])

    function removeOrder(id){
        db.collection('orders').doc(id).delete();
        setOrders(current => current.filter(item => item.id !== id));
    }

    async function editOrder(id) {
        const snapshot = await db.collection('orders').doc(id).get();
        const order = snapshot.data();
        
        props.navigation.navigate('Edit', {id: id, ...order});
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
                            <View key={element.index}>
                                <OrderItem order={element.item} removeOrder={removeOrder} editOrder={editOrder}/>
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
