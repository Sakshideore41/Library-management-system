import React from 'react';
import './styles.css';

const IssueBook = () => {
  return (
    <div className="issue-book-container">
      <div className="issue-book-nav">
        <button>New Book</button>
        <button>Statistics</button>
        <button>Issue Book</button>
        <button>Return Book</button>
      </div>
      <div className="issue-book-form">
        <form>
          <div className="form-group">
            <label>
              Book ID:
              <input type="text" name="bookId" required />
            </label>
          </div>
          <div className="form-group">
            <label>
              Student ID:
              <input type="text" name="studentId" required />
            </label>
          </div>
          <div className="form-group">
            <label>
              Issue Date:
              <input type="date" name="issueDate" required />
            </label>
          </div>
          <div className="form-group">
            <label>
              Due Date:
              <input type="date" name="dueDate" required />
            </label>
          </div>
          <div className="form-buttons">
            <button type="submit">Issue</button>
            <button type="button">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IssueBook;
