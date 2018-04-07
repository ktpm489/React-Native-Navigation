import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, Text } from 'react-native'
class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
            </View>
        );
    }
}

export default DetailsScreen;
