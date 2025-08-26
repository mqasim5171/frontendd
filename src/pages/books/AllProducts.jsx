
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";
import BookCard from "../books/BookCard";

// AllBooks.jsx (example)
import React from "react";


const AllProducts = ({ books }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
