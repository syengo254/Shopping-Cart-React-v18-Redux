import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart( state, action){
            if(action.payload.stock < 1) return;

            const product = {...action.payload, quantity: 1 };

            state.products[product.id] =  product;
        },
        removeFromCart(state, action){
            delete state.products[action.payload];
        },
        changeItemQuantity(state, action){
            const {stock, quantity} = state.products[action.payload.id];

            if(action.payload.quantity === "+1"){
                if(quantity >= stock) return;
                state.products[action.payload.id].quantity += 1;
            }
            else if(action.payload.quantity === 0){
                delete state.products[action.payload.id];
            }
            else{
                state.products[action.payload.id].quantity = action.payload.quantity;
            }
        },
        emptyCart(state, action){
            state.products = initialState.products
        }
    }
});

export const { addToCart, removeFromCart, changeItemQuantity, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartProducts = state => Object.values(state.cart.products)