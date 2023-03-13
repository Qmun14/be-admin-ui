import React from 'react'

const ProductList = () => {
    return (
        <div>
            <div className=' mx-5'>
                <h1 className='font-bold text-3xl'>Products</h1>
                <h2 className='text-xl mb-3'>List of Products</h2>
                <table className="table-auto w-full mx-auto border-slate-800 border-collapse">
                    <thead>
                        <tr className="bg-CDS_N-3 text-gray-600 text-base leading-normal">
                            <th className='py-3 px-6 text-center border-[2px] border-CDS_1 bg-white'>No</th>
                            <th className='py-3 px-6 text-center border-[2px] border-CDS_1 bg-white'>Name</th>
                            <th className='py-3 px-6 text-center border-[2px] border-CDS_1 bg-white'>price</th>
                            <th className='py-3 px-6 text-center border-[2px] border-CDS_1 bg-white'>Created By</th>
                            <th className='py-3 px-6 text-center border-[2px] border-CDS_1 bg-white'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList;