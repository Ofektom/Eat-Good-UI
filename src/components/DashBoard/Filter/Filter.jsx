import React from 'react'
import './Filter.css'
import PropTypes from 'prop-types'

const Filter = ({onSelectFilter}) => {
    const handleFilterSelection = (filterOption) => {
        onSelectFilter(filterOption);
    };

    return (
        <div className="dropdown-menu">
            <ul>
                <li onClick={() => handleFilterSelection('vendor')}>Vendor</li>
                <li onClick={() => handleFilterSelection('price')}>Price</li>
                <li onClick={() => handleFilterSelection('location')}>Location</li>
            </ul>
        </div>
    );
}

Filter.propTypes = {
    onSelectFilter: PropTypes.func.isRequired,
};

export default Filter