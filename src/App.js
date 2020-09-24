import React from 'react';
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { useState } from 'react';
// import data from './data.json'

const App = () => {
  // const [products, setProducts] = useState(data.products)
  return (
    <div className="App">
      <Header
      // products={products}
      // setProducts={setProducts}
      />
      <Main
      // products={products}
      // setProducts={setProducts}
      />
      <Footer />
    </div>
  );
}

export default App;
