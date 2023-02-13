import { Link } from "react-router-dom";
import styles from "../../index.module.css";

const Item = ({ products, onAddProduct }) => {
  return (
    <div>
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

export default Item;
