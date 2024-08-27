import React from "react";
import ProductView from "./ProductView";
import ShoppingDetail from "./ShoppingDetail";
import SellerInfo from "./SellerInfo";
import { RxDividerVertical } from "react-icons/rx";
import Moreformrestraurant from "./Moreformrestraurant";
import Reviews from "./Reviews";

const ProductDetail = () => {
  const productData = {
    title: 'Delicious Pizza',
    startreview: 4.5,
    review: 120,
    subtitle: 'Italian Cuisine',
    description: 'A delicious pizza with fresh ingredients and a crispy crust.',
    price: 499,
    status: 10,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fpizza3_1720595747511.jpg?alt=media&token=a85441fb-1acb-4e68-8474-66359f47deaa",
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fpizza_1720595995894.jpg?alt=media&token=fa97b045-95fb-4ac7-8942-f4141fa91e2c",
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fburger.jpg?alt=media&token=some-other-token",
    ],
  };
  return (
    <div className="flex flex-col w-[80%] mx-auto">
      <ProductView
        title={productData.title}
        startreview={productData.startreview}
        review={productData.review}
        subtitle={productData.subtitle}
        description={productData.description}
        price={productData.price}
        status={productData.status}
        images={productData.images}
      />
      <div className="flex">
        <div className="w-[70vw] shadow-sm shadow-primary-300 m-2">
          <Reviews/>
        </div>
        <div className="flex flex-col justify-end w-[30vw]">
          <ShoppingDetail />
          <SellerInfo />
          <Moreformrestraurant />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
