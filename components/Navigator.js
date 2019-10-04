import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from "./Screens.js";
import Dashboard from "./Dashboard.js";

const AuthenticationNavigator = createStackNavigator({
  Home: HomeScreen,
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: "Dashboard"
    }
  },
  initialRouteName: "Home"
});

const AppNavigator = createAppContainer(AuthenticationNavigator);

export default AppNavigator;
