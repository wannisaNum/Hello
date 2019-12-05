import React, { Component } from 'react';
import { Text, Slider, View, StyleSheet } from 'react-native';

export default class Slider extends Component {
    //constructor
    constructor() {
        super();
        //class variables (state)
        this.state = {
            sliderValue1: 0.00,
            sliderValue2: 1
        }
    }

    //set slider value
    setSlider1 = (value) => {
        this.setState({sliderValue1: value})
    }

    setSlider2 = (value) => {
        this.setState({sliderValue2: value})
    }

    //Render method
    render() {
        return (
            <View style={styles.container}>
                {/* default slider's range is 0-1 */}
                <Slider style={styles.sliderStyle} onValueChange={this.setSlider1}/>
                <Text>Default slider, range 0-1</Text>
                <Text>Value = {this.state.sliderValue1.toFixed(2)}</Text>

                <Slider style={styles.sliderStyle} onValueChange={this.setSlider2} minimumValue={1} maximumValue={10} step={1}/>
                <Text>Slider range 1-10, step 1</Text>
                <Text>Value = {this.state.sliderValue2}</Text>
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
    sliderStyle: {
        width: 200,
        marginTop: 50,
    }
});
