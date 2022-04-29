import React from 'react';
import { useSelector } from 'react-redux';
import { formatAmount } from '../../Helpers/helpers'
import { useDispatch } from 'react-redux';
import { changeItemQuantity, removeFromCart } from '../../features/cartSlice'

const ProductSlip = () => {
    const loadingStatus = useSelector( state => state.products.status);
    const products = useSelector( state => Object.values(state.cart.products) )
    const dispatch = useDispatch();
    const totalCost = products.reduce( (prev, curr) => {
        return prev + (curr.quantity * curr.price)
    }, 0);

    return (
        loadingStatus === 'loading' ? <div>Loading...</div> :
        (<div className='w-[320px] w ml-2 border-l min-h-screen px-2'>
        Items in your cart:
        <ul>
            {
                products.map( (product, index) => <li key={`cart-item-${product.id}`} className='border-b py-2'>
                <div className='font-semibold relative flex items-start'>
                    { index + 1 }. &nbsp; <span className='inline-block w-[220px] capitalize'>{ product.name }:</span>
                    <div className='absolute top-0 right-0'>
                        <a href='#rem' onClick={ e => {
                            e.preventDefault()
                            if( window.confirm(`Remove item from cart?`)){
                                dispatch(removeFromCart(product.id))
                            }
                        }} title='remove item' className='text-red-500 text-md font-bold hover:underline'>X</a>
                    </div>
                </div>
                <div className='text-gray-700 text-sm my-2'> 
                    <label>Quantity:</label>
                    <select 
                        name={`item-quantity-${product.id}`} 
                        className='w-12 mx-2 border' 
                        value={ product.quantity }
                        onChange={(e) => dispatch(changeItemQuantity({id: product.id, quantity: parseInt(e.target.value)})) }
                    >
                        { [...Array(product.stock)].map( (_, j) => <option key={`opt-qty-${product.id}-${j}`} value={ j + 1}>{j + 1}</option> ) }
                    </select>
                    <span className='text-md'>x <span className='font-semibold'>KES { formatAmount(product.price)}</span></span>
                </div>
                <div className='text-right'>
                    <label className='font-semibold text-sm'>Sub-total: </label>
                    <span className='text-orange-600 text-sm font-semibold'>KES { formatAmount( product.quantity * product.price)}</span>
                </div>
            </li>)
            }
        </ul>
        <div className='mt-4 text-right border-b pb-2'>
            <label className='font-bold'>Grand Total:</label>
            <span className='ml-2 font-semibold text-red-500'>
                <span className='text-md mr-1'>KES</span> 
                <span className='text-lg'>{ formatAmount(totalCost) }</span>
            </span>
        </div>
        <div className='my-1 text-center border-t'>
            <button
            className='px-4 py-2 mt-4 font-semibold cursor-pointer border rounded-md bg-blue-900 shadow text-white hover:bg-blue-600'
            >Proceed to Checkout</button>
        </div>
    </div>)
    )
}
 
export default ProductSlip;