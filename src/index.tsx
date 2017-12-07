import * as React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux';
import todoApp from './reducers';
import { StoreState } from './types/index';
import App from './containers/App';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
