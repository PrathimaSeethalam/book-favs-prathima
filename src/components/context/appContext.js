import { createContext, useContext } from "react";
import { useState } from "react";
import App from "../../App";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if(context === undefined){
        throw new Error("app context not defined");
    }
    return context;
}

const AppContextProvider = ({children}) => {
    const [favorites,setFavorites] = useState([]);
    const addToFavotites = (book) => {
const oldFavorites = [...favorites];
const newFavorites = oldFavorites.concat(book);
setFavorites(newFavorites);
    }
    const removeFromFavorites = (id) => {
const oldFavorites = [...favorites];
const newFavorites = oldFavorites.filter((book)=>book.id !== id)
setFavorites(newFavorites);
    }

    return (
        <AppContext.Provider value={{favorites,addToFavotites,removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;