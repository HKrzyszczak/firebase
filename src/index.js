import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppFirebase from "./AppFirebase";
import Task11 from "./Task11";
import Task12 from "./Task12";
import Task13 from "./Task13";
import Task14 from "./Task14";

ReactDOM.render(
    <div>
        <Task11/>
        <hr />
        <Task12/>
        <hr />
        <Task13/>
        <hr />
        <Task14/>
        <hr />
        <AppFirebase/>
        <hr />
        <App/>
    </div>, document.getElementById('root')
);
registerServiceWorker();
