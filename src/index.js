import React from 'react';
import { createRoot } from 'react-dom/client';

import { CounterContextProvider } from './context/CounterContext';
import './styles/global-styles.css';

import { Home } from './templates/Home';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
);
