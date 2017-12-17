import React, { Component } from 'react';
import { database } from "./firebase";


class Task11 extends Component {

    componentDidMount() {
        database.ref('/my/first/path')
            .set( 'it works')
            };


    render() {
        return (
        <div>
            Saving  "it works"
            to "my/first/path"
        </div>
        )
    }
}

export default Task11;