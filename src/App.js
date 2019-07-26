import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Run } from 'pages';

const App = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path='/run' component={Run} />
    </>
  );
};

export default App;
