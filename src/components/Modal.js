import React from 'react'
import './Modal.css'

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        setSelectedImg();
    }

    return (
        <div className='backdrop'
            onClick={handleClick}
        >
            <img src={selectedImg} alt="mypic" />
        </div>
    )
}

export default Modal
