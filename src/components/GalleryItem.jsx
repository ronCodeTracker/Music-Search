
import { useState } from 'react'
import { Link } from 'react-router-dom'

function GalleryItem({musicItem}) {
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }

    const detailStyle = {
        'width': '80vw',
        'height': '50vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${musicItem.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': '100%',
        'color': 'yellow'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{musicItem.trackName}</h3>
                <h4>{musicItem.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h3>{musicItem.trackName}</h3>
                <h3>
                    <Link to={`/artist/${musicItem.artistId}`}>
                        {musicItem.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/artist/${musicItem.collectionId}`}>
                        {musicItem.collectionName}
                    </Link>
                </h3>
                <h4>{musicItem.primaryGenreName}</h4>
                <h4>{musicItem.releaseDate}</h4>
            </div>
        )
    }

    return (
        
        <div className="gallery-item" onClick={() => setView(!view)} style={{ 'display': 'block' }}>

            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}
            <br/>
        </div>

        )
}

export default GalleryItem
