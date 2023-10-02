const Filter = () => {
    return (
        <div className="filter">
            <h2>Filter</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select>
                        <option value="All"> All</option>
                        <option value="Close">Close</option>
                        <option value="Open">Open</option>
                    </select>
                </div>
                <div>
                    <p>Order:</p>
                    <button>Asc</button>
                    <button>Desc</button>
                </div>
            </div>
        </div>
    )
}

export default Filter;