import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, DatePickerAndroid } from 'react-native'
 
export default class Datet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            day: 1,
            month: 1,
            year: 2018,
            dateString: new Date(2018, 0, 1).toDateString(),
            day2: 1,
            month2: 1,
            year2: 2018,
            dateString2: new Date(2018, 0, 1).toDateString()
           
        }
    }
    getDate = () => {
        let options = {
            date: new Date(),
            minDate: new Date(2018, 10, 1),
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
 
    getendDate = () => {
        let options = {
            date: new Date(),
            minDate: new Date(2018, 10, 1),
            maxDate: new Date(2018, 10, 30)
        };
        DatePickerAndroid.open(options).then(result => {
            //if not cancel the dialog
            if (result.action !== DatePickerAndroid.dismissedAction) {
                this.setState({
                    day2: result.day,
                    month2: result.month,
                    year2: result.year,
                    dateString2: new Date(result.year, result.month, result.day).toDateString()
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
                    dateString2: new Date(year, month, day).toDateString()
                });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }
 
    getendDate2 = async () => {
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
                    day2: day,
                    month2: month,
                    year2: year,
                    dateString2: new Date(year, month, day).toDateString()
                });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }
 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Button title='select start date' onPress={this.getDate} />
                    <Text> Start date: {this.state.dateString} </Text>
                </View>
                <View style={styles.row}>
                    <Button title='select end date' color='purple' onPress={this.getendDate2}/>
                    <Text> Start date:{this.state.dateString2}  </Text>
                </View>
 
                
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
    }
})
 


