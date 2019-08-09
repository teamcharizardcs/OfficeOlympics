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
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

const RaisedButton = props => <Button raised {...props} />;

const images = [Pong, SmashBros, RageCage];

// const games = [
//   {
//     name: "Ping Pong",
//     users: {
//       username: "Soroush",
//       rank: "Rank: 1st"
//     }
//   },
//   {
//     name: "SmashBros.",
//     users: {
//       username: "Vance",
//       rank: "Rank: 2nd"
//     }
//   },
//   {
//     name: "Rage Cage",
//     users: {
//       username: "Neftali",
//       rank: "Rank: 3rd"
//     }
//   }
// ];

const mapStateToProps = store => ({
  games: store.game.games,
  newGame: store.game.newGame,
});

const fetchGames = dispatch => fetch('http://192.168.0.127:3000/api/games/1')
    .then(res => res.json())
    .then(res => dispatch(actions.loadGames(res)))
    .catch(e => console.log('Error fetching games', e.stack));

const mapDispatchToProps = dispatch => ({
  loadGames: () => fetchGames(dispatch),
  addGame: (game) => dispatch(actions.addGame(game)),
  setGameName: (game) => dispatch(actions.setNewGame(game)),
});


class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  async componentDidMount() {
    await this.props.loadGames();
    console.log('got games?');
  }

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
            containerStyle={{marginTop: 40, marginRight: 20}}
            placeholder="     ...game input"
            placeholderTextColor="#ffff"
            style={{color: '#fff'}}
            rightIcon={<Icon name="plus-circle" size={24} color="#ffffff" />}
          />
          {/* <Divider style ={{backgroundColor : "#777"}}/>; */}

          {Object.keys(this.props.games).map((u, i) => {
            return (
              // <Image key={i} source={require(images[i])}/>
              <Card
                key={i}
                title={u}
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
                {this.props.games[u].map((user, idx) => {
                  return (
                    <TouchableOpacity>
                    <ListItem
                      containerStyle={{ backgroundColor: "transparent" }}
                      key={`${i}-${idx}`}
                      color="#ffffff"
                      title={user.name}
                      subtitle={user.rank}
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

        </ScrollView>
      </ImageBackground>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

