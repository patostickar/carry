import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0ProviderWithHistory } from './Auth0ProviderWithHistory';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';

axios.defaults.baseURL = import.meta.env.VITE_CARRY_API;

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>   !!!!ESTO HACE QUE SE EJECUTEN TODAS LAS FUNCIONES DOS VECES 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <BrowserRouter>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode> 
);
