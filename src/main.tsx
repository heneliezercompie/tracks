import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore  from 'app/store/config/index';
import { ConnectedRouter } from 'connected-react-router';
import App from './app';
import './assets/index.css';
import {BrowserRouter} from "react-router-dom";

// prepare store
const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
    //@ts-ignore
<Provider store={store}>
      <ConnectedRouter history={history} >
          <BrowserRouter>
              {/*
              // @ts-ignore */}
              < App />
          </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
