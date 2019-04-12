// @flow
// eslint-disable-next-line
/*eslint-disable */
import { observer } from "mobx-react";
import { observable, action } from "mobx";

import { inject } from "mobx-react/native";

import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Button
} from "react-native";

import { ratio, colors } from "../../utils/Styles";
import User from "../../models/User";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  txt: {
    fontSize: 20,
    marginBottom: 20
  },
  txtDrawer: {
    color: "tomato",
    fontSize: 18
  }
});
type Props = {
  user: User
};

type State = {};

@inject("store")
@observer
class Screen extends Component<Props, State> {
  setName = name => {
    this.props.store.user.setName(name);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> {this.props.store.user.displayName} </Text>
        <Button
          onPress={() => this.props.navigation.navigate("Screen2")}
          title="Navigate"
        />
        <Button onPress={() => this.setName(Math.random())} title="Set  name" />
        {this.props.navigation.getParam("isDrawer") ? (
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Text style={styles.txtDrawer}> Open Drawer </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}
// Screen = inject(stores => ({
//   user: stores.store.user
// }))(Screen);
// export default inject(stores => ({
//   displayName: stores.store.user.displayName
// }))(Screen);
export default Screen;
