import React from 'react';
// aria-label helps for content readers to know what this is about (Accessibility performanse)
const searchbox = props => {
    return(
        <div className="pa2">
            <input aria-label="Search Robots" value={props.searchField} onChange={props.onSearchChange} className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots"/>
        </div>
    );
};

export default searchbox;