import React, { useState } from "react";
import { useQuery } from "react-query";
import Book from "./Book.jsx";
import Home from "./Home.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Details from "./Details.jsx"

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
<<<<<<< HEAD
            <Router>
=======
                {data.items.map(book =>{
                    return(<div key={book.id}> <Book setBookId={setBookId} details={book} /> </div>)
                })}
>>>>>>> b24ac7e679309ce5412d1a2d61e499ee46bbb29b

                <Switch>
                    <Route exact path="/">
                        <Home date={data,} />
                    </Route>
                    
                    <Route path="/:Details">
                        <Details />
                    </Route>
                </Switch>


            </Router>
            </div>

                
        )
        
    }else{
        return(<></>)
    }

}

export default Books