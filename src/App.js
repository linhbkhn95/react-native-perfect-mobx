import { getStatusBarHeight } from "react-native-status-bar-height";
import { ThemeProvider } from "react-native-elements";

import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions,
  AsyncStorage,
  Alert
} from "react-native";
// import RootStackNavigator from "./components/navigation/RootStackNavigator";
import Router from "./Router";
import { Provider } from "mobx-react";
import { observer } from "mobx-react/native";
import appStore from "./stores/appStore";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <Provider store={appStore}>
          <Router />
        </Provider>
      </ThemeProvider>
    );
  }
}
        // {/* <View style={styles.container}> */} {/* <RootStackNavigator /> */}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingTop: Platform.OS === 'ios' ? getStatusBarHeight(false) : 0, // false to get height of android too.
  //   flexDirection: 'column',
  //   backgroundColor: 'transparent',
  // },
});

export default App;
