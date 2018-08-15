import React from 'react';

const searchbox = props => {
    return(
        <div className="pa2">
            <input value={props.searchField} onChange={props.onSearchChange} className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots"/>
        </div>
    );
};

export default searchbox;