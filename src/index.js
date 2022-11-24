import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ForumApp from './App';
import store from './states';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <ForumApp />
      </StrictMode>
    </BrowserRouter>
  </Provider>,
);
