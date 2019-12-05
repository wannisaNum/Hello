
import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default class DetailScreen extends Component {
  
    render() {
        const name = this.props.navigation.getParam("name","Unknown"); //unknow use when can't fine the name it will show that
        const age = this.props.navigation.getParam("age","0");
        const gender = this.props.navigation.getParam("gender",flase);
        const address = this.props.navigation.getParam("address",0);

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Details Screen</Text>
                <Text style={{fontSize: 16, color:'red'}}>Name: {name} </Text>
                <Text style={{fontSize: 16, color:'yellow'}}>Age: {age} </Text>
                <Text style={{fontSize: 16, color:'yellow'}}>Gender: {gender?"Male":"Femail"} </Text>
                <Text style={{fontSize: 16, color:'yellow'}}>address: {address.number} </Text>
                <Button
                    title="Go back to Home Page"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({})
