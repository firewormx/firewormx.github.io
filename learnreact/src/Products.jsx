import { useState, useEffect } from "react";
import { Skeleton, TextInput } from "@mantine/core";
import Product from "./Product";
import useFetch from "./useFetch";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const { get, loading } = useFetch(
    "https://firewormx.github.io/learnreact/"
  );

  useEffect(() => {
    get("supermarket.json")
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log("Could not load products", error));
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <TextInput
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        style={{ maxWidth: 320, marginBottom: 24 }}
      />
      <div className="products-grid">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="product">
                <Skeleton height={100} width={100} mb={12} mx="auto" />
                <Skeleton height={20} width="70%" mb={8} mx="auto" />
                <Skeleton height={16} width="50%" mx="auto" />
              </div>
            ))
          : filtered.map((product) => (
              <Product
                key={product.id}
                details={product}
                cart={props.cart}
                onProductAdd={props.onProductAdd}
                onProductDelete={props.onProductDelete}
              />
            ))}
        {!loading && filtered.length === 0 && (
          <p style={{ gridColumn: "1 / -1", color: "var(--neutral-3)" }}>
            No products match &ldquo;{query}&rdquo;.
          </p>
        )}
      </div>
    </div>
  );
}
