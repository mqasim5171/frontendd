import React from "react";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";
import BookCard from "../books/BookCard";

const AllProducts = () => {
  const { data: books = [], isLoading } = useFetchAllBooksQuery();

  if (isLoading) {
    return <div className="text-center py-10">Loading books...</div>;
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-6">All Books</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
