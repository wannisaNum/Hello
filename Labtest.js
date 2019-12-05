import React, { Component } from 'react'
import { Image, StyleSheet, View, Button , TouchableOpacity } from 'react-native'

export default class Labtest extends Component {
    constructor(props) {
        super(props);
   
        //load images in advance
        this.imgBack = require('./assets/image/ace.png');
        this.imgAce = require('./assets/image/card2.png');
        this.imgCard2 = require('./assets/image/card3.png');
   
        this.state = {
           myImage: this.imgBack    
        }
    }
    changeImage = () => {
        if(this.state.myImage==this.imgBack){
            this.setState({myImage: this.imgAce});
        }else if(this.state.myImage==this.imgAce){
            this.setState({myImage: this.imgCard2});
        }else{
            this.setState({myImage: this.imgBack});
        }
       
   }
   

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.changeImage}>
                <Image source={this.state.myImage} style={styles.img}
                 resizeMode="contain"/> 
                 {/* resizeModeใช้เพื่อImageไม่ถูกตัดส่วน */}
                 <Button title="Changes" onPress={this.changeImage}/> 
                </TouchableOpacity> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
        //paddingTop:20

    },
    img:{
        marginTop:20,
        width:100
    }
})


