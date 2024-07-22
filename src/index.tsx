import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryClient}>
    <div id="portal" />
    <Router />
  </QueryClientProvider>,
);
