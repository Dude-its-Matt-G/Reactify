import { useContext } from "react";
import AppContext from "../app";

const useInput = () => {
  const [appStorage, setStorage] = useContext(AppContext);

  const setInput = (input) => {
    setStorage((prevState) => ({ ...prevState, input }));
    console.log(input);
  };

  return {
    input: appStorage.input,
    setInput,
  };
};

export default useInput;
