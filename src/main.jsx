import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './modules/navbar.jsx'
import Meta from './modules/meta.jsx'

createRoot(document.getElementById('meta')).render(
  <StrictMode>
    <Meta />
  </StrictMode>,
)
createRoot(document.getElementById('navbarroot')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
