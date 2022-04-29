import React from 'react';

const Header = () => {
    const itemCount = 0;
    
    return ( 
        <header className='w-full bg-blue-900 text-white text-md h-20'>
            <nav className='flex flex-row items-center justify-end px-10 w-full h-full'>
                <a className='mx-5 hover:underline' href="#home">Home</a>
                <a className='mx-5 hover:underline' href="#signin">Sign In</a>
                <a className='mx-5 hover:underline' href="#cart">Cart ({ itemCount })</a>
            </nav>
        </header>
     );
}
 
export default Header;