import { ScrollView, Text } from "react-native";
import React, {Component} from 'react';
import styles from "./Styles";
import { Button, Avatar, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
const RaisedButton = props => <Button raised {...props} />;
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
          <Text>GameContainerGoesHere...</Text>
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