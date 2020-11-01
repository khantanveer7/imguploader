import React, { useState } from 'react'
import LayoutImage from './LayoutImage'
import Modal from './Modal'
import UploadForm from './UploadForm'
import './Main.css'

const Main = () => {

    const [selectedImg, setSelectedImg] = useState();

    return (
        <>
            <nav>
                <h1>Image Uploader</h1>
            </nav>
            <UploadForm />
            <LayoutImage setSelectedImg={setSelectedImg} />
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </>
    )
}

export default Main
