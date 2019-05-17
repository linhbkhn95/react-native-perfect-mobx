import React from "react";
import {
  FlatList,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image
} from "react-native";
// import { getAssetByFilename } from "./Asset";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class FriendListScreen extends React.Component {
  static navigationOptions = {
    // header: null,

    title: "Noi bat",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "#ffff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     style={{ width: 40, height: 40, tintColor: tintColor }}
    //     source={require("../../../assets/icons/mask.png")}
    //   />
    // )
    // tabBarIcon: ({ focused, tintColor }) => {
    //   // const { routeName } = navigation.state;
    //   const routeName = "Home";
    //   let iconName;
    //   if (routeName === "Home") {
    //     iconName = `ios-information-circle${focused ? "" : "-outline"}`;
    //   } else if (routeName === "Settings") {
    //     iconName = `ios-options${focused ? "" : "-outline"}`;
    //   }

    //   // You can return any component that you like here! We usually use an
    //   // icon component from react-native-vector-icons
    //   return <Ionicons name={iconName} size={25} color={tintColor} />;
    // }
  };

  constructor() {
    super();

    this.state = {
      data: [
        {
          id: "0",
          subContent:
            "Juventus vừa chính thức xác nhận Max Allegri sẽ rời CLB sau khi mùa giải 2018/19 kết thúc.",
          title:
            'Juventus chính thức thay "tướng": Vì Ronaldo & tham vọng xưng vương châu Âu',
          cover_image:
            "https://cdn.24h.com.vn/upload/2-2019/images/2019-05-17/120x90/2-640-1558096056-125-width640height480.jpg"
        },
        {
          id: "0",
          subContent:
            "JChuyên gia nghiên cứu về hoa cây cảnh Việt Nam vừa có chia sẻ liên quan đến việc nhóm người ở Hà Tĩnh và Thái Bình đến...",
          title: " Bỏ 3,5 tỷ đồng mua 2 cây lan là rất liều",
          cover_image:
            "https://cdn.24h.com.vn/upload/2-2019/images/2019-05-17/120x90/1558092446-85-155807720787920-thumbnail.jpg"
        }

        // {
        //   id: "1",
        //   name: "Xuan Nguyen",
        //   photoFilename: "taotuan.jpeg"
        // },
        // {
        //   id: "2",
        //   name: "Ronaldo",
        //   photoFilename: "pic3.jpg"
        // },
        // {
        //   id: "3",
        //   name: "Messi",
        //   photoFilename: "pic4.jpg"
        // }
      ]
    };
  }

  render() {
    return (
      // <FlatList
      //   data={this.state.friends}
      //   keyExtractor={item => item.id}
      //   renderItem={item => (
      //     <TouchableOpacity
      //       onPress={() =>
      //         this.props.navigation.navigate("Intro", {
      //           imageFilename: item.item.photoFilename
      //         })
      //       }
      //       style={{
      //         width: "100%",
      //         height: 70,
      //         flexDirection: "row",
      //         paddingHorizontal: 20,
      //         borderBottomWidth: 1,
      //         borderColor: "#0002"
      //       }}
      //     >
      <View style={styles.container}>
3          {this.state.data.map((item, index) => {
            return (
              <View key={index}>
                <Card
                  title={item.title}
                  image={{
                    uri: item.cover_image
                  }}
                >
                  <Text
                    style={{
                      marginBottom: 10
                    }}
                  >
                    {item.subContent}
                  </Text>
                  <Button
                    icon={<Icon name="visibility" color="#ffffff" />}
                    backgroundColor="#03A9F4"
                    buttonStyle={{
                      borderRadius: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 0
                    }}
                    title="xem chi tiết"
                  />
                </Card>
              </View>
            );
          })}
        </ScrollView>
      </View>

      //  </TouchableOpacity>
      // )}
      ///>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingVertical: 20
  }
});
