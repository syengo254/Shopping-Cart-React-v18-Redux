import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {

    return ( 
        <header className='w-full bg-blue-900 text-white text-md h-20 flex flex-row justify-between items-center px-10'>
            <h1 className='font-bold text-2xl'>My Shopping App</h1>
            <nav className='flex flex-row items-center justify-end h-full'>
                <a className='mx-4 hover:underline' href="#cart">Shopping Cart <FontAwesomeIcon icon={ faShoppingCart} /> (0)</a>
            </nav>
        </header>
     );
}
 
export default Header;