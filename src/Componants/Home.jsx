import React from "react";
import Book from "./Book";

const Home = ({data}) =>{
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


}

export default Home