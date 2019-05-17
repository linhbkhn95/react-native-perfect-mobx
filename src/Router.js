import React from "react";
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import {
  observer
} from "mobx-react/native";

// import appStore from './stores/appStore';
import NavigationService from "./components/navigation/NavigationService";
import IntroScreen from "./components/screen/Intro";
import SwitchNavigator from './components/navigation/SwtichNavigator';
import StackNavigator from './components/navigation/StackNavigator';
import BottomTabNavigator from "./components/navigation/BottomTabNavigator";
import MaterialTopTabNavigator from './components/navigation/MaterialTopTabNavigator';
import MaterialBottomTabNavigator from './components/navigation/MaterialBottomTabNavigator';
import DrawerNavigator from "./components/navigation/DrawerNavigator";
import Login from "./components/screen/login";
import CustomNavigator from './components/navigation/CustomNavigator';
import NotFoundScreen from './components/screen/NotFound';

@observer
class RootNavigator extends React.Component {
  state = {
    initScreen: "Login"
  };

  render() {
    const routeConfig = {
      Intro: {
        screen: IntroScreen,
        path: "Intro"
      },
      DrawerNavigator: {
        screen: DrawerNavigator,
        path: "DrawerNavigator"
      },
      Login: {
        screen: Login,
        path: "Login"
      },
      SwitchNavigator: {
        screen: SwitchNavigator,
      },
      StackNavigator: {
        screen: StackNavigator,
      },
      BottomTabNavigator: {
        screen: BottomTabNavigator,
        path: "Home"

      },
      MaterialTopTabNavigator: {
        screen: MaterialTopTabNavigator,
      },
      MaterialBottomTabNavigator: {
        screen: MaterialBottomTabNavigator,
      },
      DrawerNavigator: {
        screen: DrawerNavigator,
      },
      CustomNavigator: {
        screen: CustomNavigator,
      },
      NotFound: {
        screen: NotFoundScreen,
        path: 'NotFound',
      },
    };

    const navigatorConfig = {
      initialRouteName: this.state.initScreen,
      // header: null,
      // headerMode: 'none',
      gesturesEnabled: true,
      statusBarStyle: "light-content"
    };

    const RootStackNavigator = createStackNavigator(
      routeConfig,
      navigatorConfig
    );
    const AppContainer = createAppContainer(RootStackNavigator);

    return ( <
      AppContainer ref = {
        v => {
          if (v) {
            NavigationService.setTopLevelNavigator(v);
          }
        }
      }
      uriPrefix = "/" >
      <
      RootStackNavigator / >
      <
      /AppContainer>
    );
  }
}

export default RootNavigator;