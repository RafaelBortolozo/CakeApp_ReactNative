import React from "react";
import { View} from "react-native";
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
           <View>
              <Button onPress={() => props.editOrder(props.order.id)}>
                  <AntDesign {...paperProps} name="edit" size={25} color="black" />
              </Button>
              <Button onPress={() => props.removeOrder(props.order.id)}>
                  <AntDesign {...paperProps} name="closesquare" size={25} color="#fc5c65" />
              </Button>
           </View>
        }   
    />
  )
}

export default OrderItem