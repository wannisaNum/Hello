import React, { Component } from 'react'
import { Text, StyleSheet, View,Picker,Image,TouchableOpacity,Button } from 'react-native'

export default class quiz1B_6031301020 extends Component {
    constructor(props) {
        super(props)
        this.imgAce = require('./assets/image/ace.png');
        this.imgCard2 = require('./assets/image/card2.png');
        this.imgThree = require('./assets/image/card3.png');
    
  
        this.state = {
        
             result:0,
             isModalVisible: false,
             myImage: this.imgAce,
            text:'',
            number: text,
            
        }
    }
  
    HandleClick = () =>{
        this.setState({ myImage: Math.floor(Math.random() * Math.floor(3))})

        if(myImage==1){
            this.setState({
                water: value,
                waterIndex: index,
                myImage: this.imgCard2,
                prices: 25
               
            })
        }else if(myImage==2){
            this.setState({
    
                myImage: this.imgThree,
  
               
            })
        }else{
            this.setState({
        
                myImage: this.imgAce,
             
               
            })
 
        }
    }
    onChangePictre = (text) =>{
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
                textOutput:'Correct.Random number is' +numRandom
            })
        }else{
            this.setState({
                textOutput: 'Wrong.Random number is' +numRandom
            })
        }
    }

    setPicker = (value, index) =>{
        if(index==1){
            this.setState({
                water: value,
                waterIndex: index,
                myImage: this.imgCard2,
                prices: 25
               
            })
        }else if(index==2){
            this.setState({
                water: value,
                waterIndex: index,
                myImage: this.imgThree,
                prices: 30
               
            })
        }else{
            this.setState({
                water: value,
                waterIndex: index,
                myImage: this.imgAce,
                prices: 30
               
            })
 
        }
    }
 

 
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.Row}>
                <Text style={styles.title}> Card Game </Text> 
                    <Picker style={styles.label} selectedValue={this.state.water} onValueChange={(itemValue, itemIndex) => 
                    this.setPicker(itemValue, itemIndex)}>
                        <Picker.Item label='Ace' value='Ace'/>
                        <Picker.Item label='Two' value='Two'/>
                        <Picker.Item label='Three' value='Three'/>
                    </Picker>
                </View>

                <TouchableOpacity onPress={this.changeImage}>
                <Image source={this.state.myImage} style={styles.img}
                 resizeMode="contain"/> 
                 {/* resizeModeใช้เพื่อImageไม่ถูกตัดส่วน */}
            
                 <Button title="Get Random Answer" onPress={()=>this.HandleClick()}/> 
                </TouchableOpacity> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    title:{
        fontSize:30,
        marginTop:20,
        marginBottom:10

    },
    label:{
        fontSize:20,
        marginBottom:20
    },
    img:{
        width:350,
        height:400,
        marginBottom:30
    }
})
