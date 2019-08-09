import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from './Screens.js';
import Dashboard from './Dashboard.js';

// const TabNavigator = createBottomTabNavigator (
//     {
//         First: {screen: Dashboard},
//         Second: {screen: GameScreen}
//     }, 
//     {
//         tabBarOptions: {
//             activeTintColor: 'orange',

//             inactiveTintColor: 'blue',

//             activeBackgroundColor: 'green',

//             inactiveBackgroundColor: 'yellow',

//             style: {borderWidth: 2, borderColor: 'purple'},

//             labelStyle: {fontWeight: 'bold'},

//             tabStyle: {paddingBottom: 16},

            
//         }
//     }
// )


const AuthenticationNavigator = createStackNavigator({
    Home: HomeScreen,
    // TabNavigator: TabNavigator
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            title: 'Dashboard'
        }
    }, 
        initialRouteName: 'Home'
}
)

const AppNavigator = createAppContainer(AuthenticationNavigator);
// export const TabNavigation = createAppContainer(TabNavigator);

export default AppNavigator;
// const Router = createStackNavigator(
//     {
//       Home: HomeScreen,
//       Game: GameScreen,
//       Dashboard: Dashboard
//     },
//     {
//       initialRouteName: "Home",
//       defaultNavigationOptions: {
//         headerTitle: "OfficeOlympics"
//       }
//     }
//   );

//   const AppNavigator = createAppContainer(Router);
// const TabNavigator = createMaterialBottomTabNavigator({
//   HomeScreen: HomeScreen,
// }, 
// {
//   initialRouteName: 'HomeScreen',
//   activeColor: '#ee1986',
//   inactiveColor: '#f24b99',
//   barStyle: {
//       backgroundColor: '#256eb0'
//   }
// }
// )