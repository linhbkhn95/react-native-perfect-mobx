import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";

import { createBottomTabNavigator } from "react-navigation";
import ListUser from "../screen/ListUser";
import Screen1 from "../screen/Screen1";
import Screen2 from "../screen/Screen2";
import Screen3 from "../screen/Screen3";
import Screen4 from "../screen/Screen4";

import { IC_MASK } from "../../utils/Icons";

const BottomTabNavigator = createBottomTabNavigator(
  {
    ListUser: {
      screen: ListUser,
      path: "/list-user",
      navigationOptions: {
        title: "News",

        tabBarLabel: "List user",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="newsletter" size={30} type="entypo" color={tintColor} />
        )
      }
    },
    Screen2: {
      screen: Screen2,
      path: "/lists",
      navigationOptions: {
        tabBarLabel: "Lists",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="list" size={30} type="entypo" color={tintColor} />
        )
      }
    },
    Screen3: {
      screen: Screen3,
      path: "/input",
      navigationOptions: {
        tabBarLabel: "Input",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="wpforms"
            size={30}
            type="font-awesome"
            color={tintColor}
          />
        )
      }
    },
    Screen4: {
      screen: Screen4,
      path: "/fonts",
      navigationOptions: {
        tabBarLabel: "Fonts",
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? "font" : "font"}
            size={30}
            type="font-awesome"
            color={tintColor}
          />
        )
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        if (!focused) {
          return (
            <Image
              style={{
                width: 24,
                height: 24
              }}
              source={IC_MASK}
            />
          );
        }
        return (
          <Image
            style={{
              width: 24,
              height: 24
            }}
            source={IC_MASK}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      animationEnabled: false,
      tabBarOptions: {
        showLabel: false,
        style: {
          height: 52,
          color: "blue"
        }
      }
    }
  }
);

export default BottomTabNavigator;
