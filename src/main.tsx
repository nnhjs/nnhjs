import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'src/styles/tailwind.css';
import 'src/styles/global.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Container from 'src/components/Container.tsx';
import ErrorPage from 'src/components/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Container>
        <App />
      </Container>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
