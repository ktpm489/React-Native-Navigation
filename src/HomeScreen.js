import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, Button } from 'react-native'
export default class HomeScreen extends Component {


  render() {
    return (
      <View style={{ flex: 1 ,justifyContent :'center', alignItems :'center'}}>
       < Button
        title="Go to Details"
        onPress= {() => this.props.navigation.navigate('Details')}
       />
      </View>
    )
  }
};
