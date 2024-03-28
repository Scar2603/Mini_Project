import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TCS from './pages/CompanyPages/TCS.jsx'
import Accenture from './pages/CompanyPages/Accenture.jsx'
import HSBC from './pages/CompanyPages/HSBC.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Questions from './components/Questions.jsx'
import ErrorPage from './pages/Error.jsx'
import Homepage from './pages/Homepage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignUpPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/questions",
    element: <Questions />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tcs",
    element: <TCS />,
  },
  {
    path: "/accenture",
    element: <Accenture />,
  },
  {
    path: "/hsbc",
    element: <HSBC />,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,

  
)
