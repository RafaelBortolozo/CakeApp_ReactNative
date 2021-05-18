import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "./src/screens/LoginScreen";
import ListScreen from "./src/screens/ListScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    List: ListScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Pedidos de bolos"
    }
  }
);

export default createAppContainer(navigator);
