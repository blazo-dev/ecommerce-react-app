import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@picocss/pico/scss/pico.classless.scss'
import './index.scss'
import FiltersProvider from './context/filtersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
