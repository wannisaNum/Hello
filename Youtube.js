import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import {Icon, Thumbnail} from 'native-base'
 
export default class Youtube extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* navbar icon */}
               <View style={styles.navbar}>
                    <Image source={require('./assets/image/logo.png')} />
                   <View style={{flexDirection:'row',alignContent:'flex-end',padding:5}}>
                        <Icon name='md-search' type='Ionicons' style={{marginRight:10}}/>
                        <Icon name='user-circle' type='FontAwesome' style={{marginLeft:10}}/>
                   </View>
               </View>
 
               <ScrollView>
                   {/* feature1 */}
               <View style={{backgroundColor:'#fff',paddingBottom:10}}>
                   {/* Image */}
                   <View>
                       <Image source={require('./assets/image/youtube1.jpg')} resizeMode='contain' style={styles.imgs}/>
                   </View>
                   {/* text */}
                   <View style={{flexDirection:'row',padding:10}}>
                       <Thumbnail small source={require('./assets/image/avartar1.jpg')}/>
                       <View style={{marginLeft:10}}>
                           <Text style={{fontSize:16}}>#142 Solar Power for the</Text>
                           <Text style={{fontSize:16}}>ESP8266,Arduino, etc.</Text>
                           <Text style={{color:'#ccc'}}>Andreas Spiess - 73K views - 1 year ago</Text>
                       </View>
                            <Icon name='dots-vertical' type='MaterialCommunityIcons' style={{marginLeft:20}}/>
                   </View>
               </View>
               {/* feature2 */}
               <View style={{backgroundColor:'#fff',paddingBottom:10}}>
                   {/* Image */}
                   <View>
                       <Image source={require('./assets/image/youtube2.jpg')} resizeMode='contain' style={styles.imgs}/>
                   </View>
                   {/* text */}
                   <View style={{flexDirection:'row',padding:10}}>
                       <Thumbnail small source={require('./assets/image/avartar2.jpg')}/>
                       <View style={{marginLeft:10}}>
                           <Text style={{fontSize:16}}>#142 Solar Power for the</Text>
                           <Text style={{fontSize:16}}>ESP8266,Arduino, etc.</Text>
                           <Text style={{color:'#ccc'}}>Andreas Spiess - 73K views - 1 year ago</Text>
                       </View>
                            <Icon name='dots-vertical' type='MaterialCommunityIcons' style={{marginLeft:20}}/>
                   </View>
               </View>

                {/* feature3 */}
                <View style={{backgroundColor:'#fff',paddingBottom:10}}>
                   {/* Image */}
                   <View>
                       <Image source={require('./assets/image/youtube2.jpg')} resizeMode='contain' style={styles.imgs}/>
                   </View>
                   {/* text */}
                   <View style={{flexDirection:'row',padding:10}}>
                       <Thumbnail small source={require('./assets/image/avartar2.jpg')}/>
                       <View style={{marginLeft:10}}>
                           <Text style={{fontSize:16}}>#142 Solar Power for the</Text>
                           <Text style={{fontSize:16}}>ESP8266,Arduino, etc.</Text>
                           <Text style={{color:'#ccc'}}>Andreas Spiess - 73K views - 1 year ago</Text>
                       </View>
                            <Icon name='dots-vertical' type='MaterialCommunityIcons' style={{marginLeft:-10}}/>
                   </View>
               </View>
               </ScrollView>
               <View style={{flexDirection:'row',justifyContent:'space-around',padding:10}}>
                   <View style={{alignItems:'center'}}>
                        <Icon name='home' type='MaterialCommunityIcons'  style={{color:'red'}}/>
                        <Text style={{color:'red'}}>Home</Text>
                   </View>
                   <View style={{alignItems:'center'}}>
                       <Icon name='fire' type='MaterialCommunityIcons'  style={{color:'gray'}}/>
                       <Text style={{color:'gray'}}>Trending</Text>
                    </View>
                   <View style={{alignItems:'center'}}>
                        <Icon name='subscriptions' type='MaterialIcons' style={{color:'gray'}}/>
                        <Text style={{color:'gray'}}>subscriptions</Text>
                   </View>
                   <View style={{alignItems:'center'}}>
                       <Icon name='folder' type='MaterialCommunityIcons' style={{color:'gray'}}/>
                       <Text style={{color:'gray'}}>Library</Text>
                    </View>
                    
                    
                    
               </View>
 
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    navbar:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        backgroundColor:'#fff'
    },
    imgs:{
        width:'100%',
        height:200   
    }
})
