import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet, Alert } from 'react-native';

export default class TextInput extends Component {
    //constructor
    constructor() {
        super();
        //class variables (state)
        this.state = {
            username: ''
        }
    }

    //Render method
    render() {
        return (
            <View style={styles.container}>
                {/* whenever the text change, set username to this text */}
                <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => this.setState({username: text})} />
                <Button title="Login" onPress={() => Alert.alert(this.state.username)} />
            </View>
        )
    }
}

// ===================== CSS ======================
const styles = StyleSheet.create({
    container: {
        flex: 1,    //default direction is vertical (column)
        // justifyContent: 'center',    //primary axis (vertical align)
        alignItems: 'center'     //secondary axis (horizontal align)
    },
    input: {
        width: '100%'
    }
});
