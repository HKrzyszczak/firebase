import React, { Component } from 'react';
import { database } from "./firebase";

class Task12 extends Component {

    componentDidMount() {
        database.ref('/myData')
            .set( {
            name: 'Henryk',
            surname: 'Krzyszczak',
                age: 37,})
            .on(() => console.log('My personal data is set!'))
            .catch(() => console.log('ERROR! Nothing saved!!!'))
    };


    render() {
        return (
            <div>
                Save object to db
            </div>
        )
    }
}

export default Task12;