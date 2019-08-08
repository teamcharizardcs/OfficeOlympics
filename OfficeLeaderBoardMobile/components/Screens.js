import { Text, View, ScrollView } from "react-native";
import styles from "./Styles";
//   import { createStackNavigator } from "react-navigation";
import {ThemeProvider, Input, Button} from 'react-native-elements';
import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
//   import AppTabNavigator from './Navigator2';
// import { TabNavigation } from "./Navigator";

//   import {createAppContainer} from 'react-navigation';
// import Navigation from './components/Navigator';

const theme = {
  Button: {
    raised: true,
    containerStyle: {
      marginTop: 10,
      backgroundColor: "black"
    }
  }
};


class HomeScreen extends Component {
  static navigationOptions = {
    title: "Login",
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Input
            placeholder="USERNAME"
            leftIcon={<Icon name="user" size={24} color="#777" />}
          />
          <Input
            placeholder="PASSWORD"
            color="white"
            leftIcon={<Icon name="user" size={24} color="#777" />}
          />
          <Button
            buttonStyle={{ backgroundColor: "#777" }}
            title="Login"
            onPress={() =>
              this.props.navigation.navigate("Dashboard", {
                // we can pass other params in here...
                //these params will carry through to details screen...
                //the following is just an example to be replaced...
                itemId: 86,
                otherParam: "Dashboard"
              })
            }
          />
        </View>
      </ThemeProvider>
    );
  }
}

// class GameScreen extends Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       title: navigation.getParam("otherParam", "A Nested Details Screen")
//     };
//   };
//   render() {
//     const { navigation } = this.props;
//     const itemId = navigation.getParam("itemId", "NO-ID");
//     const otherParam = navigation.getParam("otherParam", "some default value");
//     return (
//       <View style={styles.container}>
//         <Text>DetailsScreen</Text>
//         <Text>itemId: {JSON.stringify(itemId)}</Text>
//         <Text>otherParm: {JSON.stringify(otherParam)}</Text>
//         <RaisedButton
//           title="Go to Games...again"
//           onPress={() =>
//             this.props.navigation.push("Game", {
//               itemId: Math.floor(Math.random() * 100)
//             })
//           }
//         />
//         <RaisedButton
//           title="Go to Home"
//           onPress={() => this.props.navigation.push("Home")}
//         />
//         <RaisedButton
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }



export default HomeScreen;
