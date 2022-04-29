import React, { useEffect, useState } from 'react';
import { getProducts } from '../../apis/products';
import ProductItem from './ProductItem';

const ProductsGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then( res => setProducts(res.data))
                .finally(() => { setLoading(false)});
    }, []);

    return ( 
        <div className='flex flex-row flex-wrap gap-3 my-4 pl-4 w-auto'>
            { loading && <div>Loading products...</div> }
            {
                products.map( product => <ProductItem key={`product-${ product.id }`} product={product} />)
            }
        </div>
     );
}
 
export default ProductsGrid;