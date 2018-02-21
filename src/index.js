import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app.js"
import "bootstrap/dist/css/bootstrap.css"
import "mdbootstrap/css/bootstrap.css"
import {createStore} from "redux"
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
import rootReducer from "./reducers/rootReducer"


const store=createStore(rootReducer)
store.subscribe(()=>{})

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>,
 document.getElementById('root'));

