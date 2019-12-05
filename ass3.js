
import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailScreen'


 
// -------------- CSS -----------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        marginVertical: 10
    }
});
 
// -------------- Navigation Stack -----------------
const AppNavigator = createStackNavigator(
    {
        //all pages for navigation
        Home:{
            screen: HomeScreen,
            navigationOptions:{
                header:null
            }
        },
            screen: DetailsScreen,
            navigationOptions:{
                title:"Details",
                headerStyle:{
                    backgroundColor:"pink"
                }
            }
    },
    {
        //starting page
        initialRouteName: 'Home',
    }
);
 
const AppContainer = createAppContainer(AppNavigator);
 
// -------------- Default Class: start here -----------------
export default class ass3 extends Component {
    render() {
        return <AppContainer />;
    }
}
