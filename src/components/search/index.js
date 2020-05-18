import React, { useState } from 'react';
import './search.scss';
import { spotyArtist, header } from '../../config';

const InputSearch = (props) =>{
  const { type, placeholder,name} = props

  let inputClass = 'input';
    if(props.search){
      inputClass = 'input open';
  }

  const [value, setValue] = useState('');

  const inputValue = e => {
    setValue(e.target.value);
    }

  const getData = async (props) => {

    try{
      const res = await fetch(`${spotyArtist.url}?q=${value}&type=${spotyArtist.type}`,{headers:header})
      const data = await res.json();
        if(data.status === 401){
          alert("Intentá nuevamente.");
            return;
            }
        if(data.artists.items.length < 1){
          alert("No se encontró al artista, por favor escribí bien.");
            return;
            }
        console.log(data)
        } catch(error){
            console.log(error)
            alert("Hubo un error para buscar el artista, intentá nuevamente.");
        }
    }
    
 return(
  <div className={inputClass}>
    <button className="input__button" onClick={getData}>
      <img src="/images/search-solid-black.svg" alt="search logo" className="input__icon"/>
    </button>
    <input 
      type={type} 
      className="input__write"
      placeholder={placeholder} 
      name={name} 
      onChange={inputValue}
      value={value}
    />
  </div>
  )  
}

export default InputSearch