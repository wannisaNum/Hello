import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import {Icon, Thumbnail} from 'native-base'
 
 
export default class Instagram extends Component {
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.navbar}>
                    <Icon name="ios-camera" />
                    <Text style={{fontSize:20}}>Instagram</Text>
                    <Icon name="ios-send" />
               </View>
               <ScrollView>
                   {/* feed 1 */}
                <View style={{marginTop:10}}></View>
               {/* middle */}
               <View style={{paddingTop:10,paddingBottom:10,backgroundColor:'#fff'}}>
                     {/* head */}
                    <View style={{flexDirection:'row',padding:10}}>
                        <Thumbnail small source={require('./assets/image/56681256_1219821211514702_4456310736066445312_o.jpg')} />
                        <View style={{marginLeft: 10}}>
                            <Text>Adum</Text>
                            <Text>jan 15, 2018</Text>
                        </View>
                    </View>
                    {/* body */}
                    <View style={{flexDirection:'row'}}>  
                        <Image source={require('./assets/image/feed1.jpg')} resizeMode='contain' style={{width:'100%',height:200}}/>
                    </View>
                    {/* footer */}
                    <View style={{flexDirection:'row',padding:10}}>
                        <Icon name='heart-o' type='FontAwesome'/>
                        <Icon name='send-o' type='FontAwesome' style={{marginLeft:10}}/>
                        <Icon name='wechat'  type='FontAwesome' style={{marginLeft:10}}/>
                        
                    </View>
                    <View style={{flexDirection:'row',padding:10,paddingTop:0}}> 
                        <Text style={{marginLeft:10}}>282 Likes</Text>
                    </View>
                    <View style={{flexDirection:'row',padding:10,paddingTop:0}}> 
                        <Text>
                            &nbsp;The more I sit here and watch Warner Bros. make a complete mess of the DCEU the more I appreciate this trilogy more and more. 🙌🏽 #TheDarkKnight
                        </Text>
                    </View>
                
               </View>
 
               {/* feed2 */}
               <View style={{marginTop:10}}></View>
               {/* middle */}
               <View style={{paddingTop:10,backgroundColor:'#fff'}}>
                     {/* head */}
                    <View style={{flexDirection:'row',padding:10}}>
                        <Thumbnail small source={require('./assets/image/56681256_1219821211514702_4456310736066445312_o.jpg')} />
                        <View style={{marginLeft: 10}}>
                            <Text>Adum</Text>
                            <Text>jan 15, 2018</Text>
                        </View>
                    </View>
                    {/* body */}
                    <View style={{flexDirection:'row'}}>  
                        <Image source={require('./assets/image/feed2.jpg')} resizeMode='contain' style={{width:'100%',height:200}}/>
                    </View>
                    {/* footer */}
                    <View style={{flexDirection:'row',padding:10}}>
                        <Icon name='heart-o' type='FontAwesome'/>
                        <Icon name='send-o' type='FontAwesome' style={{marginLeft:10}}/>
                        <Icon name='wechat'  type='FontAwesome' style={{marginLeft:10}}/>
                        
                    </View>
                    <View style={{flexDirection:'row',padding:10,paddingTop:0}}> 
                        <Text style={{marginLeft:10}}>282 Likes</Text>
                    </View>
                    <View style={{flexDirection:'row',padding:10,paddingTop:0}}> 
                        <Text>
                        The more I sit here and watch Warner Bros. make a complete mess of the DCEU the more I appreciate this trilogy more and more. 🙌🏽 #TheDarkKnight
                        </Text>
                    </View>
                
               </View>
 
 
 
               {/* feed2 */}
               <View style={{marginTop:10}}></View>
               {/* middle */}
               <View style={{paddingTop:10,backgroundColor:'#fff'}}>
                     {/* head */}
                    <View style={{flexDirection:'row',padding:10}}>
                        <Thumbnail small source={require('./assets/image/56681256_1219821211514702_4456310736066445312_o.jpg')} />
                        <View style={{marginLeft: 10}}>
                            <Text>Adum</Text>
                            <Text>jan 15, 2018</Text>
                        </View>
                    </View>
                    {/* body */}
                    <View style={{flexDirection:'row'}}>  
                        <Image source={require('./assets/image/feed3.jpg')} resizeMode='contain' style={{width:'100%',height:200}}/>
                    </View>
                    {/* footer */}
                    <View style={{flexDirection:'row',padding:10}}>
                        <Icon name='heart-o' type='FontAwesome'/>
                        <Icon name='send-o' type='FontAwesome' style={{marginLeft:10}}/>
                        <Icon name='wechat'  type='FontAwesome' style={{marginLeft:10}}/>
                        
                    </View>
                    <View style={{flexDirection:'row',padding:10,paddingTop:0}}> 
                        <Text style={{marginLeft:10}}>282 Likes</Text>
                    </View>
                    <View style={{flexDirection:'row',padding:10,paddingTop:0}}> 
                        <Text>
                        The more I sit here and watch Warner Bros. make a complete mess of the DCEU the more I appreciate this trilogy more and more. 🙌🏽 #TheDarkKnight
                        </Text>
                    </View>
                
               </View>
               </ScrollView>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ccc'
    },
    navbar:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15,
        backgroundColor:'#fff'
    }
})
 



