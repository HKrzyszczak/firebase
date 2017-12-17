import React, { Component } from 'react';
import {database} from "./firebase";

class AppFirebase extends Component {
    state = {
        counter: null,
    };

    componentDidMount() {
        database.ref('/counter')
            .on('value', (snapshot) => {
                this.setState({
                    counter: snapshot.val(),
                })
            });
    };

    incHandle = () => {
        database.ref('/counter')
            .set(this.state.counter + 1);
    };

    decHandle = () => {
        database.ref('/counter')
            .set(this.state.counter - 1);
    };

    render() {
        return(
            <div>
                <h1>
                    {this.state.counter}
                </h1>
                <button onClick={this.decHandle}>
                    -
                </button>
                <button onClick={this.incHandle}>
                    +
                </button>
            </div>
        )
    }
}

export default AppFirebase;
