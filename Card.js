import React, { Component } from 'react'
import { StyleSheet, View} from 'react-native'
import {Icon} from 'native-base'
 
export default class Card extends Component {   
    render() {
        return (
            <View style={styles.container}>
                <Icon name="md-home"/>
                <Icon name="android" type="FontAwesome" style={{color: 'green'}}/>
                <Icon name="logo-apple" style={{color: 'red', fontSize: 28}}/>
                <Icon name="logo-facebook" style={{color: 'blue'}}/>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10
    }
})
