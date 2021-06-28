import React, { useEffect,useState } from 'react';
import cookies from 'react-cookies';

const Detail = () => {
    const id = cookies.load('id')
    const [data, setData] = useState({})
        useEffect(()=>{
             const fetching = async () =>{
                 const data = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
                  setData( await data.json())
             }
             fetching()
        }, [id])
    try{
        const description = {__html:`${data.volumeInfo.description}`};
        return(
            <div>
                <h1>
                    {data.volumeInfo.title}
                </h1>
                <img src={`${data.volumeInfo.imageLinks.thumbnail}`} alt="" />
                <ul>
                    {data.volumeInfo.authors.map(author => <li>{author}</li>)}
                </ul>
                <h2>
                    {data.volumeInfo.publisher}

                </h2>
                <h3>
                    {description}
                </h3>
            </div>
        )
    }
    catch{
        
        return <></>
    }
}

export default Detail