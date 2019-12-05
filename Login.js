
import React from 'react';
import { StyleSheet,View ,TextInput,Button,Alert } from 'react-native';

export default class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {status:false,username:'',password:''}
  }
  onchangeonText(){
    let {username,password} = this.state
    if(username === 'admin' && password === '1234'){
      Alert.alert('ล็อกอินเรียบร้อย')
    }else{
      Alert.alert('ล็อกอินไม่เรียบร้อย')
    }
  }
  render(){
    return (
      <View style = {styles.div}>
        <TextInput style={styles.textInput} placeholder='Username' 
        onChange={(username) => this.setState({username : username.nativeEvent.text})}/>
        <TextInput style={styles.textInput} placeholder='Password' 
        onChange={(password) => this.setState({password : password.nativeEvent.text})} 
        secureTextEntry={true} />
        
        <Button style={styles.button} onPress={this.onchangeonText.bind(this)} title='Login'></Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  div : {
    alignItems:'center',
    marginTop : 50
  },
  textInput : {
    borderWidth : 1,
    width : 150,
    marginTop : 25
  },
  button : {
    marginTop : 20
  }
})



