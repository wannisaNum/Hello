
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, DatePickerAndroid } from 'react-native'

export default class DateTime extends Component {
    constructor(props) {
        super(props)

        this.state = {
            day: 1,
            month: 1,
            year: 2018,
            dateString: new Date(2018, 0, 1).toDateString()
        }
    }    

    getDate = () => {
        let options = {
            date: new Date(),
            minDate: new Date(2018, 8, 1),
            maxDate: new Date(2018, 10, 30)
        };
        DatePickerAndroid.open(options).then(result => {
            //if not cancel the dialog
            if (result.action !== DatePickerAndroid.dismissedAction) {
                this.setState({
                    day: result.day,
                    month: result.month,
                    year: result.year,
                    dateString: new Date(result.year, result.month, result.day).toDateString()
                });
            }
        });
    }

    //OR we can use async and await
    getDate2 = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                // current date
                date: new Date()
                // can set to any date
                // date: new Date(2020, 4, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // month (0-11)               
                this.setState({
                    day: day,
                    month: month,
                    year: year,
                    dateString: new Date(year, month, day).toDateString()
                });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> DatePicker Android </Text>
                <Text style={styles.text}> {this.state.day + "/" + this.state.month + "/" + this.state.year} </Text>
                <Text style={styles.text}> {this.state.dateString}  </Text>
                <Button title="Get date" onPress={this.getDate} />                
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
