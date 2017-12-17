import React, { Component } from 'react';
import { database } from "./firebase";

class Task14 extends Component {

    componentDidMount() {
        // database.ref('/array')
        //     .set( [1, 2, 3]);
    };

    deleteHandle = () => {
        database.ref('/')
            .remove();

    };

    render() {
        return (
            <div>
                <h3>
                Delete everything!!!
                </h3>
                <button onClick={this.deleteHandle}>DELETE</button>
            </div>
        )
    }
}

export default Task14;