import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {HomeScreen, GameScreen, Dashboard} from './Screens.js';

const TabNavigator = createBottomTabNavigator (
    {
        First: {screen: Dashboard},
        Second: {screen: HomeScreen},
        Third: {screen: GameScreen}
    }, 
    {
        tabBarOptions: {
            activeTintColor: 'orange',

            inactiveTintColor: 'blue',

            activeBackgroundColor: 'green',

            inactiveBackgroundColor: 'yellow',

            style: {borderWidth: 2, borderColor: 'purple'},

            labelStyle: {fontWeight: 'bold'},

            tabStyle: {paddingBottom: 16},

            
        }
    }
)

const AppTabNavigator = createAppContainer(TabNavigator);
export default AppTabNavigator;