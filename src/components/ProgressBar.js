import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import './progressBar.css';

const ProgressBar = ({ file, setFile }) => {


    const { url, progress } = useStorage(file);

    useEffect(() => {
        // effect
        if (url) {
            setFile(null);
        }
    }, [url, setFile])
    return (
        <>
            <div className="progress__bar" style={{ width: progress + '%' }}></div>
        </>
    )
}

export default ProgressBar
