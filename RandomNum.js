import React, { Component } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

export default class RandomNum extends Component {
    constructor(){
        super()
        this.state = {
          text:'0'
          }
      }
    
      HandleClick(){
        this.setState({
            text : Math.floor(Math.random() * Math.floor(10))})
      }
    
      
    //Render method, must be first function
    render() {
        return (
            <View style={styles.container}>
            <Text style={{marginTop:20,marginBottom:10}}>{this.state.text}</Text>
            <Button title='Generate!' onPress={()=>this.HandleClick()} />
                
              </View>
        )
    }
}

// ===================== CSS ======================
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textOutput: {
        fontSize: 26,
        margin: 10,
    }
});
