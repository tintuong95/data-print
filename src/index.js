import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalProvider } from './GlobalContext';

import { RouterProvider } from "react-router";


import { createBrowserRouter } from "react-router";
import Product from './Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {path: "/:id", element: <Product />}
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <GlobalProvider>
    <RouterProvider router={router} />
  </GlobalProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
