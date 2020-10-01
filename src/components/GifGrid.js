// import React, { useState, useEffect } from 'react';
import React from 'react';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);

    // Cuando recargas la pagina con un boton que suma por ejemplo
    // la lista se cargaria todo el rato. Con el useEffect
    // y el [] vacio como argumento, solo carga una vez

    // useEffect( () => {
    //     // getGifs();
    //     getGifs(category)
    //         .then( imgs => setImages(imgs));
    // }, [ category ] );

    // Esto es un custom hook, lo de arriba es la manera inicial
    // en que se hizo todo.

    const { data:images, loading } = useFetchGifs( category );

    

    return (
        <>
        <h3 className="animate__animated animate__fadeIn" > {category} </h3>

        { loading && <p className="animate__animated animate__flash" >Loading...</p> }

        <div className = "card-grid">            
              {
                images.map( img => (
                      <GifGridItem 
                        key = { img.id }
                        { ...img }
                      />
                ) )
              }
            
        </div>
        </>
    )
}
