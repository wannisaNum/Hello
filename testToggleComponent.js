import React from 'react'
import {Text,View} from 'react-native'

class ToggleComponent extends React.Component{
    constructor(){
        super()
        this.state = {text:''}
    }

    render(){
        return(
            <View>
                <Text>Hello world</Text>
            </View>
        )
    }
}