import React, { Component } from 'react';
import { database } from "./firebase";

class Task13 extends Component {

    componentDidMount() {
        database.ref('/array')
            .set( [1, 2, 3]);
    };


    render() {
        return (
            <div>
                Save array to db
            </div>
        )
    }
}

export default Task13;