import { ScrollView, Text, Image } from "react-native";
import React, {Component} from 'react';
import styles from "./Styles";
import { Button, Avatar, Input, ListItem, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const RaisedButton = props => <Button raised {...props} />;

const games = [
  {
    name: 'Ping Pong',
    users: {
      username: 'Soroush',
      rank: 1
    },

  },
  {
    name: 'SmashBros.',
    users: {
      username: 'Vance',
      rank: 1
    },

  },
  {
    name: 'Rage Cage',
    users: {
      username: 'Neftali',
      rank: 1
    },

  }
]
export default class Dashboard extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        headerTitle: (
          <Avatar
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            }}
          />
        )
      };
    };
    render() {
      const { navigation } = this.props;
      const itemId = navigation.getParam("itemId", "NO-ID");
      const otherParam = navigation.getParam("otherParam", "some default value");
      return (
        <ScrollView>
          {/* <Text>DetailsScreen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParm: {JSON.stringify(otherParam)}</Text> */}
          <Text>GameCreatorHere...</Text>
          <Input
            placeholder="Game Input"
            leftIcon={<Icon name="user" size={24} color="#777" />}
          />
          {/* <Divider style ={{backgroundColor : "#777"}}/>; */}
          <Text>GameContainerGoesHere...</Text>
            {games.map((u, i) => {
              return (
                <Card key={i} title={u.name} containerStyle={{padding: 0}}>
                {games.map((u, i) => {
                  return (
                    <ListItem
                      key={i}
                     
                      />
                  )
                })}
              </Card>
              )
            })}
        
    
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
      );
    }
  }