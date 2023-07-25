import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextLanguage } from './hooks/ContextLanguage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextLanguage>
      <App />
    </ContextLanguage>
  </React.StrictMode>
)
