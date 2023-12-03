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
      <div className="therapy-v2-meet-our-expert-list false">
        <div className="therapy-v2-expert-info-container">
          <div className="therapy-v2-expert-info-rating">
            <img src="https://cdn.mindpeers.co/site-icons/new-dashboard-icons/therapyv2/star.svg" alt="Rating Star" />
            <span style={{ padding: '5px 0px 0px 4px', fontWeight: 'bold' }}>0/5</span>
          </div>
          <div className="therapy-v2-expert-star-profile">
            <div className="therapy-v2-expert-profile">
              <img src={imageUrl} alt="THERAPIST-PROFILE" />
            </div>
          </div>
          <div className="therapy-v2-expert-info">
            <div className="therapy-v2-expert-info-name">{title}</div>
            <div className="therapy-v2-expert-info-pronouns">{speciality}</div>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <div className="line-through-price">{price}</div>
              <div className="actual-card-price">{price}</div>
            </div>
            <div className="therapist-language-wrapper">
              <div className="therapist-language-text">{description}</div>
              <div className="therapist-languages">
                <div className="therapist-language">English</div>
                <div className="therapist-language">Hindi</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <div className="therapy-v2-meet-our-expert-session-info-text">No Slots Available</div>
        </div>
        {/* <hr style={{ margin: '0px', borderTop: '1px solid rgb(227, 229, 255)' }} /> */}
        <div className="therapy-card-booking-container">
          <div className="therapy-card-booking-cta">Know More</div>
          <button className="therapy-card-booking-cta therapy-card-booknow-cta">Book Now</button>
        </div>
      </div>
    
  );
};

export default Card;
