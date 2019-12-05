import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Count extends Component {
    //constructor
    constructor() {
        super();
        //class variables (state)
        this.state = {
            count: 0
        };
    }

    //method to count number
    countNumber = () => {
        //get current count
        let counter = this.state.count;
        //increase counter
        counter++;
        this.setState({ count: counter });
    }

    //method to reset number to 0
    resetNumber = () => {
        this.setState({ count: 0 });
    }

    //Render method
    render() {
        return (
            <View>
                <Text style={styles.title} onPress={this.countNumber}>
                    Count = {this.state.count}
                </Text>
                <TouchableOpacity onPress={this.countNumber}>
                    <Text style={styles.button}>Count</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.resetNumber}>
                    <Text style={[styles.button, styles.reset]}>Reset</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

// ===================== CSS ======================
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        textAlign: 'center'
    },
    button: {
        fontSize:20, 
        backgroundColor:'green', 
        color:'white', 
        margin:10, 
        textAlign:'center', 
        padding: 5, 
        borderRadius: 10
    },
    reset: {
        backgroundColor: 'red'
    }
});
