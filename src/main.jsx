import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>,
)
