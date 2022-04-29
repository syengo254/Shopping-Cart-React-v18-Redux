import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, changeItemQuantity } from '../../features/cartSlice';
import { formatAmount, getUIRating } from '../../Helpers/helpers';

const ProductItem = ({product}) => {
    const dispatch = useDispatch();
    const added = useSelector( state => state.cart.products[product.id] !== undefined )

    const addItemToCart = (e, product) => {
        e.preventDefault();

        if(added) {
            dispatch(changeItemQuantity({id: product.id, quantity: "+1"}))
        }
        else{
            dispatch(addToCart(product));
        }
    }

    return ( 
        <div key={`product-${ product.id }`} className='w-[240px] border border-gray-300 text-gray-700 rounded-md overflow-hidden shadow-md'>
            <a href="#p" onClick={(e) => addItemToCart(e, product) }><img className='w-full object-fill h-[200px] overflow-hidden' src={ product.photo } alt={product.name + "-photo"} /></a>
            <div className="products-meta px-2 mb-4 mt-2">
                <div className="text-lg font-semibold capitalize">
                    <a href="#p" onClick={(e) => addItemToCart(e, product) }>{ product.name }</a>
                </div>
                <div><p>{product.meta}</p></div>
                { getUIRating(product.rating) }
                <div className='text-red-600 font-medium text-xl'><span className='text-sm'>KES</span> { formatAmount(product.price) }</div>
                {
                    product.stock > 0 ? <div className="text-blue-700 mt-4">In stock</div> : <div className="text-red-500 mt-4">Out of stock</div>
                }
                
            </div>
        </div> 
    );
}
 
export default ProductItem;