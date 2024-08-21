// src/BookCatalog.js
import React, { useState } from 'react';
import './styles.css';

const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', category: 'Fiction' },
  { id: 2, title: 'Book 2', author: 'Author 2', category: 'Non-Fiction' },
  // Add more books here
  { id: 20, title: 'Book 20', author: 'Author 20', category: 'Science' }
];

const BookCatalog = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div className="catalog-container">
      <h2>Book Catalog</h2>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.category}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No books in cart</p>
        ) : (
          cart.map((book, index) => (
            <div key={index} className="cart-item">
              <p>{book.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookCatalog;

