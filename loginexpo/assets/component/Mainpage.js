// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class Mainpage extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }










import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import Createtask from "../component/Createtask";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Icon } from "react-native-vector-icons/Icon";
export default class Mainpage extends Component {
  render() {
    return <AppDrawerNavigator />;
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Createtask,
    navigationOptions:{
    drawerIcon:(
      <Icon name="HOME" size={24} color="#c4c4c4">
    )
    }
  },
});

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b2ddc1",
  },

  Text: {
    fontSize: 24,
    color: "white",
  },
});
