import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { store /* persistor */ } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';

const REACT_APP_AUTH0_DOMAIN = 'carry-login.us.auth0.com';
const REACT_APP_AUTH0_CLIENT_ID = '5DElbsy3qZ5EhBt3BQOMDpHiCfHfAbe6';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <CssBaseline />
      <App />
      {/* </PersistGate> */}
      <Auth0Provider
        domain={REACT_APP_AUTH0_DOMAIN}
        clientId={REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
      ></Auth0Provider>
    </Provider>
  </React.StrictMode>
);
