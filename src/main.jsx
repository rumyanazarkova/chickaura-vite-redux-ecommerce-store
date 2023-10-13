import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { Provider } from 'react-redux';
import { apiSlice } from './features/api/apiSlice'
import store from './app/store'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-4c0prsscaj5m3crp.us.auth0.com'
    clientId='VkmxabqPTXh8m2lJoNTmR6o47R85WpAr'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ApiProvider api={apiSlice}>
      <Provider store={store}>

        <App />

      </Provider>
    </ApiProvider>
  </Auth0Provider>,
)
