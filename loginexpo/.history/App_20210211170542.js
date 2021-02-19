import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";


export default function App() {
  return (
    <View style={Styles.container}>
      <View style={Styles.imag_with_text}>
        <Image
          style={Styles.image_inside_image_with_text}
          source={require("../assets/logo(3).png")}
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
            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
              Create Account{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
