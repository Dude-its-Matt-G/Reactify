import React, { useState } from 'react';
import { spotyArtist, header } from '../../config';
import './search-home.scss';

const SearchBar = (props) => {

  const { type,placeholder,name} = props

  const [value, setValue] = useState('');

  const inputValue = e => {
    setValue(e.target.value);
    }

  const getData = async (props) => {

    try{
      const res = await fetch(`${spotyArtist.url}?q=${value}&type=${spotyArtist.type}`,{headers:header})
      const data = await res.json();
      /* const linkTo = e => window.location.href='/artist';
      linkTo(); */
        if(data.status === 401){
          alert("Tu sesión expiró por favor logueate nuevamente");
            return;
            }
         if(data.artists.items.length < 1){
          alert("Ups! No encontramos ese artista, por favor intenta de nuevo.");
            return;
            } 
        console.log(data)
        } catch(error){
            console.log(error)
            alert("Hubo un error para buscar el artista, intentá nuevamente.");
        }
    }
    

  return(
    <div className="search">
      <button className="search__button" onClick={getData}>
        <img src="/images/search-solid-black.svg" alt="search logo" className="search__icon"/>
      </button>
      <input 
        type={type} 
        className="search__write"
        placeholder={placeholder} 
        name={name} 
        onChange={inputValue}
        value={value}
      />
    </div>
  )
}

export default SearchBar