

import { useState } from 'react'


function GalleryItem({musicItem}) {

    let [view, setView] = useState(false)

    return (
        
        <div className="gallery-item" onClick={() => setView(!view)} style={{ 'display': 'block' }}>
            
            <h3>{musicItem.artistName}</h3>
            
            <h3>{musicItem.trackName}</h3>
            <br/>
        </div>

        )
}


export default GalleryItem
