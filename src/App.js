import React from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import appRoutes from './routes'
import logo from './assets/logo.png'
import "./App.css";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      appRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            key={route.key}
            element={<route.component />}
          />
        )
      })
    )
  )

  return (
    <div>
      <header className='header'>
        <img className='header-logo' src={logo} alt="Ingenieria en Computacion" />
      </header>
      <RouterProvider router={routes} />
      <footer className='footer'>
        © Ingenieria en Computacion - Exactas Para Todos 2023
      </footer>
    </div>
  )
}

export default App
