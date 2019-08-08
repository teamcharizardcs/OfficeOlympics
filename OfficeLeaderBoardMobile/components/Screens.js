import { Text, View, ScrollView, ImageBackground } from "react-native";
import styles from "./Styles";
//   import { createStackNavigator } from "react-navigation";
import {ThemeProvider, Input, Button} from 'react-native-elements';
import React, { Component } from "react";
import Icon from "react-native-vector-icons/EvilIcons";
import Background from '../assets/images/background.jpg'
import * as Font  from 'expo-font';
//   import AppTabNavigator from './Navigator2';
// import { TabNavigation } from "./Navigator";



//   import {createAppContainer} from 'react-navigation';
// import Navigation from './components/Navigator';

// const theme = {
//   Button: {
//     raised: true,
//     containerStyle: {
//       marginTop: 10,
//       backgroundColor: LinearGradient("#03738c", '#024059')
//     }
//   }
// };


class HomeScreen extends Component {
  static navigationOptions = {
    header: null
    // title: "Login",
    // headerStyle: {
    //   backgroundColor: "white"
    // },
    // headerTintColor: "black",
    // headerTitleStyle: {
    //   fontWeight: "bold"
    // }
  };
   state = {
    fontLoaded: false
  }
  async componentDidMount(){
   await Font.loadAsync({
      'Permanent-Marker': require('../assets/fonts/PermanentMarker-Regular.ttf')
    })
    this.setState({ fontLoaded: true })
  }
 
  render() {

    return (

    
      
      <ImageBackground source={Background} style={{width: '100%', height: '100%'}}>    
        { this.state.fontLoaded? (
      <Text style={{ fontFamily: 'Permanent-Marker', fontSize: 45, position: 'absolute', top: 80, left: 10, color: '#fff'}}>Office Olympics</Text>
    ): null}
   <View style={styles.container}>
    

          <Input
            placeholder="Username"
            placeholderTextColor='white'
            inputContainerStyle={{borderRadius: 20, overflow:'hidden', borderColor: 'white'}}
            leftIcon={<Icon name="user" size={32} color="white" />}
          />
          <Input
            containerStyle={{marginTop: 10}}
            placeholder="Password"
            placeholderTextColor='white'
            color="white"
            inputContainerStyle={{borderRadius: 20, overflow:'hidden', borderColor: 'white'}}
            leftIcon={<Icon name="lock" size={32} color="white" />}
          />
          <Button
            containerStyle={{margin: 10}}
            buttonStyle={{backgroundColor: 'rgba(255, 255, 255, .4)', borderRadius: 20, borderColor: '#ffffff', overflow: 'hidden'}}
            title="Login"
            titleStyle={{color: 'white', width: '50%'}}
            type="outline"
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
 
            </ImageBackground>
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
