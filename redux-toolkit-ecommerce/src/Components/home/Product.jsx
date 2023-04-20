import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({ product}) => {

    const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`products/${product?.id}`)}  className='w-[300px] p-2 m-2 border rounded-md relative'>
        <div className='text-3xl font-bold rounded-md absolute p-2 m-1 top-0 right-0 bg-black text-white'>
            {product?.price}
            <span className='text-sm'>Manat</span>
        </div>
        <img className='w-[200px] object-contain h-[200px] m-auto' src={product?.image} alt="" />
        <div className='text-center px-3 m-3'>
        {product?.title}
        </div>
    </div>
  )
}

export default Product