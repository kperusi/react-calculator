import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Calculator from './Calculator'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <Calculator/>
  </StrictMode>
);
