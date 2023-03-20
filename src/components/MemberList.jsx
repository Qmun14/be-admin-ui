import React, { useEffect, useState } from 'react';
import { getMembers } from '../api/members';
import InfiniteScroll from 'react-infinite-scroll-component';

const MemberList = () => {
    const [users, setUsers] = useState([]);
    const [lastId, setLastId] = useState(0);
    const [tempId, setTempId] = useState(0)
    const [limit, setLimit] = useState(20);
    const [keyword, setKeyword] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const [query, setQuery] = useState('');

    useEffect(() => {
        getMembersApi()
    }, [lastId, keyword]);

    const getMembersApi = async () => {
        const response = await getMembers({ keyword, lastId, limit });
        const newUsers = response.data.result;
        setUsers([...users, ...newUsers]);
        setTempId(response.data.lastId);
        setHasMore(response.data.hasMore);
    }

    const fetchMore = () => {
        setLastId(tempId);
    }

    const searchDataApi = (e) => {
        e.preventDefault();
        setLastId(0);
        setUsers([]);
        setKeyword(query);
    }

    return (
        <div className="container flex flex-col ml-3 mt-8 overflow-y-visible">
            <div className="container flex flex-row justify-center">
                <div className="flex flex-row w-full justify-center">
                    <form
                        action=""
                        className="flex flex-row w-1/2 h-14 font-roboto"
                        onSubmit={searchDataApi}
                    >
                        <div className="w-full text-xl">
                            <input
                                type="text"
                                placeholder="cari..."
                                className="w-full h-full px-3 rounded-l-md outline-CDS_1"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                        <div className="bg-CDS_1 px-3 rounded-r-md font-bold text-xl">
                            <button className="h-full w-full m-0">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-8">
                <InfiniteScroll
                    dataLength={users.length}
                    next={fetchMore}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    className={"h-screen"}
                >
                    <table className="table-auto w-3/4 mx-auto border-slate-800 border-collapse mt-4 shadow-md">
                        <thead>
                            <tr className="bg-CDS_N-3 text-gray-600 text-base leading-normal">
                                <th className="py-2 px-6 text-center border-[2px] border-CDS_1 bg-white w-8">
                                    No
                                </th>
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
                            {users.map((user, index) => (
                                <tr key={index} className="bg-CDS_2 border">
                                    <td className="py-2 pl-2 pr-6  text-left">
                                        {index + 1}
                                    </td>
                                    <td className="py-2 pl-1 pr-6  text-left">
                                        {user.id}
                                    </td>
                                    <td className="py-2 pl-1 pr-6  text-left">
                                        {user.name}
                                    </td>
                                    <td className="py-2 pl-1 pr-6  text-left">
                                        {user.email}
                                    </td>
                                    <td className="py-2 pl-1 pr-6  text-left">
                                        {user.gender}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default MemberList;