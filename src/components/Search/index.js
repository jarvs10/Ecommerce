import React from 'react'
import { useState } from 'react';
import { SearchWrapper, SearchInput, SearchClearWrapper } from './styles';
import { IoClose } from 'react-icons/io5';

const Search = ({ searchTerm = ''}) => {

    const [ searchText, setSearchText ] = useState(searchTerm);

    function handlerChangeText(e){
        setSearchText(e.target.value);
    }

    function clearSearchHandler(){
        setSearchText('');
    }

    return (
        <SearchWrapper>
            <SearchInput 
                value = {searchText}
                onChange={handlerChangeText}
                type='text'
                placeholder='Search...'
            />

            <SearchClearWrapper 
                onClick={clearSearchHandler} 
                hasText={searchText !== ''}
            >
                <IoClose/>
            </SearchClearWrapper> 
        </SearchWrapper>
  )
}

export default Search