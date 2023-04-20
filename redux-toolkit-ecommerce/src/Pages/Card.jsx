import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCardTotal } from "../Redux/cardSlice";
import CardsComp from "../Components/card/CardsComp";

const Card = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { cards, totalAmount, itemCount } = useSelector((state) => state.cards);

  console.log(cards, "hello cards");
  console.log(totalAmount, "salam");

  useEffect(() => {
    dispatch(getCardTotal());
  }, [dispatch]);
  return (
    <div>
      {cards?.length > 0 ? (
        <div>
          {cards.map((card, i) => (
            <CardsComp card={card} key={i} />
          ))}

          <div>
            {totalAmount} manat
          </div>
        </div>
      ) : (
        <div>Your Card is free</div>
      )}
    </div>
  );
};

export default Card;
