import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'

export default class Mainpage extends Component {
  render() {
    return (
      <View style={Styles.Container}>
        <Text style={Styles.Text}> Hello welcome !!!!!!!! </Text>
      </View>
    );
  }
}


const Styles = StyleSheet.create({
  Container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#b2ddc1"
  },

  Text:{

fontSize:24,
color:"white"

  }
});

