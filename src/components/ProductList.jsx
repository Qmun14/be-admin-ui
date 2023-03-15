import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "../api/products";
import { IoPencilOutline, IoTrash } from "react-icons/io5";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsApi();
    }, []);

    const getProductsApi = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };

    const deleteProductApi = async (productId) => {
        await deleteProduct(productId);
        getProductsApi();
    };

    return (
        <div>
            <div className=" mx-5 font-roboto">
                <h1 className="font-bold text-3xl">Products</h1>
                <h2 className="text-xl mb-3">List of Products</h2>
                <Link to={"/products/add"} className="bg-CDS_1 p-2 rounded-md font-bold shadow-lg">
                    Add New
                </Link>
                <table className="table-auto w-full mx-auto border-slate-800 border-collapse mt-4 shadow-md">
                    <thead>
                        <tr className="bg-CDS_N-3 text-gray-600 text-base leading-normal">
                            <th className="py-3 px-6 text-center border-[2px] border-CDS_1 bg-white">
                                No
                            </th>
                            <th className="py-3 px-6 text-center border-[2px] border-CDS_1 bg-white">
                                Name
                            </th>
                            <th className="py-3 px-6 text-center border-[2px] border-CDS_1 bg-white">
                                price
                            </th>
                            <th className="py-3 px-6 text-center border-[2px] border-CDS_1 bg-white">
                                Created By
                            </th>
                            <th className="py-3 px-6 text-center border-[2px] border-CDS_1 bg-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className="bg-CDS_2 border">
                                <td className="py-3 px-6 text-center">
                                    {index + 1}
                                </td>
                                <td className="py-3 px-6 text-center">
                                    {product.name}
                                </td>
                                <td className="py-3 px-6 text-right">
                                    {product.price}
                                </td>
                                <td className="py-3 px-6 text-center">
                                    {product.user.name}
                                </td>
                                <td className="py-3 px-6">
                                    <div className="flex flex-row justify-evenly">
                                        <Link
                                            to={`/products/edit/${product.uuid}`}
                                            className="bg-blue-300 p-2 rounded-md"
                                            title="Edit ?"
                                        >
                                            <IoPencilOutline />
                                        </Link>
                                        <button
                                            onClick={() =>
                                                deleteProductApi(product.uuid)
                                            }
                                            className="bg-red-500 p-2 rounded-md"
                                            title="wanna delete ?"
                                        >
                                            <IoTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;
