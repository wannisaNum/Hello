import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground,Image } from 'react-native'
import { Image } from 'native-base'

export default class main extends Component {
    render() {
        return (
            <ImageBackground source={require('./assets/image/bg.png')} style={styles.container} >
                <View style={styles.blox}>
                <Image source={require('./assets/image/elderly.png')} style={styles.img}/>
                </View>
                <Text style={{flex:1}}></Text>
            </ImageBackground>
    

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:3
        
      },
      blox:{
      flex:2,
      width:500,
      marginTop:60,
      marginLeft:50,
      backgroundColor: 'white',
      borderRadius:5,
      padding:15
      }
})
