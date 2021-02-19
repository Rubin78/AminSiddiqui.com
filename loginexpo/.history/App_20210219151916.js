import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  StyleSheet,
  FlatList,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { createStackNavigator } from 'react-navigation-stack';
import Createaccount from './assets/component/Createaccount';
import Mainpage from "./assets/component/Mainpage";
import { ScrollView } from "react-native-gesture-handler";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Font.loadAsync({
      "open-sans-Regular": require("../assets/fonts/SourceSerifPro-Regular.ttf"),
    });
  }

  static navigationOptions = {
    header: null,
  };

  state = {
    text: "",
  };
  render() {
    return (
      <View style={{ backgroundColor: "white", marginTop: 0 }}>
        <ScrollView>
          <View>
            <Text
              style={{
                fontSize: 30,
                paddingTop: 20,
                textAlign: "center",
                color: "#757171",
                fontFamily: "open-sans-Regular",
              }}
            >
              Heading
            </Text>
          </View>
          <FlatList
            data={[
              {
                title: "Erika Mars",
                subtitle: "Lactation expert",
                experience: "12 years of experience",
                avtar: require("../assets/doctor.jpeg"),
              },
              {
                title: "Erika Mars",
                subtitle: "Lactation expert",
                experience: "12 years of experience",
                avtar: require("../assets/doctor.jpeg"),
              },
              {
                title: "Erika Mars",
                subtitle: "Lactation expert",
                experience: "12 years of experience",
                avtar: require("../assets/doctor.jpeg"),
              },
              {
                title: "Erika Mars",
                subtitle: "Lactation expert",
                experience: "12 years of experience",
                avtar: require("../assets/doctor.jpeg"),
              },

              {
                title: "Erika Mars",
                subtitle: "Lactation expert",
                experience: "12 years of experience",
                avtar: require("../assets/doctor.jpeg"),
              },
              {
                title: "Erika Mars",
                subtitle: "Lactation expert",
                experience: "12 years of experience",
                avtar: require("../assets/doctor.jpeg"),
              },
            ]}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={{ flexDirection: "row", margin: 22 }}>
                  <View style={{ flexDirection: "column", flex: 2 }}>
                    <Text style={{ fontSize: 20 }}>{item.title}</Text>
                    <Text style={{ color: "#B2DDc1", fontSize: 17 }}>
                      {item.subtitle}
                    </Text>
                    <Text style={{ color: "silver", fontSize: 14 }}>
                      {item.experience}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "space-around",
                    }}
                  >
                    <View
                      style={{
                        borderLeftWidth: 1,
                        borderLeftColor: "#dddddd80",
                      }}
                    />
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("Profile_with_details")
                        }
                      >
                        <Image
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 100,
                            borderWidth: 0.1,
                            borderColor: "#000000",
                          }}
                          source={item.avtar}
                        />
                        <Text
                          style={{
                            fontSize: 11,
                            textAlign: "center",
                            marginTop: 5,
                            color: "#c4c4c4",
                          }}
                        >
                          MBBS, MD
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("appoinmentfixdate")
                    }
                    style={{
                      alignSelf: "center",
                      backgroundColor: "#B2DDC1",
                      borderRadius: 20,
                      padding: 3,
                      height: 32,
                      width: 155,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        textAlign: "center",
                      }}
                    >
                      Check Availability{" "}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </ScrollView>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator({
  App: {
    screen: App,
  },

  Createaccount: {
    screen: Createaccount,
    navigationOptions: {
      header: null, // Will hide header for all screens of current stack
    },
  },

  Mainpage: {
    screen: Mainpage,
    navigationOptions: {
      header: null, // Will hide header for all screens of current stack
    },
  },
});
  
  export default createAppContainer(AppNavigator);
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  conatiner3: {
    flex: heightPercentageToDP(10.5),
    justifyContent: "center",
  },
  img: {
    marginBottom: 33,
    alignSelf: "center",

    height: heightPercentageToDP(7),
    width: widthPercentageToDP(17),
  },
  textInputStyle: {
    color: "red",
  },

  text1: {
    borderWidth: 1.5,
    borderColor: "#73D5E8",
    paddingHorizontal: heightPercentageToDP(2),
    width: widthPercentageToDP(84),
    height: heightPercentageToDP(8),
    margin: 30,
    marginBottom: 0,
    backgroundColor: "transparent",
    fontSize: 17,
    borderRadius: 4,
    color: "#4C4B4B",
  },

  text2: {
    borderWidth: 1.5,
    borderColor: "#73D5E8",
    paddingHorizontal: heightPercentageToDP(2),
    width: widthPercentageToDP(84),
    height: heightPercentageToDP(8),
    margin: 30,
    marginTop: 18,
    backgroundColor: "transparent",
    fontSize: 17,
    borderRadius: 4,
  },

  passwordtext: {
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    marginTop: heightPercentageToDP(-1.2),
    color: "#73D5E8",
    fontSize: 14.8,
  },

  createaccounttext: {
    position: "absolute",
    bottom: 0,
    color: "#73D5E8",
    marginBottom: 10,
    fontSize: 14.8,
  },

  submitbutton: {
    paddingHorizontal: heightPercentageToDP(2),
    height: heightPercentageToDP(7.7),
    width: widthPercentageToDP(83.9),
    borderWidth: 2,
    borderColor: "#f7f7f7",
    backgroundColor: "#73D5E8",
    borderRadius: 6,
    margin: 30,
    marginTop: heightPercentageToDP(1.7),
    justifyContent: "center",
  },

  create:{
     textDecorationLine: "underline", fontSize: 14.8 }
  
});

