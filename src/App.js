import React from 'react';
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react';
import data from './data.json'



const App = () => {
  const [ordercount, setCount] = useState(0);
  const [products, setProducts] = useState(data.products)



  useEffect(() => {
    const parsedCount = Number(localStorage.getItem("ordercount") || 0)
    setCount(parsedCount)
  }, [])

  useEffect(() => {
    localStorage.setItem("ordercount", ordercount)
  }, [ordercount]);

  return (
    <div className="App">
      <Header
        products={products}
        count={ordercount}
        setProducts={setProducts}
      />
      <Main count={ordercount} setcount={setCount} products={products} setProducts={setProducts} />
      <Footer />
    </div>
  );
}

export default App;
