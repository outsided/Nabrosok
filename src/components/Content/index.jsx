import { PRODUCTS } from "./constant";
import Button from "../../UI/Button";
import styles from "./styles.module.css";

const Content = () => {
  return (
    <>
      <div className={styles.cardList}>
        {PRODUCTS.map((product) => (
          <div className={styles.card} key={product.id}>
            <img className={styles.img} src={product.img} alt={product.img} />
            <div className={styles.name}><b>{product.name}</b></div>
            <div className={styles.price}>
              <Button styles={styles.price} icon="icons/basket-icon.svg" />
              <span className={styles.price}>{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Content;