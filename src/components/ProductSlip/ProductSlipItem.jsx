import React from 'react';
import { changeItemQuantity, removeFromCart } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
import { formatAmount } from '../../Helpers/helpers'

const ProductSlipItem = ({product, pos}) => {
    const dispatch = useDispatch();
    return ( 
        <li className='border-b py-2'>
            <div className='font-semibold relative flex items-start'>
                { pos }. &nbsp; <span className='inline-block w-[220px] capitalize italic'>{ product.name }:</span>
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
        </li>
     );
}
 
export default ProductSlipItem;