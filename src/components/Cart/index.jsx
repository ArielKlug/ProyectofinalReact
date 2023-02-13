import React, { useState } from "react";

import styles from "../../index.module.css";

const Cart = ({
  products,
  allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <div>
      <header>
        <h1>Tienda InfinityPC</h1>

        <div className={styles.containerIcon}>
          <div
            className={styles.containerCartIcon}
            onClick={() => setActive(!active)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={styles.iconCart}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div className={styles.countProducts}>
              <span id="contador-productos">{countProducts}</span>
            </div>
          </div>

          <div
            className={`${styles.containerCartProducts} ${
              active ? "" : `${styles.hiddenCart}`
            }`}
          >
            {allProducts.length ? (
              <>
                <div className={`${styles.rowProduct}`}>
                  {allProducts.map((product) => (
                    <div className={`${styles.cartProduct}`} key={product.id}>
                      <div className={`${styles.infoCartProduct}`}>
                        <span className={`${styles.cantidadProductoCarrito}`}>
                          {product.quantity}
                        </span>
                        <p className={`${styles.tituloProductoCarrito}`}>
                          {product.nameProduct}
                        </p>
                        <span className={`${styles.precioProductoCarrito}`}>
                          ${product.price}
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`${styles.iconClosed}`}
                        onClick={() => onDeleteProduct(product)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  ))}
                </div>

                <div className={`${styles.cartTotal}`}>
                  <h3>Total:</h3>
                  <span className={`${styles.totalPagar}`}>${total}</span>
                </div>

                <button
                  className={`${styles.btnClearAll}`}
                  onClick={onCleanCart}
                >
                  Vaciar Carrito
                </button>
              </>
            ) : (
              <p className={`${styles.cartEmpty}`}>El carrito está vacío</p>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Cart;
