import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Questions from './components/Questions.jsx'
import ErrorPage from './pages/Error.jsx'
import Homepage from './pages/Homepage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignUpPage.jsx'
import { Provider } from 'react-redux';
import {store, persistor} from './app/store.js';
import { PersistGate } from 'redux-persist/integration/react'
import CompanyPage from './pages/CompanyPage.jsx'
import Quiz from './components/Quiz.jsx'
import TCS from './pages/CompanyPages/tcs.jsx'
import TCSHome from './pages/CompanyPages/TCS/TCShome.jsx'
import TCSprocess from './pages/CompanyPages/TCS/TCSprocess.jsx'
import TCSprepare from './pages/CompanyPages/TCS/TCSprepare.jsx'

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
    path: "/TCS-home",
    element: <TCSHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/TCS-process",
    element: <TCSprocess />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/TCS-prepare",
    element: <TCSprepare />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:title",
    element: <CompanyPage />,
  },
  {
    path: "/tcsdemo/quiz",
    element: <Quiz />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </PersistGate>
  </Provider>
)
