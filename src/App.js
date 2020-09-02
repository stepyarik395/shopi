import React from 'react';
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import data from './data.json'


const products = data.products;

const App = () => {

  return (
    <div className="App">
      <Header />
      <Main products={products} />
      <Footer />
    </div>
  );
}

export default App;
