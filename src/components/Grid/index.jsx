import React from "react";
import { Link } from "react-router-dom";

import styles from "../../index.module.css";
import Item from "../Item";

const Grid = ({
  products,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  allProducts,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <div className={styles.containerItems}>
       {products.map((product) => (
        <div className={styles.item} key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className={styles.infoProduct}>
            <h2>{product.nameProduct}</h2>
            <p className={styles.price}>${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
            <Link to={`${product.id}`} key={product.id}>
              <button id="btnDetail">Ver en detalle</button>
            </Link>
          </div>
        </div>
      ))}
     </div>
  );
};

export default Grid;
