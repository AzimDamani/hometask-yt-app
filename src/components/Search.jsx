import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import "../index.css";

const Search = () =>{
    const [inp, setInp] =useState("");
    const {setSearchTerm}= useContext(MyContext);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inp);
        setSearchTerm(inp);
    }
    return(
        <div className="search">
            <input type="text" className="inp" placeholder="Search...." value={inp} onChange={(e) => setInp(e.target.value)}/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default Search;