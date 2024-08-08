import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppMichi } from './AppMichi'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <React.StrictMode>
    <AppMichi></AppMichi>
  </React.StrictMode>
  </BrowserRouter>
)
