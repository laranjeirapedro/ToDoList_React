/* eslint-disable react/prop-types */
const Filter = ({filter, setFilter, setSort}) => {
    return (
        <div className="filter">
            <h2>Filter</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All"> All</option>
                        <option value="Close">Close</option>
                        <option value="Open">Open</option>
                    </select>
                </div>
                <div>
                    <p>Sort by name:</p>
                    <button onClick={() => setSort("Asc")}>A...</button>
                    <button onClick={() => setSort("Desc")}>Z...</button>
                </div>
            </div>
        </div>
    )
}

export default Filter;