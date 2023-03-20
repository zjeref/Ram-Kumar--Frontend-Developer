import React, { useState, useContext } from 'react';
import { BiSearch } from 'react-icons/bi'
import { BsFilter } from 'react-icons/bs'
import { DataContext } from '../global/global-state';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [currentFilter,setCurrentFilter] = useState('');
    const { dispatch } = useContext(DataContext)


    const handleSearch = () => {
        // Perform search using searchTerm and selected filter
        console.log('Searching for:', searchTerm);
        if(!currentFilter) {
            setShowFilters(true)
            return
        }
        const payload = {
            currentFilter: searchTerm,
        }
        dispatch({ type: 'set_query', payload: payload })
    }

    const handleFilter = () => {
        setShowFilters(!showFilters);
    }

    const handleFilterSelect = (filter) => {
        console.log('Selected filter:', filter);
        setCurrentFilter(filter);
        setShowFilters(false);
    }
    return (
        <>
            <div className="flex items-center w-max text-xl space-x-3 relative border-2 border-black px-5 py-2 rounded-full my-4 px-4">
                <div>
                    <input type="text" placeholder='Search' className='focus:border-none focus:outline-none' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} onFocus={() => setShowFilters(true)} onBlur={() => setShowFilters(false)} />
                </div>
                <div className='cursor-pointer' onClick={handleSearch}>
                    <BiSearch />
                </div>
                <div className='cursor-pointer' onClick={handleFilter}>
                    <BsFilter />
                </div>
                {showFilters && (
                    <div className='absolute z-50 bg-white border border-gray-300 rounded-md mt-1 py-1 w-72 top-10'>
                        <div className='px-4 py-2 cursor-pointer hover:bg-gray-100' onClick={() => handleFilterSelect('name')}>
                            Filter by Name
                        </div>
                        <div className='px-4 py-2 cursor-pointer hover:bg-gray-100' onClick={() => handleFilterSelect('year_built')}>
                            Filter by Original Launch
                        </div>
                        <div className='px-4 py-2 cursor-pointer hover:bg-gray-100' onClick={() => handleFilterSelect('type')}>
                            Filter by Type
                        </div>
                    </div>
                )}
            </div>
            {currentFilter && <div className='text-xl text-slate-500' >Current Filter: {currentFilter}</div>}
            
        </>
    );
}

export default Search
