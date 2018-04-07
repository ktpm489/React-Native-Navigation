import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Button} from 'react-native'
export class TabC extends Component {
    static navigationOptions = ({ navigation }) => ({
       title:'Tab C',
    
    })
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>I'm TabC</Text>
            </View>
        )
    }
}
export default TabC

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c0392b',
        padding: 20
    },
    text: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    }
})