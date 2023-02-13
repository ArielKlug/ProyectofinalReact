import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../db/firebase-config";
import styles from "../../index.module.css";


const ItemDetail = ({
}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async (id) => {
    const productDocRef = doc(db, "Products", id);
    const productDoc = await getDoc(productDocRef);
    if (productDoc.exists()) {
      setProduct(productDoc.data());
    } else {
      return null;
    }
  };
  useEffect(() => {
    getProduct(id);
  }, []);

  
  

  return (
    <div >
       <figure>
        <img src={product.img} alt={product.nameProduct} />
      </figure>
      <div className={styles.infoProduct}>
        <h2>{product.nameProduct}</h2>
        <p className={styles.price}>${product.price}</p>
        <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>        
      </div>
    </div>
  );
};

export default ItemDetail;
