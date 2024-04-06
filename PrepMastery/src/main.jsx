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
import Quiz from './components/quiz/Quiz.jsx'
import HsbcQuiz from './components/hsbcquiz/hsbcQuiz.jsx'
import TCS from './pages/CompanyPages/tcs.jsx'
import TCShome from './pages/CompanyPages/TCS/TCShome.jsx'
import TCSprocess from './pages/CompanyPages/TCS/TCSprocess.jsx'
import TCSprepare from './pages/CompanyPages/TCS/TCSprepare.jsx'
import HSBChome from './pages/CompanyPages/HSBC/HSBChome.jsx'
import HSBCprocess from './pages/CompanyPages/HSBC/HSBCprocess.jsx'
import HSBCprepare from './pages/CompanyPages/HSBC/HSBCprepare.jsx'
import TechMhome from './pages/CompanyPages/TechM/TechMhome.jsx'
import TechMprocess from './pages/CompanyPages/TechM/TechMprocess.jsx'
import TechMprepare from './pages/CompanyPages/TechM/TechMprepare.jsx'
import TechmQuiz from './components/techmquiz/techmQuiz.jsx'

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
    path: "/TCShome",
    element: <TCShome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/TCSprocess",
    element: <TCSprocess />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/TCSprepare",
    element: <TCSprepare />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/HSBChome",
    element: <HSBChome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/HSBCprocess",
    element: <HSBCprocess />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/HSBCprepare",
    element: <HSBCprepare />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/TechMhome",
    element: <TechMhome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/TechMprocess",
    element: <TechMprocess />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/TechMprepare",
    element: <TechMprepare />,
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
  {
    path: "/HSBC/quiz",
    element: <HsbcQuiz />,
  },
  {
    path: "/TechM/quiz",
    element: <TechmQuiz />,
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
