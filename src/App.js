import React, { Component } from 'react';

class App extends Component {
    state = {
        response: 'No response yet!',
    };

    getHandler = () => {

        fetch("https://ad-snadbox.firebaseio.com/users/henryk.json")
            .then(response => response.json())
            .then((json) => {
            this.setState({
                    response: JSON.stringify(json),
                })
            });
    };

    postHandler = () => {
        fetch('https://ad-snadbox.firebaseio.com/users/henryk.json', {
            method: 'POST',
            body: JSON.stringify({
                name: 'Henryk',
                lastname: 'Krzyszczak',
                active: false

            })
        })
    };

    putHandler = () => {
        fetch('https://ad-snadbox.firebaseio.com/users/henryk.json', {
            method: 'PUT',
            body: JSON.stringify({
                name: 'Henryk',
                lastname: 'Krzyszczak',
                active: false

            })
        })

    };

    patchHandle = () => {
        fetch('https://ad-snadbox.firebaseio.com/users/henryk.json', {
            method: 'PATCH',
            body: JSON.stringify({
                name: 'Henryk',
                lastname: 'Krzyszczak',
                active: true

            })
        })
    }

    clearHandler = () => {
        fetch('https://ad-snadbox.firebaseio.com/users/henryk.json', {
            method: 'DELETE'
            }
        )
    };

  render() {
    return (
      <div className="App">
          <div>
          <button onClick={this.getHandler}>GET data from our endpoint</button>
          </div>
          <div>
              <button onClick={this.postHandler}>POST data to base</button>
          </div>
          <div>
              <button onClick={this.putHandler}>PUT data to base</button>
          </div>
          <div>
              <button onClick={this.patchHandle}>PATCH data</button>
          </div>
          <div>
              <button onClick={this.clearHandler}>DELETE</button>
          </div>

          <p>{this.state.response}</p>

      </div>
    );
  }
}

export default App;