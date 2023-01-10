import React from 'react';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './components/App/App';
import { AppProvider } from './components/App/context';
import reportWebVitals from './reportWebVitals';

import AssetCreator from './components/AssetCreator';
import Profile from './components/Profile/Profile';

const root=createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/profile',
        element:<Profile />
      },
      {
        path:'/assetcreator',
        element:<AssetCreator />
      }
    
    ]
  },
  
]);
root.render(
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
