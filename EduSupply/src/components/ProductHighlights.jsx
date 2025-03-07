import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/apiSimulator";
import { mockProducts } from "../data/mockData";

const ProductHighlights = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchData(mockProducts, 1500);
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center text-gray-800 dark:text-gray-200">
          Loading products...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center text-red-500">
          {" "}
          {error}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Explore Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-700 p-4 rounded shadow hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {product.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
