import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GiftGrid from './components/GiftGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [ categories, setCategories] = useState(['Naruto']);

    return (
        <>

            <h2> GiftExpertApp </h2>
            
            <AddCategory setCategories={ setCategories }/>
            
            <hr />

            <ol>
                { 
                    categories.map( ( category , i ) => 
                        <GiftGrid 
                        key= { category }
                        category={ category }/>
                    )
                }
            </ol>

        </>

    )

}

export default GifExpertApp