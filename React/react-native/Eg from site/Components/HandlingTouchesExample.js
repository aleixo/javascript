import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

class HandlingTouchesExample extends React.Component {

    _onPressButton() {
        Alert.alert('Alert','TINONI');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button style={{backgroundColor: 'white'}}
                        onPress={this._onPressButton}
                        title="Press Meddddddddd"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});


export default HandlingTouchesExample;