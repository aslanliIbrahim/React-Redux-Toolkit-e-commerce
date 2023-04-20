import React, { useState } from 'react'
import SliderComp from '../Components/home/SliderComp'
import Sorting from '../Components/home/Sorting'
import Category from '../Components/home/Category'
import Products from '../Components/home/Products'

const Home = () => {

  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('')

  return (
    <div>
      <SliderComp/>
      <Sorting setSort={setSort}/>
      <div className="flex">
        <Category setCategory={setCategory}/>
        <Products category={category} sort={sort}/>
      </div>
    </div>
  )
}

export default Home