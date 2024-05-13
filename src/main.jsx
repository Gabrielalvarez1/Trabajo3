import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout/Layout.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
//import Tweets from './Otros/views/Tweets/Tweets.jsx';
import Land from './Land.jsx';
import Salas from "./Salas.jsx";
import Login from './views/Login/Login.jsx';
import SalasInfo from "./BaseDatos/SalasInfo.jsx"
import App from './App.jsx';
import './index.css'
import '@fontsource-variable/inter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: 'main',
            //path: 'tweets',
            //element: <Tweets />
            element: <Land />
          },
          {
            path: 'salas',
            //element: <TweetDetails />
            element: <Salas />
          },
          {
            path: 'salasinfo',
            //element: <TweetDetails />
            element: <SalasInfo />
          },
          {
            path: '',
            element: <Navigate to="/main" replace={true} />
          }
        ]
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
