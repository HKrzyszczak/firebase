import React, { Component } from 'react';
import { database } from "./firebase";

class Task17 extends Component {

    state = {
        response: {},
    };


    clickHandle = () => {
        // database.ref('/puszowane')
        //     .push('coś');
        // const newRef = database.ref('/puszowane')
        //     .push();
        // newRef.set('Cos dodałem do stworzonej referencji');


        fetch("randomuser.me/api")
            .then((response) => {
                this.setState({
                    response: response.result
                })
            });
        database.ref('/puszowane')
            .push(this.state.response);

    };

    render() {
        return (
            <div>
                <h3>
                    wrzucamy dane z randomUser
                </h3>
                <button onClick={this.clickHandle}>Pusznij coś</button>
            </div>
        )
    }
}

export default Task17;