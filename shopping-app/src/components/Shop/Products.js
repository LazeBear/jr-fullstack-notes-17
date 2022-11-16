import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {props.products.map(product => (
          <ProductItem
            name={product.name}
            unitPrice={product.unitPrice}
            description={product.desc}
            id={product.id}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
