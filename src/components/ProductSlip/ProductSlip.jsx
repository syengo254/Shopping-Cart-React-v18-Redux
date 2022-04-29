import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductSlipItem from './ProductSlipItem';
import SlipFooter from './SlipFooter';
import { emptyCart, selectCartProducts } from '../../features/cartSlice';

const ProductSlip = () => {
    const loadingStatus = useSelector( state => state.products.status);
    const products = useSelector( state => selectCartProducts(state) );
    const dispatch = useDispatch();
    
    const totalCost = products.reduce( (prev, curr) => {
        return prev + (curr.quantity * curr.price)
    }, 0);

    return (
        loadingStatus === 'loading' ? <div>Loading...</div> :
        (<div className='w-[320px] w ml-2 border-l min-h-screen px-2 relative mt-4'>
            <button
                className='absolute top-0 right-2 text-red-500 underline cursor-pointer text-sm'
                onClick={() => { if(!products.length) return; if (window.confirm(`Remove all items?`)) dispatch(emptyCart()) }}
            >Clear cart</button>
        <span className='font-semibold'>Items in your cart:</span>
        <ul>
            {
                !products.length && <li className='text-sm'><i>There are no items added. Click on a product to add it.</i></li>
            }
            {
                products.map( (product, index) => <ProductSlipItem key={`cart-item-${product.id}`} product={product} pos={ index + 1} />)
            }
        </ul>
        <SlipFooter totalCost={ totalCost } products={ products }/>
    </div>)
    )
}
 
export default ProductSlip;