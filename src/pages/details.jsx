import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';


const Detail = () => {

        const { id } = useParams();
        const [data,setData] = useState({})

        useEffect(()=>{
             const fetching = async () =>{
                 const data = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
                    setData( await data.json())
             }
             fetching()
        }, [id])
    try{
       
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
                    {data.volumeInfo.description.replace(/<[^>]*>/g, '')}
                </h3>
            </div>
        )
    }
    catch (e){
        
       
       return<></>
    }
}

export default Detail