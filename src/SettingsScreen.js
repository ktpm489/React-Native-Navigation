import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native'
export default class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Settings Screen',
        // custom header here
        headerLeft: (<Button
            onPress={() => alert('This is a button!')}
            title="info"
            color="red"
        />)
    })

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                < Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        )
    }
}
