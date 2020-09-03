import React from 'react';
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import data from './data.json'
import { useState, useEffect } from 'react';

const products = data.products;

const App = () => {

  const [count, SetBucketCount] = useState(0)

  useEffect(() => {
    const parsedCount = Number(localStorage.getItem("count") || 0)
    SetBucketCount(parsedCount)
  }, [])
  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count]);

  return (
    <div className="App">
      <Header countbucket={count} />
      <Main setbucket={SetBucketCount} countbucket={count} products={products} />
      <Footer />
    </div>
  );
}

export default App;
