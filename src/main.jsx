import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RoutesComponent from './router/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesComponent >
      <App />
    </RoutesComponent>
  </StrictMode>,
)
