import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="995760024175-tl4qnsoi4ecechr40hkeql794jggsa0v.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
  </React.StrictMode>,
</GoogleOAuthProvider>
)
