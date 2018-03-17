import NavigationBar from 'react-native-navbar'
import React from 'react';
import {FlatList,
    Image,
    Picker,
    ScrollView,
    SectionList,
    StyleSheet,
    Text,
    View} from 'react-native'

import PropsExample from './Components/PropsExample';
import StateExample from './Components/StateExample';
import TextInputExample from './Components/TextInputExample';
import HandlingTouchesExample from './Components/HandlingTouchesExample';
import NetworkingExample from "./Components/NetworkingExample";
import SimpleReducer from "./Reducer/SimpleReducer";


class App extends React.Component {
    constructor() {
        super();
        const simpleReducer = new SimpleReducer();
    }
    //justifyContent - - - - flex-start, center, flex-end, space-around, and space-between.
    //alignItems - - - - flex-start, center, flex-end, and stretch
    //Layouts ---- https://facebook.github.io/react-native/docs/layout-props.html
    render() {
        return (
            <NetworkingExample/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue'
    },
    props: {
        flex: 1.5,
        backgroundColor: 'skyblue'
    },
    state: {
        flex: 2,
        backgroundColor: 'steelblue'
    },
    textInput: {
        height: 40
    },
    view: {
        flex: 1,
        padding: 10
    }
});


export default App;