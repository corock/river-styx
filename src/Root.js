import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

const Root = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  );
};

export default Root;
