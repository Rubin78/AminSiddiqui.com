import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

export default class App extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.imag_with_text}>
          <Image
            style={Styles.image_inside_image_with_text}
            source={require("./assets/icon.png")}
          />

          <Text style={Styles.text_inside_image_with_text}>
            CREATE YOUR ACCOUNT
          </Text>
        </View>

        <View style={Styles.form}>
          <ScrollView>
            <TextInput
              style={Styles.input}
              underlineColor="#90d6a9"
              label="Name"
            />
            <TextInput
              style={Styles.input}
              underlineColor="#90d6a9"
              label="Email"
            />

            <TextInput
              style={Styles.input}
              underlineColor="#90d6a9"
              label="Mobile Number"
            />
            <TextInput
              style={Styles.input}
              underlineColor="#90d6a9"
              label="Pincode"
            />
            <TextInput
              style={Styles.input}
              underlineColor="#90d6a9"
              label="Password"
            />
            <TextInput
              style={Styles.input}
              underlineColor="#90d6a9"
              label="Confirm Password"
            />
          </ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("OTP")}
              style={{
                borderWidth: 2,
                borderColor: "#f7f7f7",
                backgroundColor: "#90d6a9",
                borderRadius: 30,
                width: widthPercentageToDP(55.5),
                height: heightPercentageToDP(8),
                marginBottom: 10,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 20, textAlign: "center" }}
              >
                Create Account{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
