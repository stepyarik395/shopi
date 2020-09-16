import React from 'react';
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import data from './data.json'

const App = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const [products, setProducts] = useState(data.products)
  const [minnum, setMin] = useState(0);
  const [maxnum, setMax] = useState(30);

  useEffect(() => {
    const parsedCount = Number(localStorage.getItem("ordercount") || 0)
    // dispatch({
    //   type: "COUNT__ORDER",
    // })
    // setCount(parsedCount)
  }, [])

  // useEffect(() => {
  //   localStorage.setItem("ordercount", store.ordercount)
  // }, [store.ordercount]);

  return (
    <div className="App">
      <Header
        setMin={setMin}
        setMax={setMax}
        minnum={minnum}
        maxnum={maxnum}
        products={products}
        // count={ordercount}
        setProducts={setProducts}
      />
      <Main
        setMin={setMin}
        setMax={setMax}
        minnum={minnum}
        maxnum={maxnum}
        products={products}
        // count={ordercount}
        // setcount={setCount}
        setProducts={setProducts}
      />
      <Footer />
    </div>
  );
}

export default App;
