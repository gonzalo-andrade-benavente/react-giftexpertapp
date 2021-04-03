import React, { useState } from 'react';
import { useEffect } from 'react';

import GiftGridItem from './GifGridItem';
import { getGifs }  from '../helpers/getGifs';
//import { useFetchGifs } from '../hooks/useFetchGifs';

const GiftGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    //useFetchGifs();

    useEffect(() => {
        getGifs( category )
            .then( imgs => setImages(imgs) );
    }, [ category ]); 


    return (
        <>
            <h3 className=" animate__animated animate__bounce ">{ category }</h3>
            <div className="card-grid">

                {
                    images.map((img) =>
                        <GiftGridItem key={img.id} {...img} />
                    )
                }
            </div>
        </>
    )

}

export default GiftGrid;