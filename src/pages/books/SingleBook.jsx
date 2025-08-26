import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";
import { getimgurl } from "../../utils/getimgurl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const SingleBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // fetch all books (from RTK Query)
  const { data: books = [] } = useFetchAllBooksQuery();

  // find the book by ID
  const book = books.find((b) => b._id === id);

  if (!book) {
    return (
      <div className="p-10 text-center text-xl">
        ❌ Book not found or still loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Book Image */}
        <div>
          <img
            src={getimgurl(book.coverImage)}
            alt={book.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Book Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Author:</span> {book.author || "Unknown"}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {book.category || "General"}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Published:</span>{" "}
            {book.publishedDate ? new Date(book.publishedDate).toDateString() : "N/A"}
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">{book.description}</p>

          <p className="mt-6 text-2xl font-semibold">
            ${book.newPrice}{" "}
            <span className="line-through text-gray-500 text-lg">
              ${book.oldPrice}
            </span>
          </p>

          <button
            onClick={() => dispatch(addToCart(book))}
            className="btn-primary px-6 py-2 mt-6"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
