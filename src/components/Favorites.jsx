import React from 'react';
import '../App';
import { useAppContext } from './context/appContext';

const Favorites = () => {
    const {favorites,addToFavotites,removeFromFavorites} = useAppContext();
console.log("favorites are ",favorites);

const favoritesChecker = (id) => {
const boolean = favorites.some((book) => book.id === id);
return boolean;
}
    return (
        <div className='favorites'>
             {favorites.length > 0 ? favorites.map((book)=>{
                console.log(book,"book",book.title,book.image_url);
                return(
               <div key={book.id} className='book'>
                <div><h2>{book.title}</h2></div>
                <div><img src={book.image_url} alt="#"/></div>
                {
                    favoritesChecker(book.id) ? 
                    <button className='button' onClick={() => removeFromFavorites(book.id)}>Remove Favorites</button>:
                    <button className='button' onClick={() => addToFavotites(book)}>Add Favorites</button>
                }
                <div></div>
                </div>
                )
            }): <h4> You dont have any favorites yet</h4>}

        </div>
    );
};

export default Favorites;