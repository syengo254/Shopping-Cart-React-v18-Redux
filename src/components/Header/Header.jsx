import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartProducts } from '../../features/cartSlice';

const Header = () => {
    const cartCount = useSelector(state => {
        const products = selectCartProducts(state);
        
        const totalItems = products.reduce( (v, curr) => {
            //console.log('val: ', v, " curr: ", curr);
            return v + curr.quantity
        }, 0)

        return totalItems
    });

    return ( 
        <header className='w-full bg-blue-900 text-white text-md h-20 flex flex-row justify-between items-center px-10'>
            <h1 className='font-bold text-2xl'>My Shopping App</h1>
            <nav className='flex flex-row items-center justify-end h-full'>
                <a className='mx-4 hover:underline' href="#cart">Shopping Cart <FontAwesomeIcon icon={ faShoppingCart} /> <span className='text-orange-400 font-bold text-lg'>({ cartCount })</span></a>
            </nav>
        </header>
     );
}
 
export default Header;