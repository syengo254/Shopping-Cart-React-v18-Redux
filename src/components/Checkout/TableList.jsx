import React from 'react';
import { useDispatch } from 'react-redux';
import { changeItemQuantity } from '../../features/cartSlice';
import { formatAmount } from '../../Helpers/helpers';

const TableList = ({products, setConfirmed}) => {
    const totalCost = products.reduce( (prev, curr) => {
        return prev + (curr.quantity * curr.price)
    }, 0);
    const dispatch = useDispatch();

    return ( 
        <React.Fragment>
            <table className='w-full text-md text-left text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope="col" className="px-6 py-3">#</th>
                            <th scope="col" className="px-6 py-3">Item</th>
                            <th scope="col" className="px-6 py-3">Item Cost</th>
                            <th scope="col" className="px-6 py-3">Quantity</th>
                            <th scope="col" className="px-6 py-3">Total Cost</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map( (product, index) => (<tr key={`slip-${product.id}`} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                <td className="px-6 py-4">{index + 1}.</td>
                                <td className="px-6 py-4 font-medium capitalize text-gray-900 dark:text-white whitespace-nowrap">{product.name}</td>
                                <td className="px-6 py-4">{formatAmount(product.price)}</td>
                                <td className="px-6 py-4">{product.quantity}</td>
                                <td className="px-6 py-4">{ formatAmount(product.price * product.quantity)}</td>
                                <td className="px-6 py-4">
                                    <button className='px-4 mx-2 py-1 cursor-pointer text-md font-bold border rounded-lg hover:bg-gray-400 hover:text-white transition-colors'
                                    onClick={() => dispatch(changeItemQuantity({id: product.id, quantity: product.quantity + 1}))}
                                    disabled={ product.quantity >= product.stock }
                                    >+</button>
                                    <button className='px-4 mx-2 py-1 cursor-pointer text-md font-bold border rounded-lg hover:bg-gray-400 hover:text-white transition-colors'
                                    onClick={() => dispatch(changeItemQuantity({id: product.id, quantity: product.quantity - 1}))}
                                    disabled={product.quantity < 1}
                                    >-</button>
                                </td>
                            </tr>))
                        }
                    </tbody>
                </table>
                <div className='text-center my-2'>
                    <label>Total Cost: </label>
                    <span className='font-semibold text-orange-600'>KES { formatAmount(totalCost) }</span>
                    <div className='m-4'>
                        <button 
                            className='px-4 mx-2 py-1 cursor-pointer text-md font-bold border 
                            rounded-lg hover:bg-gray-400 hover:text-gray-50 transition-colors'
                            onClick={() => {
                                if(products.length) setConfirmed(true);
                            }}
                        >Confirm</button>
                    </div>
                </div>
        </React.Fragment>
     );
}
 
export default TableList;