import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadPhoto = () => {
    const [ file, setFile] = useState(null);
    const [ error, setError ] = useState(null);

    const imageType = ['image/png', 'image/jpeg'];

    const handleUpdate = (e) => {
        let selected = e.target.files[0];
        console.log(selected)
        if(selected && imageType.includes(selected.type)) {
            setFile(selected);
            setError('');
        }else {
            setFile(null);
            setError("Please select the png/jpeg files")
        }
    }

    return (
        <form>
            <input type="file" onChange={handleUpdate} />
            { error && <div>{error}</div> }
            {/* { file && <div>{file.name}</div> } */}
            { file && <ProgressBar file={file} setFile={setFile} /> }
        </form>
    )
}

export default UploadPhoto;