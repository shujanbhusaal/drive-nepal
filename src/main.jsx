import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterPage from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterPage />
  </StrictMode>,
)
