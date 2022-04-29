import React from 'react';

const ProductSlip = () => {
    return ( 
        <div className='w-1/5 ml-2 border-l min-h-screen px-2'>
            Items in your cart:
            <ul>
                <li className='border-b py-2'>
                    <div className='font-semibold'>1. Unga Maize Meal:</div>
                    <div className='text-gray-700 text-sm my-2'> 
                        <label>Quantity:</label>
                        <select className='w-12 mx-2 border' defaultValue={1}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <span className='text-md'>x <span className='font-semibold'>KES 123.00</span></span>
                    </div>
                    <div className='text-right'>
                        <label className='font-semibold text-sm'>Sub-total: </label>
                        <span className='text-orange-600 text-sm font-semibold'>KES 123.00</span>
                    </div>
                </li>
            </ul>
            <div className='mt-4 text-right'>
                <label className='font-bold'>Grand Total:</label>
                <span className='ml-2 font-semibold text-red-500'>
                    <span className='text-md mr-1'>KES</span> 
                    <span className='text-lg'>123.00</span>
                </span>
            </div>
            <div className='my-4 text-center'>
                <button
                className='px-4 py-2 mt-2 font-semibold cursor-pointer border rounded-md bg-blue-900 shadow text-white hover:bg-blue-600'
                >Proceed to Checkout</button>
            </div>
        </div>
     );
}
 
export default ProductSlip;