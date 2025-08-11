import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Component to handle initial navigation
const InitialNavigationHandler = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Check for path in query parameters (from 404.html redirect)
    const queryParams = new URLSearchParams(window.location.search)
    const path = queryParams.get('path')
    
    if (path) {
      // Remove the query parameter to clean up the URL
      const newUrl = window.location.pathname + window.location.hash
      window.history.replaceState({}, '', newUrl)
      
      // Navigate to the correct path
      navigate(path)
    }
  }, [navigate])

  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <InitialNavigationHandler />
    </BrowserRouter>
  </StrictMode>,
)
