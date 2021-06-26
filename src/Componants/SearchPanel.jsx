import React from "react";

const SearchPanel = ({setSearch}) =>{

    function searching(e) {
        e.preventDefault();
        setSearch([e.target.searchbar.value,e.target.searchBy.value]);
    }

    return(
        <form action="" onSubmit={(e)=>{searching(e)}}>
            <input name="searchbar" id="searchbar" type="text" />

            <input name="searchBy" id="title" type="radio" value="title" defaultChecked /> 
            <label htmlFor="title">Title</label>

            <input name="searchBy" id="author" type="radio" value="author" /> 
            <label htmlFor="author">Author</label>

            <input type="submit" />
        </form>

    )
}

export default SearchPanel