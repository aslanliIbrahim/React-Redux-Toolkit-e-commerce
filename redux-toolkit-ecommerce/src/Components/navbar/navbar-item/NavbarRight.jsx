import React, {useEffect} from "react";
import { BsSearch } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BsBasket3Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getCardTotal } from "../../../Redux/cardSlice";
import { useNavigate } from "react-router-dom";
const NavbarRight = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const {cards, itemCount} = useSelector(state => state.cards);


  console.log(cards, "hello cards");

  useEffect(() => {
      dispatch(getCardTotal());
  }, [dispatch])
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-gray-200"
        />
        <BsSearch size={28} className="" />
      </div>
      <AiFillHeart size={28} />
      <div onClick={()=>Navigate("card")} className="relative cursor-pointer">
        <div className="absolute-top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 text-center flex items-center justify-center">
          {cards.length}
        </div>
        <BsBasket3Fill size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
