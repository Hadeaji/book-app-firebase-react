import React from "react";
<<<<<<< HEAD
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
=======
import {  Link } from "react-router-dom";


const Book = ({details, setBookId}) =>{

    
>>>>>>> b24ac7e679309ce5412d1a2d61e499ee46bbb29b

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
<<<<<<< HEAD
            <Link to="/Details" params={{ Details: "hello" }} >Details</Link>
=======
            <Link onClick={()=>setBookId(`${details.id}`)} to='/details'>More Details</Link>
>>>>>>> b24ac7e679309ce5412d1a2d61e499ee46bbb29b
        </div>
        
    )
    
}

export default Book