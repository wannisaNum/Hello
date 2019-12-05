
import React, { Component } from 'react';
import { Alert, Button, Text, View, StyleSheet } from 'react-native';

export default class Dialog extends Component {
    constructor() {
        super()
        this.state = {
            answer: ""
        }
    }

    confirm = () => {
        //confirm dialog with three choices
        Alert.alert(
            "Warning", 
            "Are you sure to delete?",
            [
                {text: 'Cancel', onPress: () => this.setState({answer: 'Cancel'})},
                {text: 'No', onPress: () => this.setState({answer: 'No'})},
                {text: 'Yes', onPress: () => this.setState({answer: 'Yes'})}
            ],
            { cancelable: false }
        )
    }

    //Render method
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button title="Simple Alert" onPress={() => Alert.alert("Simple Alert")}/>
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button color="purple" title="Alert with title" onPress={() => Alert.alert("Title", "Message")}/>
                </View>

                <View style={styles.buttonContainer}>
                    <Button color="red" title="Alert with choices" onPress={this.confirm}/>
                    <Text style={styles.textChoice}>You choose {this.state.answer}</Text>
                </View>
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
    buttonContainer: {
        margin: 10
    },
    textChoice: {
        textAlign: 'center',
        color: 'red',
        fontSize: 18
    }
});
