import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from './auth/Signup.jsx'
import { PostProvider } from './global/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostProvider>
    <App /> 
    </PostProvider>
  </StrictMode>,
)
