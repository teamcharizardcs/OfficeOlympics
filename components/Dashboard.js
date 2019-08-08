import { ScrollView, Text, Image, ImageBackground } from "react-native";
import React, { Component } from "react";
// import styles from "./Styles";
import { Button, Avatar, Input, ListItem, Card } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import Pong from "../assets/images/pingpong.jpg";
import SmashBros from "../assets/images/smashbros.jpg";
import RageCage from "../assets/images/ragecage.jpg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Background from '../assets/images/background.jpg'
import { TouchableOpacity } from "react-native-gesture-handler";
const RaisedButton = props => <Button raised {...props} />;

const images = [RageCage, SmashBros, Pong];

const games = [
  {
    name: "Ping Pong",
    users: {
      username: "Soroush",
      rank: "Rank: 1st"
    }
  },
  {
    name: "SmashBros.",
    users: {
      username: "Vance",
      rank: "Rank: 2nd"
    }
  },
  {
    name: "Rage Cage",
    users: {
      username: "Neftali",
      rank: "Rank: 3rd"
    }
  }
];
export default class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
      // headerTitle: (
      //   <Avatar
      //     rounded
      //     source={{
      //       uri:
      //         "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
      //     }}
      //   />
      // )
    };
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const otherParam = navigation.getParam("otherParam", "some default value");
    return (
      // <LinearGradient colors={["#03738c", "#024059"]}>
      <ImageBackground source={Background} style={{width: '100%', height: '100%'}}>    
        <ScrollView>
          {/* <Text>DetailsScreen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParm: {JSON.stringify(otherParam)}</Text> */}

          <Input
            containerStyle={{marginTop: 40}}
            placeholder="     ...game input"
            placeholderTextColor="#ffff"
          
            leftIcon={<Icon name="plus-circle" size={24} color="#ffffff" />}
          />
          {/* <Divider style ={{backgroundColor : "#777"}}/>; */}

          {games.map((u, i) => {
            return (
              // <Image key={i} source={require(images[i])}/>
              <Card
                key={i}
                title={u.name}
                image={images[i]}
                imageStyle={{
                  margin: 10,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  overflow: "hidden"
                }}
              
                titleStyle={{ color: "#fff", textDecorationLine: "underline" }}
                containerStyle={{
                  padding: 0,
                  borderRadius: 10,
                  overflow: "hidden",
                  backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
              >
                {games.map((u, i) => {
                  return (
                    <TouchableOpacity>
                    <ListItem
                      containerStyle={{ backgroundColor: "transparent" }}
                      key={i}
                      color="#ffffff"
                      title={u.users.username}
                      subtitle={u.users.rank}
                      titleStyle={{ color: "#fff" }}
                      subtitleStyle={{ color: "#fff" }}
                      chevron
                    />
                    </TouchableOpacity>
                  );
                })}
              </Card>
            );
          })}
          {/* <Button
                icon={<Icon color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' /> */}

          {/* <RaisedButton
            title="Go to Dashboard...again"
            onPress={() =>
              this.props.navigation.push("Dashboard", {
                itemId: Math.floor(Math.random() * 100)
              })
            }
          />
          <RaisedButton
            title="Go to Home"
            onPress={() => this.props.navigation.push("Home")}
          />
          <RaisedButton
            title="Go to Game"
            onPress={() => this.props.navigation.push("Game")}
          />
          <RaisedButton
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          /> */}
          {/* <TabNavigation  />s */}
        </ScrollView>
      {/* // </LinearGradient> */}
      </ImageBackground>
    );
  }
}
