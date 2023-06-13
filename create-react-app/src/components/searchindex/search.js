import React, { useEffect, useState } from 'react';

const FilterForm = (props) => {
  const options = props.options.map(option => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div style={{ marginRight: '35px', marginBottom: '20px' }}>
      <label className={'filter-label'} htmlFor={props.id}>
        {props.label}:
      </label>
      <select
        onChange={(e) => {
          props.onChange(props.name, e.target.value);
        }}
        name={props.name}
        id={props.id+" "}
        aria-label={`${props.label} Filter`}
      >
        {options}
      </select>
    </div>
  );
};

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    window.addEventListener('clearSearch', () => {
      setKeyword('');
      onSearch('');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div action="#" method="get" id="search-form">
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch(keyword);
          }
        }}
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        type="search"
        name="search"
        id="search"
        placeholder="Search for animal names, breed, sizes, etc..."
        aria-label="Search Animals"
      />
      <button
        onClick={() => onSearch(keyword)}
        type="button"
        aria-label="Search Button"
      >
        Search
      </button>
    </div>
  );
};

const FilterDropdown = (props) => {
  const [condition, setCondition] = useState({});

  useEffect(() => {
    window.addEventListener('clearFilter', () => {
      setCondition({});
      props.onSearch({});
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="nav-item dropdown">
      <span
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        role="button"
        aria-expanded="false"
        aria-label="Toggle Filter Dropdown"
      >
        Filter
      </span>
      <div className="dropdown-menu">
        <form action="#" method="get" className="filter-form">
          {props.filters.map((filter) => (
            <FilterForm
              onChange={(name, value) => {
                setCondition({
                  ...condition,
                  [name]: value,
                });
              }}
              key={filter.id}
              {...filter}
            />
          ))}
          <button
            style={{ width: '80%' }}
            onClick={() => {
              props.onSearch(condition);
            }}
            type="button"
            aria-label="Apply Filters"
          >
            Filter
          </button>
        </form>
      </div>
    </div>
  );
};

const FilterSection = (props) => {
  const [condition, setCondition] = useState({});

  useEffect(() => {
    window.addEventListener('clearFilter', () => {
      setCondition({});
      props.onSearch({});
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form
      action="#"
      method="get"
      id="filter-form"
      className="search-filter-container"
    >
      {props.filters.map((filter) => (
        <FilterForm
          onChange={(name, value) => {
            setCondition({
              ...condition,
              [name]: value,
            });
          }}
          key={filter.id}
          {...filter}
        />
      ))}
      <button
        onClick={() => {
          props.onSearch(condition);
        }}
        type="button"
        aria-label="Apply Filters"
      >
        Filter
      </button>
    </form>
  );
};

const SearchFilter = (props) => {
  const filters = [
    {
      name: 'age',
      id: 'dp-age',
      label: 'Age',
      options: [
        { value: 'all', label: 'All' },
        { value: 'young', label: 'Young' },
        { value: 'adult', label: 'Adult' },
        { value: 'senior', label: 'Senior' },
      ],
    },
    {
      name: 'gender',
      id: 'dp-gender',
      label: 'Gender',
      options: [
        { value: 'all', label: 'All' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
    },
    {
      name: 'size',
      id: 'dp-size',
      label: 'Size',
      options: [
        { value: 'all', label: 'All' },
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
      ],
    },
    {
      name: 'color',
      id: 'dp-color',
      label: 'Color',
      options: [
        { value: 'all', label: 'All' },
        { value: 'black', label: 'Black' },
        { value: 'white', label: 'White' },
        { value: 'grey', label: 'Grey' },
        { value: 'brown', label: 'Brown' },
      ],
    },
    {
      name: 'distance',
      id: 'dp-distance',
      label: 'Distance',
      options: [
        { value: 'all', label: 'All' },
        { value: '< 5 miles', label: '< 5 miles' },
        { value: '< 10 miles', label: '< 10 miles' },
        { value: '< 50 miles', label: '< 50 miles' },
        { value: '< 100 miles', label: '< 100 miles' },
      ],
    },
  ];
  const [keyword, setKeyword] = useState('');
  const [condition, setCondition] = useState({});

  useEffect(() => {
    props.onSearch(keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  useEffect(() => {
    props.onFilter(condition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition]);

  return (
    <section className="bg-beige">
      <div className="search-filter-container">
        <SearchBar onSearch={setKeyword} />
        <FilterDropdown onSearch={setCondition} filters={filters} />
      </div>

      <div id="search-pages" className="">
        <FilterSection onSearch={setCondition} filters={filters} />
      </div>
    </section>
  );
};

export default SearchFilter;
