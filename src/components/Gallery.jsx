


import React from 'react'
import GalleryItem from './GalleryItem'

function Gallery({data}) {
    return (

        <div>

            {data.map((musicItem, i) => (
                <GalleryItem key={i} musicItem={musicItem}/>
            ))}
            
        </div>
    )
}


export default Gallery





