import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';

import { Route } from 'react-router-dom';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  // l5 32.00

  React.useEffect(() => {

  }, []);

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
