import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import {
  createStackNavigator,
  TransitionPresets,
} from "react-navigation-stack";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { TextInput } from "react-native-paper";
import Login from "./assets/component/Login";


class App extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.conatiner3}>s

          <TextInput
            style={{
              borderWidth: 1.5,
              borderColor: "#b2ddc1",
              paddingHorizontal: heightPercentageToDP(2),
              width: widthPercentageToDP(84),
              height: heightPercentageToDP(8),
              margin: 30,
              marginBottom: 0,
              backgroundColor: "#8cf7b247",
              fontSize: 17,
              borderRadius: 2,
              color: "#4C4B4B",
            }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder="Email"
            placeholderTextColor="#90d6a9"
          />

          <TextInput
            style={{
              borderWidth: 1.5,
              borderColor: "#b2ddc1",
              paddingHorizontal: heightPercentageToDP(2),
              width: widthPercentageToDP(84),
              height: heightPercentageToDP(8),
              margin: 30,
              marginTop: 18,
              backgroundColor: "#8cf7b247",
              fontSize: 17,
              borderRadius: 2,
            }}
            placeholder="password"
            secureTextEntry={true}
            placeholderTextColor="#90d6a9"
          />

          <TouchableOpacity
            style={{
              paddingHorizontal: heightPercentageToDP(2),
              height: heightPercentageToDP(7.7),
              width: widthPercentageToDP(83.9),
              borderWidth: 2,
              borderColor: "#90d6a9",
              backgroundColor: "#90d6a9",
              borderRadius: 6,
              margin: 30,
              marginTop: heightPercentageToDP(1.7),
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 21, textAlign: "center" }}>
              Login
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              justifyContent: "center",
              flexDirection: "row",
              textAlign: "center",
              marginTop: heightPercentageToDP(-1.2),
              color: "#90d6a9",
              fontSize: 14.8,
            }}
            onPress={() => this.ForgotPassword()}
          >
            Forgot password?
          </Text>
        </View>
        <View style={{ flex: 2, alignItems: "center" }}>
          <Text
            style={{
              position: "absolute",
              bottom: 0,
              color: "#90d6a9",
              marginBottom: 10,
              fontSize: 14.8,
            }}
          >
            Don't have an account?{" "}
            <Text
              style={{ textDecorationLine: "underline", fontSize: 14.8 }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Create New
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      header: null, // Will hide header for all screens of current stack
    },
  },

  Login:{
    screen:Login,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  conatiner3: {
    flex: heightPercentageToDP(10.5),
    justifyContent: "center",
  },
  img: {
    marginBottom: 33,
    alignSelf: "center",
  },
  textInputStyle: {
    color: "red",
  },
});
