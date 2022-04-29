import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <header className='w-full bg-blue-900 text-white text-md h-20 shadow-md flex flex-row justify-between items-center px-10'>
            <h1 className='font-bold text-2xl'>My Shopping App</h1>
            <nav className='flex flex-row items-center justify-end h-full'>
                <Link to='/' className='mx-4 hover:underline'>Home</Link>
                <a className='mx-4' href="#cart" onClick={ e => e.preventDefault()}><FontAwesomeIcon icon={ faShoppingCart} /> <span className='text-orange-400 font-bold text-lg'>({ cartCount })</span></a>
                <Link to='/history' className='mx-4 hover:underline'>Shopping History</Link>
                <a href='#user' className='mx-4 hover:underline'><FontAwesomeIcon icon={faUser} /></a>
            </nav>
        </header>
     );
}
 
export default Header;