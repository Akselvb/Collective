import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { configureFontAwesomePro } from 'react-native-fontawesome-pro';

import {
  FB_API_KEY,
  FB_AUTH_DOMAIN,
  FB_DATABASE_URL,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
  FB_MESSAGING_SENDER_ID
} from 'react-native-dotenv';

import reducers from './reducers';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: FB_API_KEY,
      authDomain: FB_AUTH_DOMAIN,
      databaseURL: FB_DATABASE_URL,
      projectId: FB_PROJECT_ID,
      storageBucket: FB_STORAGE_BUCKET,
      messagingSenderId: FB_MESSAGING_SENDER_ID
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
