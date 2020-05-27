import { useContext } from "react";
import AppContext from "../app";

const useFavorites = () => {
  const [appStorage, setStorage] = useContext(AppContext);

  const updateFavs = (favorites) => {
    window.localStorage.setItem("favs".JSON.stringify(favorites));
    setStorage((prevState) => ({ ...prevState, favorites }));
  };
  return {
    favorites: appStorage.favorites,
    updateFavs,
  };
};

export default useFavorites;

