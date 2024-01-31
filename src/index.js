import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store } from './redux/store';
import './index.css';
import { GlobalStyle } from 'styles/CreateGlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
