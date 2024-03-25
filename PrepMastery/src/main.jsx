import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Questions from './components/Questions.jsx'
import ErrorPage from './pages/Error.jsx'
import Homepage from './pages/Homepage.jsx'
import LoginPage from './pages/LoginPage.jsx'

const router = createBrowserRouter([
  {path: '/',
  element: <Homepage />,
  errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/questions",
    element: <Questions />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-vpz6n05yz15o38yx.us.auth0.com"
    clientId="mROuPl62UVUwbALvRdHLmqS9Kapd575z"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <RouterProvider router={router}>
    <App />
  </RouterProvider>,
  </Auth0Provider>,
  
)
