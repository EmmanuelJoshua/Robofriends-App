import React from 'react'
import './SearchBox.css'

const SearchBox = ({ searchChange }) => {
    return (
        <div className='app-search'>
            <input
                placeholder='Search robots..'
                type='search'
                className='search-input'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox