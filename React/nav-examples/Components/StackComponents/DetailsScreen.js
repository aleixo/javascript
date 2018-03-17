import React from 'react';
import { View, Text, Button } from 'react-native';

class DetailsScreen extends React.Component {    
    
    render() {

        //this.props.navigation.state.params
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const otherParam = params ? params.otherParam : null;

        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() => this.props.navigation.navigate('Details')}
            />
            <Button
                title="Go back"
                onPress={() => this.props.navigation.goBack()}
            />
        </View>
        );
    }
}

export default DetailsScreen;