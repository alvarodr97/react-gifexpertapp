import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setCategories( [...categories, 'HunterXHunter'] );
    //     // setCategories( ['HunterXHunter', ...categories] );
    // }

    const [categories, setCategories] = useState(['One Punch']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />

            {/* <button onClick= { handleAdd }>Agregar</button> */}

            <ul>
                {
                    categories.map( category =>(
                        // <li key={ category }>{ category }</li>
                        <GifGrid 
                            key = { category }
                            category = { category }
                        />
                    ))
                }
            </ul>

        </>
    )
}
