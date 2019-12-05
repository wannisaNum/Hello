
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Tab, Tabs, TabHeading, Icon } from 'native-base';

export default class ass2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Tabs tabBarPosition="bottom">
                    {/* Tab with icon, need TabHeading */}
                    <Tab heading={ <TabHeading style={{backgroundColor:'purple'}}><Icon ios="ios-home" android="md-home"/><Text>Home</Text></TabHeading> }>
                        <View style={styles.tab0}>
                            <Text style={styles.textStyle}>Here is Tab 0</Text>
                        </View>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon ios="ios-image" android="md-image"/><Text>Image</Text></TabHeading> }>
                        <View style={styles.tab1}>
                            <Text style={styles.textStyle}>Here is Tab 1</Text>
                        </View>
                    </Tab>

                    {/* Tab without icon*/}
                    <Tab heading="Help" tabStyle={{backgroundColor: 'red'}} activeTabStyle={{backgroundColor: 'orange'}}>
                        <View style={styles.tab2}>
                            <Text style={styles.textStyle}>Here is Tab 2</Text>
                        </View>
                    </Tab>
                </Tabs>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    tab0: {
        flex: 1,
        backgroundColor: 'palegreen'
    },
    tab1: {
        flex: 1,
        backgroundColor: 'beige'
    },
    tab2: {
        flex: 1,
        backgroundColor: 'pink'
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
