import React, { Component } from 'react';
import { database } from "./firebase";

class Task13 extends Component {

    componentDidMount() {
        database.ref('/array')
            .set( [1, 2, 3])
            .then(() => console.log('Array is set!'))
            .catch(() => console.log('ERROR! Nothing saved!!!'));
    };

    btnHandler = () => {
        database.ref('/array')
            .once('value',
                (snapshot) => console.log(snapshot.val())
            )
    };

    render() {
        return (
            <div>
                <h3>
                Save array to db
                </h3>
                <button onClick={this.btnHandler}>
                    Pobierz array
                </button>
            </div>
        )
    }
}

export default Task13;