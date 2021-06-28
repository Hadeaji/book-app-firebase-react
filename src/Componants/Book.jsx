import React from "react";
import {  Link } from "react-router-dom";


const Book = ({details, setBookId}) =>{

    

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
            <Link onClick={()=>setBookId(`${details.id}`)} to='/details'>More Details</Link>
        </div>
        
    )
    
}

export default Book