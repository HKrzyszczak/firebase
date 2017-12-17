import React, { Component } from 'react';
import { database } from "./firebase";

class Push extends Component {
    state = {
        pushList: null,
    }

    clickHandle = () => {
        database.ref('/puszowane')
            .push('coś');
        const newRef = database.ref('/puszowane')
            .push();
            newRef.set('Cos dodałem do stworzonej referencji');

    };

    componentDidMount() {
        database.ref('/puszowane')
            .on(
                'value',
                (snapshot) => {
                    this.setState({
                        pushList: snapshot.val()
                    })
                }
            )
    }

    render() {
        return (
            <div>
                <h3>
                    Push
                </h3>
                <button onClick={this.clickHandle}>Pusznij coś</button>
                <ul>
                    {
                        this.state.pushList
                        &&
                            Object.entries(this.state.pushList)
                                .map(([key, value]) => {
                        return (
                            <li key={key}>
                        {value}
                        </li>
                        )})

                    }
                </ul>
            </div>
        )
    }
}

export default Push;