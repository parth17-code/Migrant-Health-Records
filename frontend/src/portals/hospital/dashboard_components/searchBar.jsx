export default function SearchBox({query, setQuery}){

    return <div className="searchBox">
        <input type='text' placeholder='Search Patient by Name or Migrant ID' onChange={e => setQuery(e.target.value)} value={query} />
        <input type='text' placeholder='Search Patient by Name or Migrant ID' onChange={e => setQuery(e.target.value)} value={query} className="w-full p-2 border border-gray rounded-md focus:outline-none" />
    </div>
}