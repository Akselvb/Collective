import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { configureFontAwesomePro } from 'react-native-fontawesome-pro';

// import {
//   FB_API_KEY,
//   FB_AUTH_DOMAIN,
//   FB_DATABASE_URL,
//   FB_PROJECT_ID,
//   FB_STORAGE_BUCKET,
//   FB_MESSAGING_SENDER_ID
// } from 'react-native-dotenv';

import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

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
    configureFontAwesomePro('light');

    console.ignoredYellowBox = ['Remote debugger'];
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
