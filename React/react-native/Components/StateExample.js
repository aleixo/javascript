import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class StateExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowingText: true
        }

        setInterval( () => {
            this.setState( previousState => {
                return {
                    isShowingText: !previousState.isShowingText
                }
            });  
        }, 1000)
    }


    render () {
        return (  
            <View style={this.props.style}>
                <Text>{this.state.isShowingText ? this.props.text : ''}</Text>      
            </View>
                  
        )
    }
}

export default StateExample;