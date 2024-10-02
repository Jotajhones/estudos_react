import { createContext, useContext, useState  } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>

            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavoriteContext() {
    const  { favorite, setFavorite } =  useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        // Verificar se o item já está na lista
        const repeatedFavorite = favorite.some((item)=>item.id === newFavorite.id)

        // Nova lista recebe lista anterior
        let newList = [...favorite]

        // Se não estiver repetido add
        if(!repeatedFavorite) {
            newList.push(newFavorite);
            return setFavorite(newList);
        }

        // Se estiver repetido ser excluido da lista(DESFAVORITAR)
        newList = favorite.filter((fav)=> fav.id !== newFavorite.id)
        return setFavorite(newList)
    }

    return {
        favorite,
        addFavorite
    }
}