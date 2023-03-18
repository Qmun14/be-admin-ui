import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { getCustomers } from '../api/customers';


const CustomersList = () => {
    const [customers, setCustomers] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(0);
    const [pages, setPages] = useState(0);
    const [rows, setRows] = useState(0);
    const [keyword, setKeyword] = useState('');
    const [query, setQuery] = useState('');
    const [message, setMessage] = useState('')

    useEffect(() => {
        const searchCustomersAPI = async () => {
            const response = await getCustomers({ keyword, page, limit });
            setCustomers(response.data.result);
            setPage(response.data.page);
            setPages(response.data.totalPage);
            setRows(response.data.totalRows);
        }
        searchCustomersAPI();
    }, [page, keyword, limit]);

    const pageChangeHandler = ({ selected }) => {
        setPage(selected);
        if (selected === 9) {
            setMessage('Jika tidak menemukan data yang anda cari, silahkan masukkan kata kunci spesifik!');
        } else {
            setMessage('');
        }
    }

    const searchData = (e) => {
        e.preventDefault();
        setPage(0);
        setKeyword(query);
    }

    return (
        <div className="fixed w-full mt-5 mx-5">
            <div className="w-3/4 flex flex-col justify-center items-center">
                <form onSubmit={searchData} className="w-1/2 shadow-md">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="cari..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
                <table className="table-auto w-full mx-auto border-slate-800 border-collapse mt-4 shadow-md">
                    <thead>
                        <tr className="bg-CDS_N-3 text-gray-600 text-base leading-normal">
                            <th className="py-2 px-6 text-center border-[2px] border-CDS_1 bg-white w-8">
                                ID
                            </th>
                            <th className="py-2 px-6 text-center border-[2px] border-CDS_1 bg-white">
                                Name
                            </th>
                            <th className="py-2 px-6 text-center border-[2px] border-CDS_1 bg-white">
                                Email
                            </th>
                            <th className="py-2 px-6 text-center border-[2px] border-CDS_1 bg-white">
                                Gender
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="bg-CDS_2 border">
                                <td className="py-2 px-6 text-left">
                                    {customer.id}
                                </td>
                                <td className="py-2 px-6 text-left">
                                    {customer.name}
                                </td>
                                <td className="py-2 px-6 text-left">
                                    {customer.email}
                                </td>
                                <td className="py-2 px-6 text-left">
                                    {customer.gender}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-row justify-start mt-2">
                <p>
                    Total Rows: {rows.toLocaleString()} Page:{" "}
                    {rows ? (page + 1).toLocaleString() : 0} of {pages.toLocaleString()}
                </p>
            </div>
            <p className='flex flex-row justify-center w-3/4 mx-1 text-red-600'>{message}</p>
            <div className="flex flex-row justify-center w-3/4 mt-1">
                <nav className="flex flex-row justify-center w-full" key={rows}>
                    <ReactPaginate
                        previousLabel={"< Prev"}
                        nextLabel={"Next >"}
                        pageCount={Math.min(10, pages)}
                        onPageChange={pageChangeHandler}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        containerClassName={'flex justify-center items-center border rounded-md border-gray-300 p-2'}
                        activeLinkClassName={'text-white bg-blue-500 rounded-md px-3 py-2'}
                        pageClassName={'mx-2'}
                        pageLinkClassName={'text-gray-600 hover:text-blue-500 rounded-md px-3 py-2'}
                        previousClassName={'mx-2'}
                        previousLinkClassName={'text-gray-600 hover:text-blue-500 rounded-md px-3 py-2'}
                        nextClassName={'mx-2'}
                        nextLinkClassName={'text-gray-600 hover:text-blue-500 rounded-md px-3 py-2'}
                        disabledClassName={'text-gray-400 cursor-not-allowed mx-2'}
                    />
                </nav>
            </div>
        </div>
    );
}

export default CustomersList;