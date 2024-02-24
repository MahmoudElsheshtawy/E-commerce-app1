
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <Auth0Provider
    domain="dev-hv3ovg0ox1nsiz5v.us.auth0.com"
    clientId="5AlgXRUs0GJVD2X0IrKXZbMQZY9oTKAk"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <App />
  </Auth0Provider>
    
  
 
)
