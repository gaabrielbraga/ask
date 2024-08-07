import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { Room } from './pages/Room/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/room/:roomId",
    element: <Room />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)