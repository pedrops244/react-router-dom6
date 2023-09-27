import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/GlobalStyles.css';
import { Home } from './components/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
