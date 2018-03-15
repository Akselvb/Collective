import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA3rKwZvEoomBy7nFXZhZGTlnQhiWGfF9Q',
      authDomain: 'collective-test-7b951.firebaseapp.com',
      databaseURL: 'https://collective-test-7b951.firebaseio.com',
      projectId: 'collective-test-7b951',
      storageBucket: 'collective-test-7b951.appspot.com',
      messagingSenderId: '996417342651'
    };
      firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
