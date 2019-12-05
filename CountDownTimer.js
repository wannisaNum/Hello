
import React from 'react'
import {Text,TouchableOpacity,StyleSheet,View} from 'react-native'

export default class CountDownTimer extends React.Component {
    constructor(){
        super()
        this.state = {
            timer : null,
            min_count : '00',
            sec_count : '00',
            startDisable : false
        }
    }

    onStart = () => {
        let timer = setInterval(()=>{
            var num = (Number(this.state.sec_count) +1 ).toString(),
                count = this.state.min_count

            if(Number(this.state.sec_count) == 59){
                count = (Number(this.state.min_count) + 1).toString(),
                num = '00'
            }

            this.setState({
                min_count: count.length == 1 ? '0' + count : count,
               sec_count: num.length == 1 ? '0' + num : num
            })
        },1000)

        this.setState({timer,startDisable:true})
    }

    onStop = () => {
        clearInterval(this.state.timer)
        this.setState({startDisable : false})
    }

    onClear = () => {
        this.setState({
            timer : null,
            min_count : '00',
            sec_count : '00'
        })
    }

    render(){
        return(
            <View style={styles.MainContainer}>
                <Text style={styles.counterText}>{this.state.min_count} : {this.state.sec_count}</Text>
                {this.state.startDisable ? (
                <TouchableOpacity
                    onPress={this.onStop}
                    activeOpacity={0.6}
                    style={[styles.button, { backgroundColor:  '#FF6F00'}]}>
                    <Text style={styles.buttonText}>Pause</Text>
                </TouchableOpacity>) : 
                (<TouchableOpacity
                    onPress={this.onStart}
                    activeOpacity={0.6}
                    style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6F00' }]}>
                    <Text style={styles.buttonText}>START</Text>
                  </TouchableOpacity>)} 
                    <TouchableOpacity
                    onPress={this.onClear}
                    activeOpacity={0.6}
                    style={[styles.button, { backgroundColor: this.state.startDisable ? '#B0BEC5' : '#FF6F00' }]} 
                    disabled={this.state.startDisable} >
            
                    <Text style={styles.buttonText}> CLEAR </Text>
            
                    </TouchableOpacity>
               
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
      width: '80%',
      paddingTop:8,
      paddingBottom:8,
      borderRadius:7,
      marginTop: 10
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        fontSize: 20
    },
    counterText:{
   
      fontSize: 28,
      color: '#000'
    }
  });


