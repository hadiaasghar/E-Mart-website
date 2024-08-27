import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white shadow-sm shadow-primary-400 rounded-lg p-6 mb-4">
      <div className="flex items-center pb-4 border-b border-primary-500">
        <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{review.name}</h3>
          <div className="flex items-center">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;