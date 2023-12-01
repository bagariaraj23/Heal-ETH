import React, { useState } from "react";
import Card from './Card';
import therapistsData from "./TherapistData";
interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsListProps {
  products: Product[];
  itemsPerPage: number;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, itemsPerPage }) => {
  let [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = therapistsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(therapistsData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="Product-list">
        <div className="listing">
        {currentItems.map((therapist) => (
          <Card
            key={therapist.title}
            title={therapist.title}
            imageUrl={therapist.imageUrl}
            description={therapist.description}
            price={therapist.price}
            speciality={therapist.speciality}
          />
        ))}
        </div>
      <div className="pagination-container">
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <ul class="pagination">
    <li>
      <a href="#"  
      onClick={() => handlePageChange(currentPage - 1)}
      className={currentPage === 1 ? 'disabled' : ''}>Prev</a>
    </li>
    <li>
      <a href="#" className={currentPage === 1 ? 'disabled' : ''}
      onClick={() => handlePageChange(currentPage = 1)}>1</a>
    </li>
    <li>
      <a href="#" className="disabled">...</a>
    </li>
    <li>
      <a href="#" className={currentPage === 1 ? 'd-none' : ''}>{currentPage - 1}</a>
    </li>
    <li className="active">
      <a href="#">{currentPage}</a>
    </li>
    <li>
      <a href="#" className={currentPage === totalPages ? 'd-none' : ''}>{currentPage + 1}</a>
    </li>
    <li>
      <a href="#" className="disabled">...</a>
    </li>
    <li>
      <a href="#" className={currentPage === totalPages ? 'disabled' : ''}
      onClick={() => handlePageChange(currentPage = totalPages)}>{totalPages}</a>
    </li>
    <li>
      <a href="#" onClick={() => handlePageChange(currentPage + 1)}
        className={currentPage === totalPages ? 'disabled' : ''}  >Next</a>
    </li>
  </ul>
      </div>


    </div>
  );
};

export default ProductsList;
