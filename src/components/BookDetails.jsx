import React,{useState,useEffect} from 'react';
import "../App";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { BOOK_DETAILS_URL } from '../API';

const BookDetails = () => {
    const [book,setBook] = useState({});
    //this {id} name should be same as the router /:id name exactly similar to that
    const {id} = useParams();
   
    useEffect(()=>{
      axios.get(`${BOOK_DETAILS_URL}/${id}`)
      .then(res => {
    setBook(res.data);
      }).catch(err=>console.log(err));
    },[id])

    return (
        <div className='book-details'>
            <div className='book-image'>
        <h2>{book?.title}</h2>
       <img src={book?.image_url} alt="#"/>
       <div className='book-description'>
       <h2>Description</h2>
       <p>{book?.description}</p>
       <h2>Authors</h2>
       <p>{book?.authors}</p>
       </div>
       </div>
       </div>
    );
};

export default BookDetails;