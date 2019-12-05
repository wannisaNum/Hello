
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Timedown extends Component {
    //constructor
    constructor() {
        super()
        //class variables (state)
        this.state = {
            status: 5
        }
        //update every 1 second
        this.timeID = setInterval(this.countdown, 1000);
    }

    //count down
    countdown = () => {
        let count = this.state.status;
        count--;
        if(count == 0) {
            clearInterval(this.timeID)
            this.setState({status: 'Time is up'})
        }
        else {
            this.setState({status: count})
        }
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
