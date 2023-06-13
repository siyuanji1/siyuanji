import React, {useEffect, useState} from 'react';
import SearchFilter from './searchindex/search.js';
import PetList from './searchindex/cards.js';
import HeaderBackground from './headerFooter/Header-background';
import {findAllPets, searchPets} from "../services/search-pet";

let KEY_WORD = '';
export default function SearchPage() {
  // Component state
  const [pets, setPets] = useState([]);

  // Fetch function
  useEffect(() => {
    findAllPets()
      .then(setPets)
  }, []);

  // Event handler for dog search
  const handleSearch = async (keyword) => {
    KEY_WORD = keyword;
    searchPets(keyword)
      .then(pets => {
        setPets(pets);
      })
  }

  // Event handler for dog filter
  const handleFilter = async (condition) => {
    searchPets(
      KEY_WORD,
      condition.age || '',
      condition.gender || '',
      condition.size || '',
      condition.color || '',
      condition.distance || ''
    ).then(pets => {
      setPets(pets)
    })
  }

  const bgData = {
    class: 'bg-image',
    title: 'Find Your Furever Pet Friend!',
    subTitle: 'Discover the perfect pet waiting for a loving home.'
  }

  return (
    <div>
      <HeaderBackground
        class={bgData.class}
        title={bgData.title}
        subTitle={bgData.subTitle}
      />
      <SearchFilter
        onFilter={handleFilter}
        onSearch={handleSearch}/>
      {pets.length > 0 && (
        <PetList pets={pets} />
      )}
      {pets.length === 0 && (
        <div className={'empty'}>
          <h3>No result found!</h3>
          <h3>Try to search another key word!</h3>
          <img alt={"No Data"} src="/img/dog_empty.gif" width={400}/>
          <button aria-label='Nothing found, go back'
            onClick={() => {
              const clearSearchEvent = new Event("clearSearch");
              const clearFilterEvent = new Event("clearFilter");
              window.dispatchEvent(clearSearchEvent);
              window.dispatchEvent(clearFilterEvent);
            }}
            className={'reset-search'} type="button">Go Back</button>
        </div>
      )}
    </div>
  );
}