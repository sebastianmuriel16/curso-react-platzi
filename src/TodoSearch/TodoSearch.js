import React from 'react';
import './TodoSearch.css'


function TodoSearch({
    searchValue,//resivir los estados en forma de props
    setSearchValue,
}){


    return (
        <input className='TodoSearch' placeholder="Cortar por que si" // en este caso el event es nuestro elemento input
        value={searchValue}
        onChange={(event)=>{
            setSearchValue(event.target.value); // en este caso el event es nuestro elemento input,
                                                // usamos el setSearchValue para actulizar y guardar la entrada del value 
        }}  
        />
    )
  }

  export {TodoSearch}