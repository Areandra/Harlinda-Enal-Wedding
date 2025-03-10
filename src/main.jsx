import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Wedding from './Wedding.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wedding />
  </StrictMode>
)
