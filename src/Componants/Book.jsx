import React from "react";

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
        </div>
    )
    
}

export default Book