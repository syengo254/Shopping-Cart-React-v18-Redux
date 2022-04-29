import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddressForm from '../components/Checkout/AddressForm';
import TableList from '../components/Checkout/TableList';
import { selectCartProducts } from '../features/cartSlice';

const CheckoutPage = () => {
    const products = useSelector( state => selectCartProducts(state));
    const [ confirmed, setConfirmed ] = useState(false);
    const navigate = useNavigate()

    useEffect( () => {
        if(products.length < 1){
            navigate('/')
        }
    }, []);

    return ( 
        <React.Fragment>
            <div className='mx-auto w-[900px] relative overflow-x-auto shadow-md sm:rounded-lg mt-8 min-h-[100px]'>
                {
                    !confirmed ? <TableList products={products} setConfirmed={ setConfirmed } /> : <AddressForm />
                }
            </div>
        </React.Fragment>
     );
}
 
export default CheckoutPage;