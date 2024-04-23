import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/Error.jsx";
import Homepage from "./pages/Homepage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignUpPage.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import TCShome from "./pages/CompanyPages/TCS/TCShome.jsx";
import TCSprocess from "./pages/CompanyPages/TCS/TCSprocess.jsx";
import TCSprepare from "./pages/CompanyPages/TCS/TCSprepare.jsx";
import HSBChome from "./pages/CompanyPages/HSBC/HSBChome.jsx";
import HSBCprocess from "./pages/CompanyPages/HSBC/HSBCprocess.jsx";
import HSBCprepare from "./pages/CompanyPages/HSBC/HSBCprepare.jsx";
import TechMhome from "./pages/CompanyPages/TechM/TechMhome.jsx";
import TechMprocess from "./pages/CompanyPages/TechM/TechMprocess.jsx";
import TechMprepare from "./pages/CompanyPages/TechM/TechMprepare.jsx";
import TQuizPage from "./components/tcsquiz/TQuizPage.jsx";
import HQuizPage from "./components/hsbcquiz/HQuizPage.jsx";
import TmQuizPage from "./components/techmquiz/TmQuizPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/tcsdemo/quiz",
    element: <TQuizPage />,
  },
  {
    path: "/HSBC/quiz",
    element: <HQuizPage />,
  },
  {
    path: "/TechM/quiz",
    element: <TmQuizPage />,
  },
]);

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#FF7426",
  // "#4B0082",
  // "#4D2C5E",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </PersistGate>
  </Provider>
);
