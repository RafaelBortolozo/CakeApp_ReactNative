import React from "react";
import { StyleSheet} from "react-native";
import { List, Button } from "react-native-paper"
import { AntDesign } from '@expo/vector-icons';

const OrderItem= (props) => {  
  const description= 
`Date delivery: ${props.order.date_delivery}
Size: ${props.order.size}
fillings: ${props.order.filling_1}, ${props.order.filling_2}, ${props.order.filling_3}
Comments: ${props.order.comments}`
  
  return (
    <List.Item
        title={`Client: ${props.order.name}`}
        description={description}
        descriptionNumberOfLines={5}
        right={paperProps => 
           <Button style={styles.icon} onPress={() => props.removeOrder(props.order.id)}>
               <AntDesign {...paperProps} style={styles.icon} name="closesquare" size={25} color="#fc5c65" />
           </Button>}
    />
  )
}

const styles = StyleSheet.create({
    icon: {
        marginTop: 30
    }
})

export default OrderItem