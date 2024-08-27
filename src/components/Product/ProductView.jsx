import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

const ProductView = ({ title, startreview, review, subtitle, description, price, status, images }) => {
  const [quantity, setQuantity] = useState(1);
  const [mainImg, setMainImg] = useState(images[0]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="h-full shadow-sm shadow-primary-300 rounded-md p-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 mb-4">
          <img
            className="h-96 w-full object-cover shadow-sm shadow-primary-400 p-2 rounded-lg"
            src={mainImg}
            alt="Main"
          />
          <div className="thumbnail-gallery flex space-x-4">
            {images.map((thumbnail, index) => (
              <div key={index}>
                <img
                  src={thumbnail}
                  className="h-20 object-cover rounded-lg pt-2 cursor-pointer shadow-sm shadow-primary-400 p-1"
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImg(thumbnail)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex items-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-semibold">{title}</h1>
              <div className="flex items-center gap-2">
                <h1 className="bg-primary-900 flex items-center gap-2 text-white px-2 rounded-md">
                  {startreview}
                  <FaStar />
                </h1>
                {review} Reviews <CiHeart />
              </div>
              <h2 className="text-md font-semibold">
                Restaurant |<span className="text-primary-500"> {subtitle}</span>
              </h2>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-red-500 text-xl font-semibold">₹{price}</h1>
              <p className="text-gray-400 text-sm">Quantity left: {status}</p>
            </div>
          </div>
          <div>
            <h1>Size</h1>
            <div className="flex items-center gap-3 pt-4">
              <button className="border-primary-500 px-3 py-1 bg-primary-500 text-white rounded-md">
                Regular
              </button>
              <button className="border-primary-500 px-3 py-1 bg-primary-500 text-white rounded-md">
                Large
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center my-4">
            <h1 className="text-sm font-semibold">QUANTITY</h1>
            <div className="flex justify-between items-center border border-gray-400 rounded-md w-24 px-3 py-1">
              <button
                className="hover:text-rose-700 text-2xl font-bold"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="mx-2 text-red-500 text-xl font-semibold">{quantity}</span>
              <button
                className="hover:text-rose-700 text-2xl font-bold"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          <div className='w-full flex gap-4'>
            <button className="  w-1/2 hover:bg-primary-900 text-primary-900 py-2 border-2 border-primary-600 rounded-md hover:text-white">
              Add to Cart
            </button>
            <button className=" w-1/2 bg-primary-500 text-white py-2 rounded-md  hover:bg-primary-900 rounded-md hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  title: PropTypes.string.isRequired,
  startreview: PropTypes.number.isRequired,
  review: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductView;