import React,{ useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, setFile}) => {
    const { progress, url } = useStorage(file);
    console.log(progress, "####")

    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url])

    return (
        <div className="progress" style={{width: progress + "%"}}>
        </div>
    )
}

export default ProgressBar;