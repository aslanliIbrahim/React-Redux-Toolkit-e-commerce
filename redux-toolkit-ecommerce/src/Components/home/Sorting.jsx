import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
        <select onChange={e => setSort(e.target.value)} className='bg-white py-3 px-5 outline-none' name="" id="">
            <option value="" disabled>Select</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting