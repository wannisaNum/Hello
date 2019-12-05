import React, { Component } from 'react'
import { Text, StyleSheet, View,Button,Image,ImageBackground,Alert,TouchableOpacity,TextInput} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };
  render() {
    return (
     
  <ImageBackground source={require('./assets/image/bg.png')} style={styles.container} >
    
        <View style={styles.cc}>
        <Image source={require('./assets/image/elderly.png')} style={styles.img}/>

          <Text style={styles.titlehome}>WELCOME</Text>
      


  <TouchableOpacity  style={styles.button }     onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Back',
            });
          }}><Text style={styles.text1 } >Start</Text></TouchableOpacity>
  
        </View>
  </ImageBackground>
     
    )
  }
}
class MainScreen extends React.Component{
 
  HandleLogout = () => {
    this.props.navigation.goBack()
  }
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Hello {this.props.navigation.getParam('role')}</Text>
        <Button title='Logout' onPress={this.HandleLogout}></Button>
      </View>
    )
  }
}


class DetailsScreen extends React.Component {
  constructor(){
    super()
    this.state = {id:'',pw:''}
  }
  
  HandleonLogin = () => {
    switch (this.state.id) {
      case "admin":
        if(this.state.pw === '1234'){
          this.props.navigation.navigate('Main',{role:'Admin'})
        }
        break;
      case "user":
        if(this.state.pw === '9999'){
          this.props.navigation.navigate('Main',{role:'User'})
        }
        break;
      default:
        break;
    }
  }

    static navigationOptions = ({ navigation, navigationOptions }) => {
      console.log(navigationOptions);
      // Notice the logs ^
      // sometimes we call with the default navigationOptions and other times
      // we call this with the previous navigationOptions that were returned from
      // this very function
      return {
        title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        headerStyle: {
          backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor,
      };
    };
  
    render() {
      /* 2. Get the param, provide a fallback value if not available */
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID'); 
      const otherParam = navigation.getParam('otherParam', 'some default value');
  
      return (
        <ImageBackground source={require('./assets/image/bg.png')} style={styles.container} >
        <View style={styles.blox}>
        <Text style={styles.title}> Happy Senior </Text>

        <View style={styles.container1}>
            <Text style={styles.text}>Username</Text>
            <TextInput style={styles.textInput} placeholder="Enter username" onChange={(e) =>this.setState({id : e.nativeEvent.text})}/>
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.textInput} placeholder="Enter password" onChange={(e) =>this.setState({pw : e.nativeEvent.text})}/>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={{color: 'red', fontSize: 15}}>Haven't got an account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}  style={styles.buttonlogin}><Text style={styles.textlogin } >Login</Text></TouchableOpacity>
        </View>
    </View>
    <Text style={{flex:1}}></Text>
    </ImageBackground>
      );
    }
  }
  
const styles = StyleSheet.create(
  {
  container:{
    flex:1,
    backgroundColor:'pink',
    
  },
blox:{
flex:2,
width:500,
marginTop:60,
marginLeft:50,
backgroundColor: 'white',
borderRadius:5,
padding:15
  },
  bloxhead:{
    flex:5,
    backgroundColor: 'red',
    borderRadius:5,
  },
  cc:{
    flex:9,
    alignItems:'center',
    justifyContent: 'center',
  },
  titlehome:{
    fontSize:30,
    color:'white',
    marginTop:10,
    marginBottom:20
  },
  img:{
    width: 250,
    height: 250,
    resizeMode: 'stretch'
  },
  button:{
    padding: 15,
    backgroundColor:'yellow',
    width: 250,
    borderRadius: 15,
  },
  buttonlogin:{
    padding: 5,
    backgroundColor:'green',
    width: 150,
    borderRadius: 15,     
  },
  textlogin:{
    color:'white',
    fontSize:25,
    textAlign:'center'
  },
  text1:{
    color:'darkred',
    fontSize:30,
    textAlign:'center'
  },
  container1: {
    marginVertical: 55,
    marginHorizontal: 15
},
title: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9d0b0b',
    textAlign:'center'
},
text: {
    fontSize: 20
},
textInput: {
    marginVertical: 10,
    backgroundColor:'#e3f6f5',
}
})

const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
      Main:MainScreen
      
    },
    {
      initialRouteName: 'Home',
      /* The header config from HomeScreen is now here */
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  );
 

const AppContainer = createAppContainer(RootStack);

export default class Home extends React.Component {
  render() {
    return <AppContainer />;
  }
}
