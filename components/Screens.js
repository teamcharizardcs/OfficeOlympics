import { View, ImageBackground } from "react-native";
import styles from "./Styles";
import { Input, Button } from "react-native-elements";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/EvilIcons";
import Background from "../assets/images/background.jpg";

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground
        source={Background}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Input
            placeholder="Username"
            placeholderTextColor="white"
            inputContainerStyle={{
              borderRadius: 20,
              overflow: "hidden",
              borderColor: "white"
            }}
            leftIcon={<Icon name="user" size={32} color="white" />}
          />
          <Input
            containerStyle={{ marginTop: 10 }}
            placeholder="Password"
            placeholderTextColor="white"
            color="white"
            inputContainerStyle={{
              borderRadius: 20,
              overflow: "hidden",
              borderColor: "white"
            }}
            leftIcon={<Icon name="lock" size={32} color="white" />}
          />
          <Button
            containerStyle={{ margin: 10 }}
            buttonStyle={{
              backgroundColor: "rgba(255, 255, 255, .4)",
              borderRadius: 20,
              borderColor: "#ffffff",
              overflow: "hidden"
            }}
            title="Login"
            titleStyle={{ color: "white", width: "50%" }}
            type="outline"
            onPress={() =>
              this.props.navigation.navigate("Dashboard", {
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

export default HomeScreen;
