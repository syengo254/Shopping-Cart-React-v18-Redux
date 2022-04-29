import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../apis/products";

const initialState = {
    products: [],
    status: 'idle',
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await getProducts();
    return response.data;
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts(state, action){
            state.products = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = 'idle';
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'error';
        });
    }
});

export const { addProducts, changeStatus } = productsSlice.actions;

export default productsSlice.reducer;

