import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class TimeDicimal extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            time: {},
            seconds: 60
       }
       this.timer = 0
       this.startTimer = this.startTimer.bind(this)
       this.countDown = this.countDown.bind(this)
       
   }

   secondsToTime = (secs) =>{
    let hours = Math.floor(secs / (60 * 60))
    let divisor_for_minutes = secs % (60 * 60)
    let minutes = Math.floor(divisor_for_minutes / 60)
    let divisor_for_seconds = divisor_for_minutes % 60
    let seconds = Math.ceil(divisor_for_seconds)
    
    let obj ={
        'h' : hours,
        'm' : minutes,
        's' : seconds
    }
    return obj 
   }

   componentDidMount = () =>{
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({
         time: timeLeftVar 
        });
   }

    startTimer = () =>{
     if(this.timer==0 && this.state.seconds>0){
        this.timer = setInterval(this.countDown,1000) 
      }
    }

   countDown = () =>{
       // Remove one second, set state so a re-render happens
       let seconds = this.state.seconds-1
       this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
       })

    //    check if we're at zero.
       if(seconds==0){
           clearInterval(this.timer)
       }
   }

   reset = () =>{
    let seconds = 60
    this.setState({
     time: this.secondsToTime(seconds),
     seconds: seconds,
    })
    if(seconds>0){
        clearInterval(this.timer)
    }
   }

       
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.font}>{this.state.time.m}.{this.state.time.s}</Text>
                {/* button */}
                <View style={styles.container2}>
                    <Button title='start' onPress={this.startTimer}/>
                    <Button title='reset' onPress={this.reset} color='#b660cd'/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    container2:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    font:{
        fontSize:40,
        color:'red',
        textAlign:'center'
    }
})

