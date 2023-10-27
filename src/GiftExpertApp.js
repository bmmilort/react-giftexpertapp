

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// import PropTypes from 'prop-types';

export const GiftExpertApp = (  ) => {
 

const [categories, setCategories] = useState(['phineas and ferb'])

// const handleAdd = () => {
// //    setCategories([...categories,'categoría añadida']);
//     setCategories (cate => [...cate, 'Categoría añadida']);
// }

    return (
       <>
        <h2> GiftExpertApp </h2> 
        <AddCategory setCategories= {setCategories}/>       
        <hr/>

        
        <ol>
            {
                categories.map( category => 
                <GifGrid 
                key = {category}
                category={category} 
                />
                )
            } 
        </ol>

        </>

    );
}


