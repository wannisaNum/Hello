import React, { Component } from 'react'
import { Text, StyleSheet, View, Switch, Slider, Button, Alert, Picker } from 'react-native'
 
export default class Ice2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             swStatus: false,
             swText: 'Iced',
             swText2:'(+5)',
             inIced: 5,
             sdStatus: 1,
             sdText: 'no sugar.',
             water: 'Latte',
             waterIndex: 0,
             prices: 30
        }
    }
    toggleSwitch = () =>{
        let status = this.state.swStatus
        if(newStatus = !status){
            this.setState({
                swStatus: true,
                swText:'Hot',
                swText2:'',
                inIced: 0
            })
        }else{
            this.setState({
                swStatus: false,
                swText:'Iced',
                swText2:'(+5)',
                inIced: 5
            })
        }
        
    }
    toggleSlide = (value) =>{
        if(value==1){
            this.setState({
                sdStatus: value,
                sdText: 'no sugar.'
 
            })
        }else if(value==2){
            this.setState({
                sdStatus: value,
                sdText: 'less sugar.'
 
            })
        }else{
            this.setState({
                sdStatus: value,
                sdText: 'normal sugar.'
 
            })
        }  
    }
    setPicker = (value, index) =>{
        if(index==1){
            this.setState({
                water: value,
                waterIndex: index,
                prices: 25
               
            })
        }else if(index==2){
            this.setState({
                water: value,
                waterIndex: index,
                prices: 25
               
            })
        }else{
            this.setState({
                water: value,
                waterIndex: index,
                prices: 30
               
            })
 
        }
        
     
    }
    
    show = () =>{
        let {inIced,prices} = this.state
        let result = prices + inIced
        
        Alert.alert("You order " +this.state.swText+" "+this.state.water+ " with " +this.state.sdText+ 
        " Price = " +result+ " baht")
    }
 
    
    render() {
        return (
            <View style={styles.conatiner}>
                <Text style={styles.text}> MFU Coffee Shop </Text>
                {/* picker */}
                <View style={styles.Row}>
                    <Text style={{fontSize:14}}>type</Text>
                    <Picker style={styles.Picker} selectedValue={this.state.water} onValueChange={(itemValue, itemIndex) => 
                    this.setPicker(itemValue, itemIndex)}>
                        <Picker.Item label='Latte' value='Latte'/>
                        <Picker.Item label='Espresso' value='Espresso'/>
                        <Picker.Item label='Cappuccino' value='Cappuccino'/>
                    </Picker>
                </View>
 
                {/* switch */}
                <View style={styles.Row}>
                    <Text>{this.state.swText}{this.state.swText2}</Text>
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
    },
    Picker:{
        height:20,
        width:150
    }
})
 
