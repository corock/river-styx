import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import { Route } from 'react-router-dom';
import { Home, Run } from 'pages';

const App = ({ store }) => {
  return (
    <>
      <GlobalStyles />
      <Route exact path="/" component={Home} />
      <Route path="/run" component={Run} />
    </>
  );
};

export default App;
