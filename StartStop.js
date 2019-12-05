
import React, { Component } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

export default class StartStop extends Component {
    //constructor
    constructor() {
        super()
        //class variables (state)
        this.state = {
            status: 'Start'
        }
        //after 3 seconds, call a method updateStatus()
        setTimeout(this.updateStatus, 3000)
    }

    //update status
    updateStatus = () => {
        this.setState({status: 'Stop'})
    }

    //Render method, must be first function
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStatus}>{this.state.status}</Text>
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
    textStatus: {
        fontSize: 26,
        color: 'red',
        margin: 5
    }
});
