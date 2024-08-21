import React, { useState } from 'react';
import './styles.css';

const BookList = () => {
  const initialBooks = [
    { id: 1, title: 'The Art of War', author: 'Sun Tzu', category: 'Strategy', rating: 4.8, price: 9.99 },
    { id: 2, title: 'The Odyssey', author: 'Homer', category: 'Epic', rating: 4.7, price: 7.49 },
    { id: 3, title: 'Moby Dick', author: 'Herman Melville', category: 'Adventure', rating: 4.3, price: 8.99 },
    { id: 4, title: 'The Divine Comedy', author: 'Dante Alighieri', category: 'Poetry', rating: 4.5, price: 11.99 },
    { id: 5, title: 'Les Misérables', author: 'Victor Hugo', category: 'Historical Fiction', rating: 4.7, price: 14.99 },
    { id: 6, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', category: 'Philosophical Fiction', rating: 4.6, price: 13.49 },
    { id: 7, title: 'Madame Bovary', author: 'Gustave Flaubert', category: 'Realism', rating: 4.2, price: 10.99 },
    { id: 8, title: 'The Iliad', author: 'Homer', category: 'Epic', rating: 4.8, price: 12.99 },
    { id: 9, title: 'Don Quixote', author: 'Miguel de Cervantes', category: 'Satire', rating: 4.7, price: 10.49 },
    { id: 10, title: 'Ulysses', author: 'James Joyce', category: 'Modernist', rating: 4.1, price: 9.99 },
    { id: 11, title: 'Hamlet', author: 'William Shakespeare', category: 'Tragedy', rating: 4.9, price: 6.99 },
    { id: 12, title: 'The Metamorphosis', author: 'Franz Kafka', category: 'Surrealism', rating: 4.4, price: 7.99 },
  ];

  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = (id) => {
    const updatedBooks = books.map(book =>
      book.id === id ? { ...book, quantity: (book.quantity || 0) + 1 } : book
    );
    setBooks(updatedBooks);
  };

  const handleRemoveBook = (id) => {
    const updatedBooks = books.map(book =>
      book.id === id && (book.quantity || 0) > 0 ? { ...book, quantity: (book.quantity || 0) - 1 } : book
    );
    setBooks(updatedBooks);
  };

  return (
    <div className="book-list">
      <h2>Available Books</h2>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Rating: {book.rating} ★</p>
            <p>Price: ${book.price.toFixed(2)}</p>
            <div className="quantity-control">
              <button onClick={() => handleRemoveBook(book.id)}>-</button>
              <span>{book.quantity || 0}</span>
              <button onClick={() => handleAddBook(book.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
