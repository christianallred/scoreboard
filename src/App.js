import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider, } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer/rootReducer'

import Home from './components/Home';
import CourtAdmin from './components/CourtAdmin';
import Court from './components/Court';

const ISDEV = process.env.NODE_ENV !== 'production'

var appliedMiddlewares = ISDEV ?
  composeWithDevTools( applyMiddleware() ) :
  applyMiddleware()

const store = createStore(
    reducer ,
    appliedMiddlewares
)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/courtadmin" component={CourtAdmin} />
        <Route path="/court" component={Court} />
      </Router>
    </Provider>
  );
}

export default App;
