import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductSlipItem from './ProductSlipItem';
import SlipFooter from './SlipFooter';
import { emptyCart } from '../../features/cartSlice';

const ProductSlip = () => {
    const loadingStatus = useSelector( state => state.products.status);
    const products = useSelector( state => Object.values(state.cart.products) );
    const dispatch = useDispatch();
    
    const totalCost = products.reduce( (prev, curr) => {
        return prev + (curr.quantity * curr.price)
    }, 0);

    return (
        loadingStatus === 'loading' ? <div>Loading...</div> :
        (<div className='w-[320px] w ml-2 border-l min-h-screen px-2 relative mt-4'>
            <button
                className='absolute top-0 right-2 text-red-500 underline cursor-pointer text-sm'
                onClick={() => { if (window.confirm(`Remove all items?`)) dispatch(emptyCart()) }}
            >clear cart</button>
        <span className='italic'>Items in your cart:</span>
        <ul>
            {
                products.map( (product, index) => <ProductSlipItem key={`cart-item-${product.id}`} product={product} pos={ index + 1} />)
            }
        </ul>
        <SlipFooter totalCost={ totalCost } products={ products }/>
    </div>)
    )
}
 
export default ProductSlip;