import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
class Item extends Component {
    static navigationOptions = ( { navigation }) => ({
        title: navigation.state.params.title,
        // custom header here
        headerLeft: (<Button 
         onPress= {() => alert('This is a button!')}
         title ="info"
         color="red"
        />)
    })
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`I'm item # ${this.props.navigation.state.params.title}`}</Text>
        </View>
    )
  }
}
export default Item

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c0392b',
        padding: 20,
    },
    text: {
        color : 'white',
        fontSize: 40,
        fontWeight: 'bold',
    }
})
