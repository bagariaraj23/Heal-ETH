// Dashboard.tsx
import React from "react";
import ProductsList from "./ProductList.tsx";

const productData: Product[] = [
  { id: 1, name: "Product 1", price: 20 },
  { id: 2, name: "Product 2", price: 30 },
  // ... more products
];

const Dashboard: React.FC = () => {
  return (
    <div className="pt-10 pb-10">
      <ProductsList products={productData} itemsPerPage={5} />
    </div>
  );
};

export default Dashboard;
