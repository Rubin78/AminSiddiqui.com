import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  
  FlatList,
  
  
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
              },
            ]}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    margin: 22,
                    backgroundColor: "red",
                    
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      flex: 2,
                      backgroundColor: "green",
                    }}
                  >
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

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    flex: 2,
    borderWidth: 1,
    borderColor: "#f7f7f7",
    margin: 15,
    borderRadius: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    backgroundColor: "white",
    height: 170,
    elevation: 9,
    borderRadius: 20,
  },
});