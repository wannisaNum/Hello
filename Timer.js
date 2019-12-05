
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TimePickerAndroid } from 'react-native'

export default class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hour: 0,
            minute: 0
        }
    }

    getTime = () => {
        let options = {
            is24Hour: false
        };
        TimePickerAndroid.open(options).then(result => {
            //if not cancel the dialog
            if (result.action !== TimePickerAndroid.dismissedAction) {
                this.setState({
                    hour: result.hour,
                    minute: result.minute
                });
            }
        });
    }

    //OR we can use async and await
    getTime2 = async () => {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                //can set initial time, default is current time
                // hour: 14,
                // minute: 0,
                is24Hour: false, // Will display 'PM' in the time dialog
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                this.setState({
                    hour: hour,
                    minute: minute
                });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open time picker', message);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> TimePicker Android </Text>
                <Text style={styles.text}> {this.state.hour + ":" + this.state.minute} </Text>
                <Button title="Get time" onPress={this.getTime} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    text: {
        fontSize: 26,
        margin: 5
    }
});
