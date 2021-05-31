import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({setSelectedImg}) => {
    const { docs } = useFirestore('images');
    // console.log(docs)

    return (
        <div className="img-grid">
            { docs && docs.map(doc=> {
                return (
                    <div className="img-container" key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                        <img src={doc.url} alt="images" />
                    </div>
                )
            }) }
        </div>
    )
}

export default ImageGrid;