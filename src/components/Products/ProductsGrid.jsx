import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const ProductsGrid = () => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    const products = useSelector( state => state.products.products);
    const loadingStatus = useSelector( state => state.products.status);

    return ( 
        <div className='flex flex-row flex-wrap gap-3 my-4 pl-4 w-auto min-w-[600px]'>
            { loadingStatus === 'loading' && <div className='text-blue-600'>Loading products...</div> }
            { loadingStatus === 'error' && <div className='text-red-500'>An Error occurred loading products. Refresh page.</div> }
            {
                products.map( product => <ProductItem key={`product-${ product.id }`} product={product} />)
            }
        </div>
     );
}
 
export default ProductsGrid;