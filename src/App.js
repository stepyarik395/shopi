import React from 'react';
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react';
import data from './data.json'

const App = () => {
  const [products, setProducts] = useState(data.products)
  const [ordercount, setCount] = useState(0);
  const [minnum, setMin] = useState(0);
  const [maxnum, setMax] = useState(30);

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
        setMin={setMin}
        setMax={setMax}
        minnum={minnum}
        maxnum={maxnum}
        products={products}
        count={ordercount}
        setProducts={setProducts}
      />
      <Main
        setMin={setMin}
        setMax={setMax}
        minnum={minnum}
        maxnum={maxnum}
        products={products}
        count={ordercount}
        setcount={setCount}
        setProducts={setProducts}
      />
      <Footer />
    </div>
  );
}

export default App;
