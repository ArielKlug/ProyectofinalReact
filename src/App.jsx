import { useEffect, useState } from "react";
import { db } from "../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "./App.css";

import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([{}]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
 

  const productsRef = collection(db, "Products");

  const getProducts = async () => {
    const querySnapshot = await getDocs(productsRef);
    setProducts(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }
  

  return (
    <div className="App">
      <Cart
      products={products}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Navbar
        products={products}
      />
      <Grid
                  products={products}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                />
      
    </div>
  );
}

export default App;
