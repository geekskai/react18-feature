import { useState, useTransition } from "react";

import "./App.css";

import ProductList from "./components/ProductList";

export function generateProducts() {
  const products: Array<string> = [];
  for (let i = 0; i < 10000; i++) {
    products.push(`Product ${i + 1}`);
  }
  return products;
}

const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function App() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event) {
    // startTransition(() => {
    //   setFilterTerm(event.target.value);
    // });
    setFilterTerm(event.target.value);
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {/* {isPending && <p style={{ color: "white" }}>更新列表。. </p>} */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
