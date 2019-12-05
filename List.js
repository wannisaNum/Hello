
import React, { Component } from 'react';
import { Text, Picker, View, StyleSheet } from 'react-native';

export default class List extends Component {
    //constructor
    constructor() {
        super();
        //class variables (state)
        this.state = {
            fruit: 'banana',
            fruitIndex: 1
        }
    }

    setPicker = (value, index) => {
        this.setState({fruit: value})
        this.setState({fruitIndex: index})
    }

    //Render method
    render() {
        return (
            <View style={styles.container}>
                <Picker style={styles.pickerStyle} selectedValue={this.state.fruit} onValueChange={(itemValue, itemIndex) => this.setPicker(itemValue, itemIndex)}>
                    <Picker.Item label="Apple" value="apple" />
                    <Picker.Item label="Banana" value="banana" />
                    <Picker.Item label="Orange" value="orange" />
                </Picker>
                <Text>You choose {this.state.fruit} at index {this.state.fruitIndex}</Text>
            </View>
        )
    }
}

// ===================== CSS ======================
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10
    },
    pickerStyle: {
        height: 50,
        width: 100
    }
});
