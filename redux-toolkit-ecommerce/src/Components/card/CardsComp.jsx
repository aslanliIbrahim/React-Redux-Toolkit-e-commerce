import React from 'react'
import { useDispatch} from 'react-redux'
import { removeFromCard } from '../../Redux/cardSlice'
const CardsComp = ({card}) => {
    const dispatch = useDispatch();
  return (
    <div className='my-3'>
        <img className='w-[200px] h-[200px] object-cover' src={card.image} alt="" />
        <div>
            <p>{card.title}</p>
            <p className="">{card.description}</p>
        </div>
        <div onClick={()=>dispatch(removeFromCard(card?.id))} className='bg-red-800 cursor-pointer p-4 rounded-full text-white'>
            Urunu sil
        </div>
    </div>
  )
}
export default CardsComp