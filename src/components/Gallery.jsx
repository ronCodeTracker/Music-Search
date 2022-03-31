


import { useContext } from 'react'
import {DataContext} from '../context/DataContext'
import GalleryItem from './GalleryItem'

function Gallery() {
    const data = useContext(DataContext)
    return (

        <div>

            {data.map((musicItem, i) => (
                <GalleryItem key={i} musicItem={musicItem}/>
            ))}
            
        </div>
    )
}


export default Gallery





