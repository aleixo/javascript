import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class TextInputExample extends Component {
    constructor (props) {
        super (props);
        this.state = {text: ''};
    }

    render () {
        return (
            <View style={this.props.styles.view}>
                <TextInput 
                    style={this.props.styles.textInput} 
                    placeholder='I am a text input'
                    onChangeText={(text) => this.setState({text})} >
                    </TextInput>

                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>     
            </View>
        )
    }
}

export default TextInputExample;