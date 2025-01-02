import React from "react"
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import Meta from "../meta"
import Navbar from "../navbar"
import App from "./Wapp"

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
  