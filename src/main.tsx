import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@radix-ui/themes/styles.css';
import './global.css';
import { Theme } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme appearance="dark">
      <App />
    </Theme>
  </React.StrictMode>
);
