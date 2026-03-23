import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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

