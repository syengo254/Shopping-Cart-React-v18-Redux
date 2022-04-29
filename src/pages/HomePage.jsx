import React from 'react';
import ProductsGrid from '../components/Products/ProductsGrid';
import ProductSlip from '../components/ProductSlip/ProductSlip';

const HomePage = () => {
    return ( 
        <React.Fragment>
            <main className='flex md:flex-row mx-4'>
                <ProductsGrid />
                <ProductSlip />
            </main>
        </React.Fragment>
     );
}
 
export default HomePage;