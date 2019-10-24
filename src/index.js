import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App'

import { createStore } from 'redux';

const store = createStore(()=> [])



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)

