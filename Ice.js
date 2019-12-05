import React, { Component } from 'react'
import { Text, StyleSheet, View, Switch, Slider, Button, Alert } from 'react-native'
 
export default class Ice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             swStatus: false,
             swText: 'Iced',
             sdStatus: 1,
             sdText: 'no sugar'
        }
    }
    toggleSwitch = () =>{
        let status = this.state.swStatus
        if(newStatus = !status){
            this.setState({
                swStatus: true,
                swText:'Hot'
            })
        }else{
            this.setState({
                swStatus: false,
                swText:'Iced'
            })
        }
        
    }
    toggleSlide = (value) =>{
        if(value==1){
            this.setState({
                sdStatus: value,
                sdText: 'no sugar'
 
            })
        }else if(value==2){
            this.setState({
                sdStatus: value,
                sdText: 'less sugar'
 
            })
        }else{
            this.setState({
                sdStatus: value,
                sdText: 'normal sugar'
 
            })
        }  
    }
    
    show = () =>{
        
        Alert.alert("You order " +this.state.swText+ " coffee with " +this.state.sdText)
    }
 
    
    render() {
        return (
            <View style={styles.conatiner}>
                <Text style={styles.text}> MFU Coffee Shop </Text>
                {/* switch */}
                <View style={styles.Row}>
                    <Text>{this.state.swText}</Text>
                    <Switch value={this.state.swStatus} onValueChange={this.toggleSwitch}/>
                </View>
                {/* Slider */}
                <View style={styles.Row}>
                    <Text>Sugar level</Text>
                    <Slider style={styles.slider} minimumValue={1} maximumValue={3} step={1} value={this.sdStatus} onValueChange={this.toggleSlide}/>
                </View>
                <Button title='Order' onPress={this.show}/>
                
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        padding:20
    },
    text:{
        fontSize:30,
        color:'red',
        textAlign:'center'
    },
    Row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20
    },
    slider:{
        width:150
    }
})
