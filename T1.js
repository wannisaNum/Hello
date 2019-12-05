import * as React from 'react';
import { Text, View, StyleSheet,Button,TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


var item = [{
  "id": 1,
  "first_name": "Cortney"
}, {
  "id": 2,
  "first_name": "Kendrick"
}, {
  "id": 3,
  "first_name": "Chiarra"
}, {
  "id": 4,
  "first_name": "Joy"
}, {
  "id": 5,
  "first_name": "Tadio"
}]

export default class T1 extends React.Component {
  constructor(){
    super()
    this.state = {
      text:'Helloworld',
      status : false
  }
  }

   HandleClick(){
    this.setState({text:'Tu Na Hee'})
   }

  

  render(){
    return (
      <View style={styles.container}>
    <Text>{this.state.text}</Text>
    <Button title='onclick' onPress={()=>this.HandleClick()}></Button>
        
         
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});