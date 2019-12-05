import React, { Component } from 'react'
import { Text, StyleSheet, View, Switch } from 'react-native'
import { CheckBox } from 'native-base'

export default class SwitchCheck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            switchStatus: false,
            checkboxStatus: false,
            switchText: 'OFF',
            checkboxText: 'OFF'
        }
    }

    toggleSwitch = () => {
        let sw = !this.state.switchStatus;
        this.setState({
            switchStatus: sw,
            switchText: sw? 'ON' : 'OFF'
        });
    }

    toggleCheckbox = () => {        
        let cb = !this.state.checkboxStatus;
        this.setState({
            checkboxStatus: cb,
            checkboxText: cb ? 'ON' : 'OFF'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Switch value={this.state.switchStatus} onValueChange={this.toggleSwitch} />
                    <Text>Switch: {this.state.switchText}</Text>
                </View>

                <View style={styles.row}>
                    <CheckBox checked={this.state.checkboxStatus} style={{ marginRight: 20 }} onPress={this.toggleCheckbox} />
                    <Text>Checkbox: {this.state.checkboxText}</Text>
                </View>
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
    row: {
        flexDirection: 'row',
        padding: 10
    }
})
