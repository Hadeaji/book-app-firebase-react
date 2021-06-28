import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Book = ({details}) =>{
    let imageSrc;
    let title;
    let author;
    
    try{
        imageSrc = details.volumeInfo.imageLinks.thumbnail;
    }catch{
        imageSrc = "https://i.imgur.com/J5LVHEL.jpg";
    }

    try{
        title = details.volumeInfo.title;
    }catch{
        title = "Unknown";
    }

    try{
        author = details.volumeInfo.authors[0];
    }catch{
        author = "Unknown";
    }

    return(
        <div>
            <img src={`${imageSrc}`} alt="" />
            <p>{`${title}`}</p>
            <p>{`${author}`}</p>
            <Link to="/Details" params={{ Details: "hello" }} >Details</Link>
        </div>
    )
    
}

export default Book