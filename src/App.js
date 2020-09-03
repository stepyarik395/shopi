import React from 'react';
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import data from './data.json'
import { useEffect, useState } from 'react';

const products = data.products;
const App = () => {
  const [ordercount, setCount] = useState(0);
  const [minprice, setminCount] = useState(0);
  const [maxprice, setmaxCount] = useState(30)

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
        minprice={minprice}
        maxprice={maxprice}
        setmincount={setminCount}
        setmaxcount={setmaxCount}
        count={ordercount}
      />
      <Main count={ordercount} setcount={setCount} products={products} />
      <Footer />
    </div>
  );
}

export default App;
