import { useContext } from "react";
import AppContext from "../app";

const useFavs = () => {
  const [appStorage, setStorage] = useContext(AppContext);

  const updateFavs = (favs) => {
    window.localStorage.setItem("favs".JSON.stringify(favs));
    setStorage((prevState) => ({ ...prevState, favs }));
  };
  return {
    favs: appStorage.favs,
    updateFavs,
  };
};

export default useFavs;
