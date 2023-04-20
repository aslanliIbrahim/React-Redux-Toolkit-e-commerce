import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../../Redux/cardSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity < 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };

  const addBasket = () => {
    dispatch(
      addToCard({
        id: productDetail.id,
        title: productDetail?.title,
        image: productDetail?.image,
        quantity: productDetail?.quantity,
        price: productDetail?.price,
      })
    );
  };

  return (
    <div className="flex">
      <img
        className="w[500px] h[300px] object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2 ">{productDetail?.description}</div>
        <div>Rating : {productDetail?.rating?.rate}</div>
        <div>Count : {productDetail?.rating?.count}</div>
        <div>Count : {productDetail?.price}</div>
      </div>
      <div className="flex items-center gap-5 my-4">
        <div onClick={decrement} className="text-4xl cursor-pointer">
          -
        </div>
        <input
          className="w-20 text-center text-4xl font-bold"
          type="text"
          value={quantity}
        />
        <div onClick={increment} className="text-4xl cursor-pointer">
          +
        </div>
      </div>
      <div
        onClick={addBasket}
        className="border w-[200px] flex items-center justify-center rounded-lg text-2xl bg-gray-200 cursor-pointer p-4"
      >
        Add to Basket
      </div>
    </div>
  );
};

export default DetailComp;
