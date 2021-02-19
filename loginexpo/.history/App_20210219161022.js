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
import Createtask from './assets/component/Createtaskt';
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
      <View style={{ backgroundColor: "white", marginTop: 0, padding: 5 }}>
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

            <View><TouchableOpacity
              onPress={() => this.props.navigation.navigate("Addtask")}
            >
              <Text>nextpage</Text>
            </TouchableOpacity></View>
          <FlatList
            data={[
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
              {
                taskname: "Erika Mars",
                datereminder: "12/02/18",
                timereminder: "15.43",
                taskdescription:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
              },
            ]}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View
                  style={{
                    flexDirection: "row-reverse",
                    margin: 24,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      flex: 1.2,
                    }}
                  >
                    <Text style={{ fontSize: 20, padding: 4 }}>
                      {item.taskname}
                    </Text>
                    <Text
                      style={{ color: "#B2DDc1", fontSize: 17, padding: 4 }}
                    >
                      Date: {item.datereminder}
                    </Text>
                    <Text style={{ color: "silver", fontSize: 14, padding: 4 }}>
                      Time : {item.timereminder}
                    </Text>
                    <Text style={{ color: "silver", fontSize: 14, padding: 4 }}>
                      {item.taskdescription}
                    </Text>
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

  Addtask: {
    screen: Addtask,
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
    height: 230,
    elevation: 9,
    borderRadius: 20,
  },
});