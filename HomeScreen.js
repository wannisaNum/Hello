
import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {StackActions,NavigationAction, NavigationActions} from 'react-navigation'

const reserAction = StackActions.reset({
index:0,
action:[
    NavigationActions.navigate({
        routeName: "Detail",
        params:{
            name:"Wannisa",
            age:21,
            gender:'false',
            address:{number:333,Province:"Chiang Rai"}
        }

    })
]
});
export default class HomeScreen extends Component {
    next=() =>{
     //   this.props.navigation.navigate('Details',{
         //   name:"Wannisa",
           // age:21,
            //gender:'false',
            //address:{number:333,Province:"Chiang Rai"}

       // });
       this.props.navigation.dispatch(reserAction)
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Home Screen</Text>
                <Button
                    title="Go to Detail Page"
                    onPress={this.next}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({})
