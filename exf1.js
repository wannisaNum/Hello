import React, { Component } from 'react'
import { Text, StyleSheet, View,ScrollView } from 'react-native'

export default class exf1 extends Component { //scrollview
    render() {
        return (
            <ScrollView >

                <View>

                </View>
                <View>
                       <Text style={styles.textStyle}>   If we have information to be shown in more than one page, one simple solution is to use ScrollView.
                     This widget can contain a long content such as long text or large image and users can scroll to see it part by part.
                      In addition, if we really need other pages, we can choose different techniques. For example, if we allow users to switch between pages without any condition, 
                      TabView is a  choice. However, if one page requires a prerequisite (previous page), we need to use frame module to travel between them.

                      If we have information to be shown in more than one page, one simple solution is to use ScrollView. This widget can contain a long content such as long text or large image and users can scroll to see it part by part. In addition, if we really need other pages, we can choose different techniques. For example, if we allow users to switch between pages without any condition, TabView is a good choice. However, if one page requires a prerequisite (previous page), we need to use frame module to travel between them.

                      If we have information to be shown in more than one page, one simple solution is to use ScrollView. This widget can contain a long content such as long text or large image and users can scroll to see it part by part. In addition, if we really need other pages, we can choose different techniques. For example, if we allow users to switch between pages without any condition, TabView is a good choice. However, if one page requires a prerequisite (previous page), we need to use frame module to travel between them.

                      </Text>
               </View>

               <View>

               </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    textStyle: {
        margin: 10,
        fontSize: 25
    }
});

