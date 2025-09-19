import React from 'react';

export default function SearchBox({query, setQuery}){

    return <div className="searchBox">
        <input type='text' placeholder='Search Patient by Name or Migrant ID' onChange={e => setQuery(e.target.value)} value={query} />
    </div>
}