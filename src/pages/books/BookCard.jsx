import React from "react";
import { Link } from "react-router-dom";
import { getimgurl } from "../../utils/getimgurl";

import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Book Image */}
      <Link to={`/books/${book._id}`} className="block">
        <img
          src={getimgurl(book?.coverImage)}
          alt={book?.title}
          className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
        />
      </Link>

      {/* Book Info */}
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/books/${book._id}`}>
          <h3 className="text-lg font-semibold hover:text-blue-600 mb-2 line-clamp-1">
            {book?.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {book?.description}
        </p>

        <p className="font-medium mb-3">
          ${book?.newPrice}{" "}
          <span className="line-through font-normal ml-2 text-gray-500">
            ${book?.oldPrice}
          </span>
        </p>

        <button
          onClick={() => handleAddToCart(book)}
          className="btn-primary w-full py-2 flex items-center justify-center gap-2"
        >
          <FiShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
