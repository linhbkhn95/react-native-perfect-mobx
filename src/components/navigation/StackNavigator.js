import {
  createStackNavigator
} from 'react-navigation';

import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import Screen4 from '../screen/Screen4';
import ListUser from '../screen/ListUser';
import BottomTabNavigator from './BottomTabNavigator'
export default createStackNavigator({
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  ListUser,
  BottomTabNavigator,
}, {
  initialRouteName: 'Screen1',
  headerMode: 'none',
}, );