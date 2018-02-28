import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class PropsExample extends React.Component {
    constructor () {
        super();
        this.pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          };
    }

    render () {
        return (    
            <View style={this.props.style}>
                <Text>Prop nname = {this.props.name}</Text>                
                <Image source={this.pic} style={{width: 193, height: 110}}/>            
            </View>        
        )
    }
}

export default PropsExample;