import React, { useState } from 'react';
import { spotyArtist, header } from '../../config';
import { Redirect } from "react-router-dom";
import './search-home.scss';
import useArtist from '../../context/artist';

const SearchBar = (props) => {

  const { type,placeholder,name,states, classname, classnameWrite} = props

  const [ value, setValue ] = useState('');
  const { setArtist } = useArtist();
  const [redirect, setRedirect] = useState(false);

  const inputValue = e => {setValue(e.target.value);}

  const getData = async e => {
    e.preventDefault();
    try{
      const res = await fetch(`${spotyArtist.url}?q=${value}&type=${spotyArtist.type}&limit=8`,{headers:header})
      const artista = await res.json();
      console.log(artista)   
     
       if(artista.status === 401){
          alert("Tu sesión expiró por favor logueate nuevamente");
            return;
            }
      if(artista.artists.items.length < 1){
          alert("Ups! No encontramos ese artista, por favor intenta de nuevo.");
            return;
            }
      else {
          let data = artista.artists.items
          setArtist(data)
          setRedirect(true);
          }
          console.log(artista)        
        } catch(error){
            console.log(error)
            alert("Hubo un error para buscar el artista, intentá nuevamente.");
        }       
    }

  return(
    <div>
    <form onSubmit={getData} className={classname}>
      <button className="search__button">
        <img src="/images/search-solid-black.svg" alt="search logo" className="search__icon"/>
      </button>
      <input 
        type={type} 
        className={classnameWrite}
        placeholder={placeholder} 
        name={name} 
        onChange={inputValue}
        value={states}
      />
    </form>
    {redirect && <Redirect to="/artistlist" />}
    </div>
  )
}

export default SearchBar