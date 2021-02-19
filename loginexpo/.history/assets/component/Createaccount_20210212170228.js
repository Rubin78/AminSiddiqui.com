// import React, { Component } from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import {
//   heightPercentageToDP,
//   widthPercentageToDP,
// } from "react-native-responsive-screen";
// import { ScrollView } from "react-native-gesture-handler";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// import { TextInput } from "react-native-paper";

// export default class Login extends Component {
//   render() {
//     return (
//       <View style={Styles.container}>
//         <View style={Styles.imag_with_text}>
          

//           <Text style={Styles.text_inside_image_with_text}>
//             CREATE YOUR ACCOUNT
//           </Text>
//         </View>

//         <View style={Styles.form}>
//           <ScrollView>
//             <TextInput
//               style={Styles.input}
//               underlineColor="#90d6a9"
//               label="Name"
//             />
//             <TextInput
//               style={Styles.input}
//               underlineColor="#90d6a9"
//               label="Email"
//             />
            

//             <TextInput
//               style={Styles.input}
//               underlineColor="#90d6a9"
//               label="Mobile Number"
//             />
//             <TextInput
//               style={Styles.input}
//               underlineColor="#90d6a9"
//               label="Pincode"
//             />
//             <TextInput
//               style={Styles.input}
//               underlineColor="#90d6a9"
//               label="Password"
//             />

//             <TextInput
//               style={Styles.input}
//               underlineColor="#90d6a9"
//               label="Confirm Password"
//             />

//           </ScrollView>
//           <View
//             style={{
//               flex: 1,
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "row",
//             }}
//           >
//             <TouchableOpacity
//               onPress={() => this.props.navigation.navigate("login")}
//               style={{
//                 borderWidth: 2,
//                 borderColor: "#f7f7f7",
//                 backgroundColor: "#90d6a9",
//                 borderRadius: 30,
//                 width: widthPercentageToDP(55.5),
//                 height: heightPercentageToDP(8),
//                 marginBottom: 10,
//                 justifyContent: "center",
//               }}
//             >

//               <Text
//                 style={{ color: "white", fontSize: 20, textAlign: "center" }}
//               >
//                 Create Account{" "}
//               </Text>



//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   imag_with_text: {
//     flex: 1.8,
//     paddingBottom: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   form: {
//     flex: 7.7,
//     paddingTop: heightPercentageToDP(2.5),
//     margin: 22,
//   },
//   image_inside_image_with_text: {
//     height: heightPercentageToDP(6),
//     width: widthPercentageToDP(14),
//   },
//   text_inside_image_with_text: {
//     position: "absolute",
//     bottom: 0,
//     fontSize: 26,
//     fontFamily: "open-sans-Regular",
//     color: "#777E8B",
//   },
//   input: {
//     margin: heightPercentageToDP(0.6),
//     marginTop: 0,
//     backgroundColor: "white",
//     fontSize: 13.5,
//   },
// });



import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import * as Font from "expo-font";
import { ScrollView } from "react-native-gesture-handler";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Mainpage from "./Mainpage";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
class Createaccount extends React.Component {
  constructor(props) {
    super(props);
    
  }


  static navigationOptions = { header: null };

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.imag_with_text}>
         

          <Text style={Styles.text_inside_image_with_text}>
            CREATE YOUR ACCOUNT
          </Text>
        </View>

        <View style={Styles.form}>
          <ScrollView>
            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label="Name"
            />
            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label="Email"
            />

            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label="Mobile Number"
            />
            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label="Pincode"
            />
            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label="Password"
            />
            <TextInput
              style={Styles.input}
              underlineColor="#73D5E8"
              label="Confirm Password"
            />
          </ScrollView>
          <View
            style={Styles.bottom}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("OTP")}
              style={Styles.submitbutton}
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
const AppNavigator = createStackNavigator({
  Createaccount: {
    screen: Createaccount,
  },
  Mainpage: {
    screen: App,
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
  imag_with_text: {
    flex: 1.8,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  form: {
    flex: 6,
    paddingTop: heightPercentageToDP(2.5),
    margin: 22,
  },
  image_inside_image_with_text: {
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(16),
  },
  text_inside_image_with_text: {
    position: "absolute",
    bottom: 0,
    fontSize: 26,
    // fontFamily:'open-sans-Regular' ,
    color: "#777E8B",
  },
  input: {
    margin: heightPercentageToDP(0.6),
    marginTop: 0,
    backgroundColor: "white",
    fontSize: 13.5,
  },

  submitbutton: {
    borderWidth: 2,
    borderColor: "#f7f7f7",
    backgroundColor: "#73D5E8",
    borderRadius: 30,
    width: widthPercentageToDP(55.5),
    height: heightPercentageToDP(8),
    marginBottom: 10,
    justifyContent: "center",
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
