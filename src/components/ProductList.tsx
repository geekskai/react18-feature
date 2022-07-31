import { useDeferredValue } from "react";

function ProductList({ products }) {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {deferredProducts.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;
