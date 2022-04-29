import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, selectCartProducts } from '../../features/cartSlice';

const AddressForm = () => {
    const products = useSelector( state => selectCartProducts(state));
    const [message, setMessage] = useState();
    const [formData, setFormData] = useState({
        fullname: '',
        phone: '',
        area: '',
        street: ''
    });
    const dispatch = useDispatch();
    const handleInput = (e) => {
        setFormData( old => ({...old, [e.target.name]: e.target.value}))
    }

    async function addOrder(e){
        e.preventDefault();

        if(!window.confirm('Continue?')) return;

        const url = `http://localhost:9000/orders`;
        const data = {
            items: products.map( product => product.id ),
            address: formData,
        };
        setMessage('');

        try {
            const response = await axios.post(url, data, { headers: {
                'Content-Type': 'Application/json',
            }});

            const { success, msg } = response.data;

            if(success === 1){
                setMessage(`Your order has been received and will be delivered soon!` + msg);
                dispatch(emptyCart());
            }
            else{
                setMessage(msg);
            }
        } catch (error) {
            setMessage(error.message)
        }
    }

    return ( 
        <form className='w-3/6 block px-8 mx-auto'>
            <h3 className='font-bold text-lg my-4 text-center'>Delivery Address:</h3>
            <div className='my-2  flex justify-between'>
                <label htmlFor="fullname">Fullname:</label>
                <input type="text" name="fullname"
                    className='border px-2 py-1 rounded-md indent-1 w-[290px] outline-none hover:shadow'
                    value={formData.fullname} onChange={ handleInput } required="required"
                />
            </div>
            <div className='my-2  flex justify-between'>
                <label htmlFor="phone">Phone:</label>
                <input type="text" name="phone"
                className='border px-2 py-1 rounded-md indent-1 w-[290px] outline-none hover:shadow'
                value={formData.phone} onChange={ handleInput } required="required"
                 />
            </div>
            <div className='my-2  flex justify-between'>
                <label htmlFor="area">Area:</label>
                <input type="text" name="area"
                className='border px-2 py-1 rounded-md indent-1 w-[290px] outline-none hover:shadow'
                value={formData.area} onChange={ handleInput } required="required"
                 />
            </div>
            <div className='my-2  flex justify-between'>
                <label htmlFor="street">Street:</label>
                <input type="text" name="street"
                className='border px-2 py-1 rounded-md indent-1 w-[290px] outline-none hover:shadow'
                value={formData.street} onChange={ handleInput } required="required"
                 />
            </div>
            <div className='my-4 text-orange-400 text-center'>
                <p>
                    { message }
                </p>
            </div>
            <div className='text-center my-4'>
                <button
                    className='px-4 mx-2 py-1 cursor-pointer text-md font-bold border bg-blue-200 text-blue-700
                    rounded-lg hover:bg-gray-700 hover:text-white transition-colors'
                    type='submit'
                    onClick={ addOrder }
                >Place Order</button>
            </div>
        </form>
     );
}
 
export default AddressForm;