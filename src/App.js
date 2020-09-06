import React from 'react';
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react';


const App = () => {
  const [ordercount, setCount] = useState(0);

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
        count={ordercount}
      />
      <Main count={ordercount} setcount={setCount} />
      <Footer />
    </div>
  );
}

export default App;
