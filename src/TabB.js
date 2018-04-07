import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native'
export class TabB extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'TabB'
    })
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>I'm TabB</Text>
            </View>
        )
    }
}
export default TabB

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