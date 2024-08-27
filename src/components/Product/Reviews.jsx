import ReviewCard from './ReviewCard';
import {FaStar } from 'react-icons/fa';

const reviewsData = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://img.freepik.com/premium-photo/foodie-girl-sitting-fruit-table-holding-spoon-looking-front-indian-pakistani-model_561639-1023.jpg?w=996',
    rating: 5,
    comment: 'The food was absolutely amazing! Highly recommend.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    rating: 4,
    comment: 'Great taste and good service. Will come back again.',
  },
  // Add more reviews as needed
];

// Calculate average rating
const totalReviews = reviewsData.length;
const averageRating = reviewsData.reduce((acc, review) => acc + review.rating, 0) / totalReviews;

const Reviews = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      
      <div className="flex items-center mb-4">
        {/* {[...Array(5)].map((_, i) => (
          i < Math.round(averageRating) ? <FaStar key={i} className="text-yellow-500" /> : <FaRegStar key={i} className="text-yellow-500" />
        ))} */}
        <span className='flex items-center bg-primary-500 px-2 rounded text-white gap-2'>{averageRating} <FaStar/> </span>
        <span className="ml-2">({totalReviews} reviews)</span>

      </div>
      {reviewsData.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;