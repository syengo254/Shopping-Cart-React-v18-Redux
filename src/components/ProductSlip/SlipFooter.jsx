import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAmount } from '../../Helpers/helpers';

const SlipFooter = ({totalCost, products}) => {
    const navigate = useNavigate();

    const checkOut = () => {
        if(products.length){
            navigate('/checkout')
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