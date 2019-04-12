import React from "react";
import { FlatList, View, TouchableOpacity, Text, Image } from "react-native";
// import { getAssetByFilename } from "./Asset";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class FriendListScreen extends React.Component {
  static navigationOptions = props => ({
    title: "Friends List",
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     style={{ width: 40, height: 40, tintColor: tintColor }}
    //     source={require("../../../assets/icons/mask.png")}
    //   />
    // )
    tabBarIcon: ({ focused, tintColor }) => {
      // const { routeName } = navigation.state;
      const routeName = "Home";
      let iconName;
      if (routeName === "Home") {
        iconName = `ios-information-circle${focused ? "" : "-outline"}`;
      } else if (routeName === "Settings") {
        iconName = `ios-options${focused ? "" : "-outline"}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    }
  });

  constructor() {
    super();

    this.state = {
      friends: [
        { id: "0", name: "Linhtd", photoFilename: "linhtd.jpg" },
        { id: "1", name: "Xuan Nguyen", photoFilename: "taotuan.jpeg" },
        { id: "2", name: "Ronaldo", photoFilename: "pic3.jpg" },
        { id: "3", name: "Messi", photoFilename: "pic4.jpg" }
      ]
    };
  }

  render() {
    return (
      <FlatList
        data={this.state.friends}
        keyExtractor={item => item.id}
        renderItem={item => (
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Intro", {
                imageFilename: item.item.photoFilename
              })
            }
            style={{
              width: "100%",
              height: 70,
              flexDirection: "row",
              paddingHorizontal: 20,
              borderBottomWidth: 1,
              borderColor: "#0002"
            }}
          >
            <Image
              style={{
                alignSelf: "center",
                resizeMode: "cover",
                width: 50,
                height: 50,
                borderRadius: 25
              }}
              source={require("../../../assets/icons/mask.png")}
            />
            <Text style={{ alignSelf: "center", marginLeft: 10 }}>
              {item.item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}
