import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Helmet } from 'react-helmet'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helmet>
      <title>Paver Portfolio</title>
    </Helmet>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>,
)
