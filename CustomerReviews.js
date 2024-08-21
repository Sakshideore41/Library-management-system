// src/CustomerReviews.js
import React from 'react';
import './styles.css';

const CustomerReviews = () => {
  const reviews = [
    { id: 1, name: 'Alice Johnson', rating: 5, review: 'Absolutely amazing Books! Highly recommend.' },
    { id: 2, name: 'Bob Smith', rating: 4, review: 'Very satisfied with the service and Books Quality.' },
    { id: 3, name: 'Carol Davis', rating: 5, review: 'Exceeded my expectations in every way!' },
    { id: 4, name: 'David Brown', rating: 4, review: 'Great experience in learning, will definitely return.' },
    { id: 5, name: 'Eve Martinez', rating: 5, review: 'Fantastic! Couldn’t have asked for more.' },
    { id: 6, name: 'Frank Clark', rating: 5, review: 'Truly exceptional service and quality.' },
    { id: 7, name: 'Grace Lee', rating: 4, review: 'Very pleased with the overall experience.' },
    { id: 8, name: 'Henry Wilson', rating: 5, review: 'Top-notch quality and great service!' },
    { id: 9, name: 'Isabel Scott', rating: 4, review: 'Highly recommend to get a books, very happy with everything.' },
    { id: 10, name: 'Jack Turner', rating: 5, review: 'Best experience I’ve had in a long time.' },
    { id: 11, name: 'Karen White', rating: 5, review: 'Absolutely flawless from start to finish.' },
  ];

  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3>{review.name}</h3>
            <p>Rating: {review.rating} ★</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
