import React, { useState } from 'react'
import './Navbar.css';
import PropTypes from 'prop-types';
import searchIcon from "/src/assets/vuesax-bulk-search-normal.png";
import filterIcon from "/src/assets/vuesax-bulk-candle-2.png";
import Filter from '../Filter/Filter';

const Navbar = ({handleSearch, handleFilter}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilter, setShowFilter] = useState(false);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = () => {
        handleSearch(searchTerm);
    };

    

  return (
    <div>
        <nav className="navbar-main">
        
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button> */}

            <div className="navbar-search">

                <form className="navbar-form">
                        <img src={searchIcon} className="search-icon" onClick={handleSearchClick} />
                        <input 
                            type="search" 
                            className="search-form-control" 
                            placeholder="Search" 
                            value={searchTerm}
                            aria-label="Search"
                            onChange={handleChange} 
                        />
                        <img 
                            src={filterIcon}
                            alt="Filter"
                            className="filter-icon"
                            onClick={toggleFilter} 
                        />
                        {showFilter && <Filter onSelectFilter={handleFilter} />}
                </form>
            </div>
        </nav>
    </div>
  )
}
Navbar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
};

export default Navbar