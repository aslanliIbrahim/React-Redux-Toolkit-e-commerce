import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Utils/status";

const initialState = {
    products:[],
    productsStatus : STATUS.IDLE,
    productDetail: [],
    productDetailStatus : STATUS.IDLE
}

export const getSearchProducts = createAsyncThunk("searchproducts", async(keyword)=>{
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = response.json();
    return data;
})

const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{},
    extraReducers:(builder)=> { 
        builder
       
        .addCase(getSearchProducts.rejected, (state, action)=> {
            state.productsStatus = STATUS.FAIL
        })
    }
})

export default searchSlice.reducer