import React from 'react';
import Navbar from './Navbar/Navbar';

class Container extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Navbar/>
            </div>
        )
    }
}

export  default Container;