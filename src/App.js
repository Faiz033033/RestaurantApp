import React,{useState}  from 'react';
import { Fragment } from 'react';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHanndler = () => {
    setCartIsShown(true);
  };

  const hideCartHanndler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart = {hideCartHanndler} />}
      <Header onShowCart = {showCartHanndler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;