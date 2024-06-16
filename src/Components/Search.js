import React from "react";
import { useGlobalContext } from "../Context/context";
//this is the test message
const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();

  return <div className="search">
    <div className="row">
      <div className="col-md-12">
        <div className="search-1">
          <form action="#" className="d-flex w-100" onSubmit={(e) => e.preventDefault()}>
            <input type="text" className="form-control" placeholder="Search Movie..." value={query} onChange={(e)=>setQuery(e.target.value)}/>
          </form>
          <div className="card-error text-center text-danger mt-2">
            <p>{isError.show && isError.msg}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Search;
