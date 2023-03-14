import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Axios from 'axios';
import { store } from './app/store';
import App from './App';
import './index.css';

Axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

