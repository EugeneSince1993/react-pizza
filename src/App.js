import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';

import { Route } from 'react-router-dom';

function App() {
  // 21.40 fetch, useEffect

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
