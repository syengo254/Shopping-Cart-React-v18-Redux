import axios from 'axios';
import React, { useState } from 'react';
import { formatAmount } from '../../Helpers/helpers';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../features/cartSlice';

const SlipFooter = ({totalCost, products}) => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();


    const checkOut = async () => {
        if(products.length){
            const url = `http://localhost:9000/orders`;
            const data = {
                user: 'Customer One',
                items: products.map( product => product.id ),
            };
            const response = await axios.post(url, data, { headers: {
                'Content-Type': 'Application/json',
            }});

            const { success, msg } = response.data;

            if(success === 1){
                setMessage(`Your order has been received and will be delivered soon!` + msg);
                dispatch(emptyCart());
            }
            else{
                setMessage(message);
            }
        }
    }

    return ( 
        <React.Fragment>
            <div className='mt-4 text-right border-b pb-2'>
            <label className='font-bold'>Grand Total:</label>
            <span className='ml-2 font-semibold text-red-500'>
                <span className='text-md mr-1'>KES</span> 
                <span className='text-lg'>{ formatAmount(totalCost) }</span>
            </span>
            </div>
            <div className='my-1 text-center border-t'>
                { message.length ? <p>{ message }</p> : null }
                <button
                    className='px-4 py-2 mt-4 font-semibold 
                        cursor-pointer border rounded-md bg-blue-900 
                        shadow text-white hover:bg-blue-600'
                    onClick={ checkOut }
                >
                    Proceed to Checkout
                </button>
            </div>
        </React.Fragment>
     );
}
 
export default SlipFooter;