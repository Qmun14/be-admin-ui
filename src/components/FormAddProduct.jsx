import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../api/products';

const FormAddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        const payload = {
            name: name, price: price
        }
        try {
            await addProduct(payload);
            navigate('/products');
        } catch (err) {
            if (err.response) {
                setMessage(err.response.data.message);
            }
        }
    }


    return (
        <div className="bg-CDS_N-2 w-full h-screen flex items-center">
            <div className="container flex max-w-full items-center h-full justify-center">
                <div className="bg-CDS_2  py-5 px-3 rounded-xl shadow-lg font-roboto w-3/4 flex flex-col items-center justify-center " >
                    <h1 className='font-bold text-3xl'>Product</h1>
                    <h2 className='text-xl mb-1'>Add New Product</h2>
                    <div className="flex-col relative flex  w-full">
                        <form onSubmit={saveProduct} className="mb-8 mt-3  mx-8">
                            <p className="text-center text-red-400 text-sm mt-1 font-semibold mb-5">{message}</p>
                            <div className="flex-1 my-3 justify-start font-semibold">
                                <label htmlFor="name">
                                    Name
                                </label>
                            </div>
                            <div className="mt-3 mb-5">
                                <input type="text" id="name" placeholder="Product name" className="h-12 text-lg w-full   px-4 rounded-md outline-blue-500" autoFocus
                                    value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="flex-1 my-3 justify-start font-semibold">
                                <label htmlFor="price">
                                    Price
                                </label>
                            </div>
                            <div className="mt-3 mb-5">
                                <input type="number" id="price" placeholder="0" className="h-12 text-lg w-full   px-4 rounded-md outline-blue-500"
                                    value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div className='flex justify-center'>
                                <button className="bg-green-400 py-3 px-24 mt-5 w-1/2 rounded-md justify-items-center font-bold hover:bg-opacity-70" type='submit'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddProduct;