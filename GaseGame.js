import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native'

export default class GaseGame extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number: 'Guess a number 0-9',
             numRandom: 0,
             textOutput: ''
        }
    }
    onChangeNumber = (text) =>{
        let num = Math.random()
        let result = Math.floor(num*10+1)
        this.setState({
            number: text,
            numRandom: result
        })
    } 

    show = () =>{
        var {number,numRandom} = this.state

        if(number==numRandom){
            this.setState({
                textOutput:'Correct. YOU win'
            })
        }else if(number>numRandom){
            var c = number-numRandom
            this.setState({
                textOutput: +number+ 'is too large' +c+ 'change(s) left'
            })
        }else{
            this.setState({
                textOutput: 'Sorry.You lose the answer is' +numRandom
            })
        }
    }
    clear = () =>{
        this.setState({
            number:'Guess a number 0-9',
            numRandom: 0,
             textOutput: ''
        })
    }
   
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder={this.state.number} onChangeText={this.onChangeNumber} style={styles.input}/>

                <Text style={{textAlign:'center',color:'red'}}>{this.state.textOutput}</Text>

                <View style={styles.container1}>
                    <Button title='Guess' onPress={this.show}/>
                    <Button title='Replay' onPress={this.clear} color='#b660cd'/>
                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    container1:{
        flexDirection:'row',
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        borderBottomWidth:2,
        borderBottomColor:'green',
        margin:10
    }
})

