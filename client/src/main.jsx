import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';

axios.defaults.baseURL = import.meta.env.VITE_CARRY_API;

const REACT_APP_AUTH0_DOMAIN = 'carry-login.us.auth0.com';
const REACT_APP_AUTH0_CLIENT_ID = 'Yr5AIizkXNBNNk6LrdHwrj3ZO7suns8e';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
      </PersistGate>
      <Auth0Provider
        domain={REACT_APP_AUTH0_DOMAIN}
        clientId={REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
        useRefreshTokens
        cacheLocation='localstorage'
      >
        <App />
      </Auth0Provider>
    </Provider>
  // </React.StrictMode>
);
