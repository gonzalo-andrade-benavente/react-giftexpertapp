import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';
import GiftGridItem from './GifGridItem';

const GiftGrid = ({ category }) => {

    const { data:images , loading } =  useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p className=" animate__animated animate__flash ">Loading..</p> }
   
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