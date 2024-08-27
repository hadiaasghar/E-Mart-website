import { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';

const restaurantData = [
  {
    id: 1,
    name: 'Nigiri Salmone',
    image: 'https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F1-Salmon-Nigiri-1-1-of-1_1720533870156.jpg?alt=media&token=2bb95501-ecbd-4506-b9cb-75d3f297bca7',
    rating: 3.2,
    reviews: 0,
    price: '€55',
  },
  {
    id: 2,
    name: 'Sushi Deluxe',
    image: 'https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fchicken%20Quesadillas_1720682540508.jpg?alt=media&token=93298c8f-ba1d-4f7c-b9c9-8818c3299aba', // Replace with a valid URL
    rating: 4.5,
    reviews: 120,
    price: '€75',
  },
  {
    id: 3,
    name: 'Sushi Deluxe',
    image: 'https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fchicken%20Quesadillas_1720682540508.jpg?alt=media&token=93298c8f-ba1d-4f7c-b9c9-8818c3299aba', // Replace with a valid URL
    rating: 4.5,
    reviews: 120,
    price: '€75',
  },
  {
    id: 4,
    name: 'Sushi Deluxe',
    image: 'https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fchicken%20Quesadillas_1720682540508.jpg?alt=media&token=93298c8f-ba1d-4f7c-b9c9-8818c3299aba', // Replace with a valid URL
    rating: 4.5,
    reviews: 120,
    price: '€75',
  },
];

const Restaurantcard = () => {
  const [visibleCards, setVisibleCards] = useState(3);

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };
  return (
    <div>
    <div className="flex flex-col gap-4">
      {restaurantData.slice(0, visibleCards).map((item) => (
        <div key={item.id} className="flex flex-row justify-center items-center shadow-primary-200 shadow-sm rounded-md">
          <div className="shadow-lg w-24 h-24 flex justify-center items-center">
            <img src={item.image} alt={item.name} className="object-cover" />
          </div>
          <div>
            <div className="flex flex-col p-5 gap-2">
              <div>
                <p>{item.name}</p>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex flex-row items-center justify-center bg-[#28A745] rounded-lg px-1 py-1 text-white gap-2">
                  <p>{item.rating}</p>
                  <FaRegStar />
                </div>
                <div>
                  <p>({item.reviews})</p>
                </div>
              </div>
              <div>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    {visibleCards < restaurantData.length && (
      <button onClick={showMoreCards} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Show More
      </button>
    )}
  </div>
  );
};

export default Restaurantcard;
