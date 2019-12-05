import React, { Component } from 'react'
import { Text, StyleSheet, View,ScrollView,Button} from 'react-native'


export default class ass1 extends Component {
    render() {
        return (
            <View style={styles.container}> 
            {/*header */}
                <Text style={styles.header}> GNU Natural Public License V3</Text>
                <ScrollView>
                    <Text style={styles.body}>
                        
Disclaimer of Warranty. 
THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.    
Limitation of Liability.
IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES."

                    </Text>

        </ScrollView>
                <View style={styles.footer}>
                    <Button title="Reject" color="red"></Button>
                    <Button title="Accept" color="green"></Button>
                </View>
    </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        fontSize:27,
        color: 'blue',
        textAlign:'center'
    },
    body:{
        fontSize:25,
        margin:10
    },
    footer:{
        flexDirection:'row',
        justifyContent:'center',
        padding:10
    }
})
