import React from 'react';
import { StyleSheet,View,TextInput,Button,Alert,Text } from 'react-native';
 
export default class Test extends React.Component{
  render(){
    return(
      <View style = {style.div}>
        <View style = {style.div1}>
          <TextInput placeholder = 'First number'></TextInput>
 
          <Text>+</Text>
 
           <TextInput placeholder = 'Second number' ></TextInput>
        </View>
      <Button title='Calculate' style={style.btn} ></Button>
      </View>
    )
  }
}
const style =StyleSheet.create({
  div: {
    flex:1,
    padding:10,
  },
  div1:{
   marginTop:100,
   flexDirection: 'row',
   justifyContent :'center'
  },
  btn: {
    marginTop:20,
    width:20
  }
 
})
