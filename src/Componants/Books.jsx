import React, { useState } from "react";
import { useQuery } from "react-query";
import Book from "./Book.jsx";

const getBooks = async ({queryKey}) => {
    const [key , searchQuery , startPoint] = queryKey;
    console.log(key);
    let q;
    if(searchQuery[1] === "title"){
        q= `+intitle:${searchQuery[0]}`;
    }else{
        q= `+inauthor:${searchQuery[0]}`;
    }
    const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&startIndex=${startPoint}`);
    
    return data.json()
}

const Books = ({searchQuery, setBookId}) =>{
    const [startPoint , setStartPoint] = useState(0);
    const query = ["books", searchQuery , startPoint];
    const {data , isLoading , isError, error} = useQuery( query , getBooks);
    
    if(isLoading){
        return(
            <div>
                loading..
            </div>
        )
    }
    if (isError) {
        return(
            <div>
                {error.message}
            </div>
        )
    }
    if(data){

        return(
            <div>
                {data.items.map(book =>{
                    return(<div key={book.id}> <Book details={book} /> </div>)
                })}

                <button onClick={()=>{setStartPoint(Math.max(startPoint -10, 0))}} disabled={startPoint===0}>Prev</button>
                <span>#{`${Math.floor(startPoint/10)+1}`}</span>
                <button onClick={()=>{setStartPoint(Math.min(startPoint +10, Math.ceil(data.totalItems)))}} disabled={startPoint>=(Math.ceil((data.totalItems-10)/10)*10)} >Next</button>
            </div>

                
        )
        
    }else{
        return(<></>)
    }

}

export default Books