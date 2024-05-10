import React ,{useState,useEffect} from 'react';
import {API_URL} from "../API";
import axios from "axios";
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
    const [books,setBooks] = useState([]);
const {favorites,addToFavotites,removeFromFavorites} = useAppContext();
console.log("favorites are ",favorites);
const navigate = useNavigate();
const favoritesChecker = (id) => {
const boolean = favorites.some((book) => book.id === id);
return boolean;
}
    useEffect(()=>{
        axios.get(API_URL).then(res=>{
            console.log(res.data)
            setBooks(res.data)
        }).catch(err=>console.log(err))
    },[])
    return (
        <div className='book-list'>
            {books.map((book)=>{
                console.log(book,"book",book.title,book.image_url);
                return(
               <div key={book.id} className='book'>
                <div><h2>{book.title}</h2></div>
                <div><img src={book.image_url} alt="#" onClick={()=>navigate(`/book/${book.id}`)}/></div>
                {
                    favoritesChecker(book.id) ? 
                    <button className='button' onClick={() => removeFromFavorites(book.id)}>Remove Favorites</button>:
                    <button className='button' onClick={() => addToFavotites(book)}>Add Favorites</button>
                }
                <div></div>
                </div>
                )
            })}
        </div>
    );
};

export default BookList;