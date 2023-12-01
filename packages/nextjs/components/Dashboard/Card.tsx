import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
  speciality: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description, price, speciality }) => {
  return (
    <div className="card">
      <div className='main'>
        <img className='tokenImage' src={imageUrl} alt="NFT" />
        <h2>{title}</h2>
        <p className='description'>{description}</p>
        <hr />
        <div className='tokenInfo'>
          <div className="price">
            <ins>◘</ins>
            <p>{price}</p>
          </div>
          <div className="speciality">
            <p>{speciality}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;