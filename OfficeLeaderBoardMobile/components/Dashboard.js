import { ScrollView, Text, Image } from "react-native";
import React, {Component} from 'react';
import styles from "./Styles";
import { Button, Avatar, Input, ListItem, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {LinearGradient} from 'expo-linear-gradient';

const RaisedButton = props => <Button raised {...props} />;

const games = [
  {
    name: 'Ping Pong',
    users: {
      username: 'Soroush',
      rank: "Rank: 1st"
    },
 
  },
  {
    name: 'SmashBros.',
    users: {
      username: 'Vance',
      rank: 'Rank: 2nd'
    },

  },
  {
    name: 'Rage Cage',
    users: {
      username: 'Neftali',
      rank: 'Rank: 3rd'
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
        <LinearGradient colors={['#03738c', '#024059']}>
        <ScrollView>
        
          {/* <Text>DetailsScreen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParm: {JSON.stringify(otherParam)}</Text> */}
          <Text>GameCreatorHere...</Text>
          <Input
            placeholder="Game Input"
            leftIcon={<Icon name="user" size={24} color="#ffffff" />}
          />
          {/* <Divider style ={{backgroundColor : "#777"}}/>; */}
          <Text>GameContainerGoesHere...</Text>
            {games.map((u, i) => {
              return (
                <Card key={i} title={u.name} color="#fff" containerStyle={{padding: 0, borderRadius: 10, overflow: 'hidden', backgroundColor: 'transparent'}}>
                {games.map((u, i) => {
                  return (
                    <ListItem
                      containerStyle={{backgroundColor: 'transparent'}}
                      
                      key={i}
                      title={u.users.username}
                      subtitle={u.users.rank}
                      color="#ffffff"
                      chevron
                      />
                  )
                })}
              </Card>
              )
            })}
                 <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
        
    
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
        </LinearGradient>
      );
    }
  }