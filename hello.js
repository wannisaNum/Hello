import React from 'react';
import { StyleSheet,View,TextInput,Button,Alert,Text } from 'react-native';

export default class hello extends React.Component{
  constructor(props){
    super(props)
    this.state ={n1:'',n2:''}
  }

  calculate = () => {
    var {n1,n2} =this.state
    var result = parseInt(n1) + parseInt(n2)
    Alert.alert('Value is :'+result)
  }
  render(){
    return(
      <View style = {style.div}>
        <View style = {style.div1}>
          <TextInput placeholder = 'First number' value={this.state.n1} 
          keyboardType={'numeric'}
          onChange={(e) => this.setState({n1 : e.nativeEvent.text})}></TextInput>

          <Text>+</Text>

           <TextInput placeholder = 'Second number' value={this.state.n2} 
           keyboardType={'numeric'}
          onChange={(e) => this.setState({n2 : e.nativeEvent.text})}></TextInput>
        </View>
      <Button title='Calculate' style={style.btn} onPress = {this.calculate.bind(this)}></Button>
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










