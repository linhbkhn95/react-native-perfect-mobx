// @flow
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Input, Avatar, Button } from "react-native-elements";
const BG_IMAGE = require("../../../../assets/images/wallpaper_2.jpg");
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
type Props = {};
type State = {};

class Login extends Component<Props, State> {
  static navigationOptions = {
    header: null,

    title: "Login",
    headerStyle: {
      backgroundColor: "#7384B4"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  onPress = () => {
    this.props.navigation.navigate("BottomTabNavigator");
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          {/* <Text style={styles.textLogin}> Login </Text> */}

          {/* <Input
            leftIcon={
              <Icon
                name="envelope-o"
                type="font-awesome"
                color="rgba(0, 0, 0, 0.38)"
                size={25}
                style={{ backgroundColor: "transparent" }}
              />
            }
            keyboardAppearance="light"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            inputStyle={{ marginLeft: 10 }}
            placeholder={"Email"}
            containerStyle={{
              borderBottomColor: "rgba(0, 0, 0, 0.38)"
            }}
            errorMessage={
              1 ? null : 'Please enter a valid email address'
            }
          /> */}
          <Input
            placeholder="username"
            keyboardAppearance="light"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            inputStyle={{ marginLeft: 10, color: "white" }}
            placeholder={"Email"}
            placeholderTextColor="#7384B4"
            containerStyle={{
              borderBottomColor: "rgba(0, 0, 0, 0.38)",
              marginBottom: 15
            }}
            leftIcon={
              <Icon
                name="user"
                type="font-awesome"
                color="#7384B4"
                size={25}
                style={{ backgroundColor: "transparent" }}
                size={24}
              />
            }
          />
          <Input
            placeholder="password"
            keyboardAppearance="light"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#7384B4"
            keyboardType="email-address"
            returnKeyType="next"
            inputStyle={{ marginLeft: 10, color: "white" }}
            placeholder={"Email"}
            containerStyle={{
              borderBottomColor: "rgba(0, 0, 0, 0.38)",
              marginBottom: 15
            }}
            leftIcon={
              <Icon
                name="lock"
                type="font-awesome"
                color="#7384B4"
                size={25}
                style={{ backgroundColor: "transparent" }}
                size={24}
              />
            }
          />

          <Button
            icon={<Icon name="sign-in" size={24} color="#7384B4" />}
            buttonStyle={styles.buttonStyle}
            title="Login"
            onPress={this.onPress}
            titleStyle={styles.titleStyle}
          />
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textLogin: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    marginBottom: 20
    // backgroundColor: "transparent"
  },
  buttonStyle: {
    padding: 15,
    backgroundColor: "transparent"
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    fontSize: 20,
    marginLeft: 10,
    color: "#7384B4"
  }
});

export default Login;
