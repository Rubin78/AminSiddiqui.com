import React,{Component} from 'react'
import {View,Text,StyleSheet,Image,Dimensions,TextInput,TouchableOpacity,secureTextEntry,AppRegistry} from 'react-native'
import { } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { createStackNavigator } from 'react-navigation-stack';
import Createaccount from './assets/component/Createaccount';
// import MainGym from './MainGym';
// import NewAccount from './NewAccount'
// import mainpage from '../componenet/mainpage'
class App extends React.Component{

constructor(props){
  super(props);
  
}
    
ForgotPassword(){
  
   this.props.navigation.navigate('ForgotPassword')
}
static navigationOptions = {
    header : null
};


    state = {
        text: ''
      };
    render(){
        return(
                <View style={Styles.container}>
                 
                     <View style={Styles.conatiner3}>
                     

                         <TextInput style={Styles.text1}
                          onChangeText={(text) => this.setState({text})}
                          value={this.state.text}
                         placeholder='Email'
                         placeholderTextColor = "#73D5E8"
                         />
                            <TextInput style={Styles.text2}
                             placeholder='password' secureTextEntry={true}
                             placeholderTextColor = "#73D5E8"
                             
                         />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MainGym')} style={{paddingHorizontal:heightPercentageToDP(2),height: heightPercentageToDP(7.7),width:widthPercentageToDP(83.9),borderWidth:2,borderColor:'#f7f7f7',backgroundColor:'#73D5E8',borderRadius:6,margin:30,marginTop:heightPercentageToDP(1.7),justifyContent:'center'}}>
                        <Text style={{color:'white',fontSize:21,textAlign:'center'}}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{justifyContent:'center',flexDirection:'row',textAlign:'center',marginTop:heightPercentageToDP(-1.2),color:'#73D5E8',fontSize:14.8}} onPress={()=> this.ForgotPassword()}>Forgot password?</Text>
                        
                         </View>
                         <View style={{flex:2,alignItems:'center',}}>
                        <Text style={{position:'absolute',bottom:0,color:'#73D5E8',marginBottom:10,fontSize:14.8}}>Don't have an account? <Text style={{textDecorationLine: 'underline',fontSize:14.8}}onPress={()=>this.props.navigation.navigate('Createaccount')}>Create New</Text></Text>
                         </View>
                    </View>

        );  
    }
}


const AppNavigator = createStackNavigator({

    App:{
        screen:App,
        
     },

  
     Createaccount:{
        screen:Createaccount,
        navigationOptions: {
            header: null // Will hide header for all screens of current stack 
    
        }
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
});

